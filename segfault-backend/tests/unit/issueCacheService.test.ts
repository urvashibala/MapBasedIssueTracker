/**
 * Unit Tests for Issue Cache Service
 * Tests caching logic and grid cell calculations
 */

// Constants from IssueCacheService
const CACHE_TTL = 300; // 5 minutes
const ISSUE_SUMMARY_TTL = 600; // 10 minutes
const GRID_CELL_SIZE = 0.01; // Roughly 1km at equator

// Pure functions extracted for testing
function getGridCellKey(lat: number, lng: number): string {
    const cellLat = Math.floor(lat / GRID_CELL_SIZE);
    const cellLng = Math.floor(lng / GRID_CELL_SIZE);
    return `issues:grid:${cellLat}:${cellLng}`;
}

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

// Issue summary structure
interface IssueSummary {
    id: number;
    title: string;
    status: string;
    issueType: string;
    latitude: number;
    longitude: number;
    voteCount: number;
    commentCount: number;
    createdAt: string;
    imageBlobId: string | null;
}

describe('Issue Cache Service', () => {
    describe('Cache Configuration', () => {
        it('should have reasonable cache TTL values', () => {
            expect(CACHE_TTL).toBeGreaterThanOrEqual(60); // At least 1 minute
            expect(CACHE_TTL).toBeLessThanOrEqual(600); // At most 10 minutes
        });

        it('should have issue summary TTL longer than grid cell TTL', () => {
            expect(ISSUE_SUMMARY_TTL).toBeGreaterThanOrEqual(CACHE_TTL);
        });

        it('should have appropriate grid cell size', () => {
            // 0.01 degrees ≈ 1.11km at equator
            const kmAtEquator = GRID_CELL_SIZE * 111;
            expect(kmAtEquator).toBeGreaterThan(0.5);
            expect(kmAtEquator).toBeLessThan(2);
        });
    });

    describe('getGridCellKey', () => {
        it('should generate consistent key for same coordinates', () => {
            const key1 = getGridCellKey(28.6139, 77.209);
            const key2 = getGridCellKey(28.6139, 77.209);
            expect(key1).toBe(key2);
        });

        it('should generate different keys for different cells', () => {
            const key1 = getGridCellKey(28.61, 77.20);
            const key2 = getGridCellKey(28.62, 77.21);
            expect(key1).not.toBe(key2);
        });

        it('should generate same key for points in same cell', () => {
            // Points within 0.01 degrees should be in same cell
            const key1 = getGridCellKey(28.611, 77.201);
            const key2 = getGridCellKey(28.615, 77.205);
            expect(key1).toBe(key2);
        });

        it('should format key correctly', () => {
            const key = getGridCellKey(28.6139, 77.209);
            expect(key).toMatch(/^issues:grid:-?\d+:-?\d+$/);
        });

        it('should handle negative coordinates', () => {
            const key = getGridCellKey(-33.8688, 151.2093); // Sydney
            expect(key).toMatch(/^issues:grid:-?\d+:-?\d+$/);
        });

        it('should handle zero coordinates', () => {
            const key = getGridCellKey(0, 0);
            expect(key).toBe('issues:grid:0:0');
        });
    });

    describe('getGridCellsForBounds', () => {
        it('should return single cell for small bounds', () => {
            const cells = getGridCellsForBounds(28.61, 28.615, 77.20, 77.205);
            expect(cells.length).toBe(1);
        });

        it('should return multiple cells for larger bounds', () => {
            const cells = getGridCellsForBounds(28.60, 28.63, 77.20, 77.23);
            expect(cells.length).toBeGreaterThan(1);
        });

        it('should cover all cells in rectangular bounds', () => {
            // 2x2 grid of cells
            const cells = getGridCellsForBounds(28.60, 28.62, 77.20, 77.22);
            
            // Should include corners
            const cellLats = cells.map(c => parseInt(c.split(':')[2]));
            const cellLngs = cells.map(c => parseInt(c.split(':')[3]));
            
            expect(new Set(cellLats).size).toBeGreaterThanOrEqual(2);
            expect(new Set(cellLngs).size).toBeGreaterThanOrEqual(2);
        });

        it('should return cells in correct count', () => {
            // Approximately 3x3 cells
            const cells = getGridCellsForBounds(28.60, 28.63, 77.20, 77.23);
            // Floor calculation means we might get 3x3 or 4x4
            expect(cells.length).toBeGreaterThanOrEqual(9);
            expect(cells.length).toBeLessThanOrEqual(16);
        });

        it('should handle reversed min/max', () => {
            // If min > max, should return empty or handle gracefully
            const cells = getGridCellsForBounds(28.63, 28.60, 77.23, 77.20);
            expect(cells.length).toBe(0);
        });

        it('should not return duplicate cells', () => {
            const cells = getGridCellsForBounds(28.60, 28.65, 77.20, 77.25);
            const uniqueCells = [...new Set(cells)];
            expect(cells.length).toBe(uniqueCells.length);
        });
    });

    describe('Issue Summary Validation', () => {
        const validSummary: IssueSummary = {
            id: 1,
            title: 'Pothole Report',
            status: 'PENDING',
            issueType: 'POTHOLE',
            latitude: 28.6139,
            longitude: 77.209,
            voteCount: 5,
            commentCount: 2,
            createdAt: '2025-12-20T10:00:00.000Z',
            imageBlobId: 'image123.jpg',
        };

        it('should have all required fields', () => {
            expect(validSummary.id).toBeDefined();
            expect(validSummary.title).toBeDefined();
            expect(validSummary.status).toBeDefined();
            expect(validSummary.latitude).toBeDefined();
            expect(validSummary.longitude).toBeDefined();
        });

        it('should have valid coordinate ranges', () => {
            expect(validSummary.latitude).toBeGreaterThanOrEqual(-90);
            expect(validSummary.latitude).toBeLessThanOrEqual(90);
            expect(validSummary.longitude).toBeGreaterThanOrEqual(-180);
            expect(validSummary.longitude).toBeLessThanOrEqual(180);
        });

        it('should have non-negative counts', () => {
            expect(validSummary.voteCount).toBeGreaterThanOrEqual(0);
            expect(validSummary.commentCount).toBeGreaterThanOrEqual(0);
        });

        it('should allow null imageBlobId', () => {
            const summaryWithoutImage: IssueSummary = {
                ...validSummary,
                imageBlobId: null,
            };
            expect(summaryWithoutImage.imageBlobId).toBeNull();
        });
    });

    describe('Cache Key Patterns', () => {
        it('should generate valid issue summary cache key', () => {
            const issueId = 123;
            const key = `issue:summary:${issueId}`;
            expect(key).toBe('issue:summary:123');
        });

        it('should generate valid grid cell cache key pattern', () => {
            const key = getGridCellKey(28.6139, 77.209);
            expect(key.startsWith('issues:grid:')).toBe(true);
        });
    });
});

describe('Grid Cell Math', () => {
    it('should correctly floor positive coordinates', () => {
        const lat = 28.6139;
        const cellLat = Math.floor(lat / GRID_CELL_SIZE);
        expect(cellLat).toBe(2861);
    });

    it('should correctly floor negative coordinates', () => {
        const lat = -33.8688;
        const cellLat = Math.floor(lat / GRID_CELL_SIZE);
        expect(cellLat).toBe(-3387);
    });

    it('should handle edge cases at cell boundaries', () => {
        const exactBoundary = 28.60;
        const justAbove = 28.60001;
        const justBelow = 28.59999;

        expect(Math.floor(exactBoundary / GRID_CELL_SIZE)).toBe(2860);
        expect(Math.floor(justAbove / GRID_CELL_SIZE)).toBe(2860);
        expect(Math.floor(justBelow / GRID_CELL_SIZE)).toBe(2859);
    });
});
