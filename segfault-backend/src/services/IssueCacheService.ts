/**
 * Issue Cache Service
 * Caches issue summaries by geo-grid cells for fast map loading
 * Full issue details are loaded on-demand from DB
 */

import { redisClient } from '../data/redisClient';
import { prisma } from '../data/prisma/prismaClient';

// Cache TTL in seconds
const CACHE_TTL = 300; // 5 minutes for issue grid cells
const ISSUE_SUMMARY_TTL = 600; // 10 minutes for individual issue summaries

// Grid cell size in degrees (roughly 1km at equator)
const GRID_CELL_SIZE = 0.01;

// Lightweight issue summary for map display
export interface IssueSummary {
    id: number;
    title: string;
    status: string;
    issueType: string;
    latitude: number;
    longitude: number;
    voteCount: number;
    commentCount: number;
    createdAt: string;
}

type IssueSummaryRow = {
    id: number;
    title: string;
    status: string;
    issueType: string;
    latitude: number;
    longitude: number;
    createdAt: Date;
    upvote_count: number;
    comment_count: number;
};

function toIssueSummary(row: IssueSummaryRow): IssueSummary {
    return {
        id: row.id,
        title: row.title,
        status: row.status,
        issueType: row.issueType,
        latitude: row.latitude,
        longitude: row.longitude,
        voteCount: Number(row.upvote_count ?? 0),
        commentCount: Number(row.comment_count ?? 0),
        createdAt: row.createdAt.toISOString(),
    };
}

function chunkArray<T>(items: T[], chunkSize: number): T[][] {
    if (chunkSize <= 0) return [items];
    const chunks: T[][] = [];
    for (let i = 0; i < items.length; i += chunkSize) {
        chunks.push(items.slice(i, i + chunkSize));
    }
    return chunks;
}

function safeJsonParse<T>(value: string | null): T | null {
    if (!value) return null;
    try {
        return JSON.parse(value) as T;
    } catch {
        return null;
    }
}

// Convert lat/lng to grid cell key
function getGridCellKey(lat: number, lng: number): string {
    const cellLat = Math.floor(lat / GRID_CELL_SIZE);
    const cellLng = Math.floor(lng / GRID_CELL_SIZE);
    return `issues:grid:${cellLat}:${cellLng}`;
}

// Get all grid cells for a bounding box
function getGridCellsForBounds(
    minLat: number,
    maxLat: number,
    minLng: number,
    maxLng: number
): string[] {
    const cells: string[] = [];
    const startLat = Math.floor(minLat / GRID_CELL_SIZE);
    const endLat = Math.floor(maxLat / GRID_CELL_SIZE);
    const startLng = Math.floor(minLng / GRID_CELL_SIZE);
    const endLng = Math.floor(maxLng / GRID_CELL_SIZE);

    for (let lat = startLat; lat <= endLat; lat++) {
        for (let lng = startLng; lng <= endLng; lng++) {
            cells.push(`issues:grid:${lat}:${lng}`);
        }
    }
    return cells;
}

// Cache a single issue summary
async function cacheIssueSummary(issue: IssueSummary): Promise<void> {
    const key = `issue:summary:${issue.id}`;
    await redisClient.setex(key, ISSUE_SUMMARY_TTL, JSON.stringify(issue));
}

// Get cached issue summary
async function getCachedIssueSummary(issueId: number): Promise<IssueSummary | null> {
    const cached = await redisClient.get(`issue:summary:${issueId}`);
    if (cached) {
        return JSON.parse(cached);
    }
    return null;
}

// Cache issues for a grid cell
async function cacheGridCell(cellKey: string, issueIds: number[]): Promise<void> {
    await redisClient.setex(cellKey, CACHE_TTL, JSON.stringify(issueIds));
}

// Get cached grid cell
async function getCachedGridCell(cellKey: string): Promise<number[] | null> {
    const cached = await redisClient.get(cellKey);
    if (cached) {
        return JSON.parse(cached);
    }
    return null;
}

async function mgetChunked(keys: string[], chunkSize = 500): Promise<(string | null)[]> {
    if (keys.length === 0) return [];

    const chunks = chunkArray(keys, chunkSize);
    const chunkResults = await Promise.all(chunks.map((chunk) => redisClient.mget(...chunk)));
    return chunkResults.flat();
}

async function queryIssuesInBoundsWithCounts(
    minLat: number,
    maxLat: number,
    minLng: number,
    maxLng: number,
    includeResolved: boolean
): Promise<IssueSummaryRow[]> {
    return prisma.$queryRawUnsafe<IssueSummaryRow[]>(
        `WITH bbox AS (
            SELECT i.id, i.title, i.status, i."issueType", i.location, i."createdAt"
            FROM "Issue" i
            WHERE i.location && ST_MakeEnvelope($1, $2, $3, $4, 4326)
            AND ST_Within(i.location, ST_MakeEnvelope($1, $2, $3, $4, 4326))
            AND ($5::boolean OR i.status != 'RESOLVED'::"IssueStatus")
        )
        SELECT 
            b.id, b.title, b.status, b."issueType",
            ST_Y(b.location) as latitude,
            ST_X(b.location) as longitude,
            b."createdAt",
            COALESCE(uv.upvote_count, 0) as upvote_count,
            COALESCE(cm.comment_count, 0) as comment_count
        FROM bbox b
        LEFT JOIN (
            SELECT "issueId", COUNT(*) as upvote_count
            FROM "IssueUpvote"
            WHERE "issueId" IN (SELECT id FROM bbox)
            GROUP BY "issueId"
        ) uv ON b.id = uv."issueId"
        LEFT JOIN (
            SELECT "issueId", COUNT(*) as comment_count
            FROM "Comment"
            WHERE "issueId" IN (SELECT id FROM bbox)
            GROUP BY "issueId"
        ) cm ON b.id = cm."issueId"
        ORDER BY b."createdAt" DESC
        LIMIT 500
        `,
        minLng,
        minLat,
        maxLng,
        maxLat,
        includeResolved
    );
}

async function queryIssueSummariesByIds(ids: number[], includeResolved: boolean): Promise<IssueSummaryRow[]> {
    if (ids.length === 0) return [];

    return prisma.$queryRawUnsafe<IssueSummaryRow[]>(
        `WITH ids AS (SELECT UNNEST($1::int[]) AS id)
        SELECT 
            i.id, i.title, i.status, i."issueType",
            ST_Y(i.location) as latitude,
            ST_X(i.location) as longitude,
            i."createdAt",
            COALESCE(uv.upvote_count, 0) as upvote_count,
            COALESCE(cm.comment_count, 0) as comment_count
        FROM "Issue" i
        INNER JOIN ids ON i.id = ids.id
        LEFT JOIN (
            SELECT "issueId", COUNT(*) as upvote_count
            FROM "IssueUpvote"
            WHERE "issueId" = ANY($1::int[])
            GROUP BY "issueId"
        ) uv ON i.id = uv."issueId"
        LEFT JOIN (
            SELECT "issueId", COUNT(*) as comment_count
            FROM "Comment"
            WHERE "issueId" = ANY($1::int[])
            GROUP BY "issueId"
        ) cm ON i.id = cm."issueId"
        WHERE ($2::boolean OR i.status != 'RESOLVED'::"IssueStatus")
        `,
        ids,
        includeResolved
    );
}

// Fetch issues for a bounding box with caching
export async function getIssuesInBounds(
    minLat: number,
    maxLat: number,
    minLng: number,
    maxLng: number,
    includeResolved = false
): Promise<IssueSummary[]> {
    const cells = getGridCellsForBounds(minLat, maxLat, minLng, maxLng);

    if (cells.length > 100) {
        return fetchIssuesFromDb(minLat, maxLat, minLng, maxLng, includeResolved);
    }

    const allIssueIds = new Set<number>();
    const uncachedCells: string[] = [];

    // 1) Bulk fetch grid cells from Redis (single batched read)
    const cellValues = await mgetChunked(cells, 500);
    for (let i = 0; i < cells.length; i++) {
        const cellKey = cells[i]!;
        const ids = safeJsonParse<number[]>(cellValues[i] ?? null);
        if (ids) {
            for (const id of ids) allIssueIds.add(id);
        } else {
            uncachedCells.push(cellKey);
        }
    }

    const summaryById = new Map<number, IssueSummary>();
    const redisWrites: Array<{ key: string; seconds: number; value: string }> = [];

    // 2) If any cells were missing, fill them with ONE bbox spatial query
    if (uncachedCells.length > 0) {
        const rows = await queryIssuesInBoundsWithCounts(minLat, maxLat, minLng, maxLng, includeResolved);
        const cellToIds = new Map<string, number[]>();

        // If we had to go to the DB for this viewport anyway, trust the bbox query as the
        // definitive source for the response set (avoids extra work on cached IDs that are
        // inside grid cells but outside the precise bounds).
        allIssueIds.clear();

        // Ensure empty cells are cached too (prevents repeated cache-miss fallback)
        for (const cellKey of uncachedCells) {
            cellToIds.set(cellKey, []);
        }

        for (const row of rows) {
            const summary = toIssueSummary(row);
            summaryById.set(summary.id, summary);
            allIssueIds.add(summary.id);

            const cellKey = getGridCellKey(summary.latitude, summary.longitude);
            const list = cellToIds.get(cellKey);
            if (list) list.push(summary.id);

            redisWrites.push({
                key: `issue:summary:${summary.id}`,
                seconds: ISSUE_SUMMARY_TTL,
                value: JSON.stringify(summary),
            });
        }

        for (const [cellKey, ids] of cellToIds.entries()) {
            redisWrites.push({
                key: cellKey,
                seconds: CACHE_TTL,
                value: JSON.stringify(ids),
            });
        }
    }

    // 3) Bulk fetch missing issue summaries from Redis
    const allIds = Array.from(allIssueIds);
    const idsNeedingRedis = allIds.filter((id) => !summaryById.has(id));
    const summaryKeys = idsNeedingRedis.map((id) => `issue:summary:${id}`);
    const summaryValues = await mgetChunked(summaryKeys, 500);

    const missingIds: number[] = [];
    for (let i = 0; i < idsNeedingRedis.length; i++) {
        const id = idsNeedingRedis[i]!;
        const parsed = safeJsonParse<IssueSummary>(summaryValues[i] ?? null);
        if (parsed) {
            summaryById.set(id, parsed);
        } else {
            missingIds.push(id);
        }
    }

    // 4) Batch DB query for any summaries still missing (ONE query)
    if (missingIds.length > 0) {
        const rows = await queryIssueSummariesByIds(missingIds, includeResolved);
        for (const row of rows) {
            const summary = toIssueSummary(row);
            summaryById.set(summary.id, summary);
            redisWrites.push({
                key: `issue:summary:${summary.id}`,
                seconds: ISSUE_SUMMARY_TTL,
                value: JSON.stringify(summary),
            });
        }
    }

    // 5) One pipelined Redis write for all cache updates from this request
    if (redisWrites.length > 0) {
        await redisClient.setexMany(redisWrites);
    }

    // 6) Final in-memory filtering and ordering
    const results = Array.from(summaryById.values()).filter((summary) => {
        if (!includeResolved && summary.status === 'RESOLVED') return false;
        return (
            summary.latitude >= minLat &&
            summary.latitude <= maxLat &&
            summary.longitude >= minLng &&
            summary.longitude <= maxLng
        );
    });

    results.sort((a, b) => {
        const at = Date.parse(a.createdAt);
        const bt = Date.parse(b.createdAt);
        if (bt !== at) return bt - at;
        return b.id - a.id;
    });

    return results;
}

// Direct DB fetch (fallback for large areas) for PostGIS
async function fetchIssuesFromDb(
    minLat: number,
    maxLat: number,
    minLng: number,
    maxLng: number,
    includeResolved: boolean
): Promise<IssueSummary[]> {
    const rows = await queryIssuesInBoundsWithCounts(minLat, maxLat, minLng, maxLng, includeResolved);
    return rows.map(toIssueSummary);
}

// Invalidate cache for an issue (call after updates)
export async function invalidateIssueCache(issueId: number, lat?: number, lng?: number): Promise<void> {
    await redisClient.del(`issue:summary:${issueId}`);

    if (lat !== undefined && lng !== undefined) {
        const cellKey = getGridCellKey(lat, lng);
        await redisClient.del(cellKey);
    }
}

// Clear all issue cache
export async function clearAllIssueCache(): Promise<void> {
    const keys = await redisClient.keys('issues:grid:*');
    const summaryKeys = await redisClient.keys('issue:summary:*');
    if (keys.length > 0) await redisClient.del(...keys);
    if (summaryKeys.length > 0) await redisClient.del(...summaryKeys);
}

export default {
    getIssuesInBounds,
    invalidateIssueCache,
    clearAllIssueCache,
};
