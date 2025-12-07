/**
 * Issue Cache Service
 * Caches issue summaries by geo-grid cells for fast map loading
 * Full issue details are loaded on-demand from DB
 */
import { redisClient } from '../data/redisClient';
import { prisma } from '../data/prisma/prismaClient';
import { IssueStatus } from '../generated/prisma/enums';
// Cache TTL in seconds
const CACHE_TTL = 300; // 5 minutes for issue grid cells
const ISSUE_SUMMARY_TTL = 600; // 10 minutes for individual issue summaries
// Grid cell size in degrees (roughly 1km at equator)
const GRID_CELL_SIZE = 0.01;
// Convert lat/lng to grid cell key
function getGridCellKey(lat, lng) {
    const cellLat = Math.floor(lat / GRID_CELL_SIZE);
    const cellLng = Math.floor(lng / GRID_CELL_SIZE);
    return `issues:grid:${cellLat}:${cellLng}`;
}
// Get all grid cells for a bounding box
function getGridCellsForBounds(minLat, maxLat, minLng, maxLng) {
    const cells = [];
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
async function cacheIssueSummary(issue) {
    const key = `issue:summary:${issue.id}`;
    await redisClient.setex(key, ISSUE_SUMMARY_TTL, JSON.stringify(issue));
}
// Get cached issue summary
async function getCachedIssueSummary(issueId) {
    const cached = await redisClient.get(`issue:summary:${issueId}`);
    if (cached) {
        return JSON.parse(cached);
    }
    return null;
}
// Cache issues for a grid cell
async function cacheGridCell(cellKey, issueIds) {
    await redisClient.setex(cellKey, CACHE_TTL, JSON.stringify(issueIds));
}
// Get cached grid cell
async function getCachedGridCell(cellKey) {
    const cached = await redisClient.get(cellKey);
    if (cached) {
        return JSON.parse(cached);
    }
    return null;
}
// Fetch issues for a bounding box with caching
export async function getIssuesInBounds(minLat, maxLat, minLng, maxLng, includeResolved = false) {
    const cells = getGridCellsForBounds(minLat, maxLat, minLng, maxLng);
    // Limit grid cells to prevent massive queries
    if (cells.length > 100) {
        // Too many cells, query DB directly without caching
        return fetchIssuesFromDb(minLat, maxLat, minLng, maxLng, includeResolved);
    }
    const allIssueIds = new Set();
    const uncachedCells = [];
    // Check which cells are cached
    for (const cell of cells) {
        const cachedIds = await getCachedGridCell(cell);
        if (cachedIds) {
            cachedIds.forEach(id => allIssueIds.add(id));
        }
        else {
            uncachedCells.push(cell);
        }
    }
    // Fetch uncached cells from DB and cache them
    if (uncachedCells.length > 0) {
        for (const cellKey of uncachedCells) {
            const parts = cellKey.split(':');
            const latStr = parts[2];
            const lngStr = parts[3];
            if (!latStr || !lngStr)
                continue;
            const cellLat = parseInt(latStr) * GRID_CELL_SIZE;
            const cellLng = parseInt(lngStr) * GRID_CELL_SIZE;
            const cellIssues = await prisma.issue.findMany({
                where: {
                    latitude: { gte: cellLat, lt: cellLat + GRID_CELL_SIZE },
                    longitude: { gte: cellLng, lt: cellLng + GRID_CELL_SIZE },
                    ...(includeResolved ? {} : { status: { not: IssueStatus.RESOLVED } }),
                },
                select: {
                    id: true,
                    title: true,
                    status: true,
                    issueType: true,
                    latitude: true,
                    longitude: true,
                    createdAt: true,
                    _count: { select: { upvotes: true, comments: true } },
                },
            });
            const issueIds = cellIssues.map(i => i.id);
            await cacheGridCell(cellKey, issueIds);
            // Cache individual issue summaries
            for (const issue of cellIssues) {
                const summary = {
                    id: issue.id,
                    title: issue.title,
                    status: issue.status,
                    issueType: issue.issueType,
                    latitude: issue.latitude ?? 0,
                    longitude: issue.longitude ?? 0,
                    voteCount: issue._count.upvotes,
                    commentCount: issue._count.comments,
                    createdAt: issue.createdAt.toISOString(),
                };
                await cacheIssueSummary(summary);
                allIssueIds.add(issue.id);
            }
        }
    }
    // Fetch all issue summaries (from cache or DB)
    const results = [];
    for (const id of allIssueIds) {
        let summary = await getCachedIssueSummary(id);
        if (!summary) {
            // Fetch from DB if not in cache
            const issue = await prisma.issue.findUnique({
                where: { id },
                select: {
                    id: true,
                    title: true,
                    status: true,
                    issueType: true,
                    latitude: true,
                    longitude: true,
                    createdAt: true,
                    _count: { select: { upvotes: true, comments: true } },
                },
            });
            if (issue) {
                summary = {
                    id: issue.id,
                    title: issue.title,
                    status: issue.status,
                    issueType: issue.issueType,
                    latitude: issue.latitude ?? 0,
                    longitude: issue.longitude ?? 0,
                    voteCount: issue._count.upvotes,
                    commentCount: issue._count.comments,
                    createdAt: issue.createdAt.toISOString(),
                };
                await cacheIssueSummary(summary);
            }
        }
        if (summary) {
            // Filter by resolved status
            if (!includeResolved && summary.status === 'RESOLVED')
                continue;
            // Filter by actual bounds (grid cells may include nearby issues)
            if (summary.latitude >= minLat &&
                summary.latitude <= maxLat &&
                summary.longitude >= minLng &&
                summary.longitude <= maxLng) {
                results.push(summary);
            }
        }
    }
    return results;
}
// Direct DB fetch (fallback for large areas)
async function fetchIssuesFromDb(minLat, maxLat, minLng, maxLng, includeResolved) {
    const issues = await prisma.issue.findMany({
        where: {
            latitude: { gte: minLat, lte: maxLat },
            longitude: { gte: minLng, lte: maxLng },
            ...(includeResolved ? {} : { status: { not: IssueStatus.RESOLVED } }),
        },
        select: {
            id: true,
            title: true,
            status: true,
            issueType: true,
            latitude: true,
            longitude: true,
            createdAt: true,
            _count: { select: { upvotes: true, comments: true } },
        },
        take: 500, // Limit results
    });
    return issues.map(issue => ({
        id: issue.id,
        title: issue.title,
        status: issue.status,
        issueType: issue.issueType,
        latitude: issue.latitude ?? 0,
        longitude: issue.longitude ?? 0,
        voteCount: issue._count.upvotes,
        commentCount: issue._count.comments,
        createdAt: issue.createdAt.toISOString(),
    }));
}
// Invalidate cache for an issue (call after updates)
export async function invalidateIssueCache(issueId, lat, lng) {
    await redisClient.del(`issue:summary:${issueId}`);
    if (lat !== undefined && lng !== undefined) {
        const cellKey = getGridCellKey(lat, lng);
        await redisClient.del(cellKey);
    }
}
// Clear all issue cache
export async function clearAllIssueCache() {
    const keys = await redisClient.keys('issues:grid:*');
    const summaryKeys = await redisClient.keys('issue:summary:*');
    if (keys.length > 0)
        await redisClient.del(...keys);
    if (summaryKeys.length > 0)
        await redisClient.del(...summaryKeys);
}
export default {
    getIssuesInBounds,
    invalidateIssueCache,
    clearAllIssueCache,
};
//# sourceMappingURL=IssueCacheService.js.map