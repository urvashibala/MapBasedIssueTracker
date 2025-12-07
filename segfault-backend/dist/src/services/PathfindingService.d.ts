/**
 * Pathfinding Service
 * Implements A* algorithm for finding optimal routes through the road network,
 * considering edge penalties from reported issues.
 */
interface PathResult {
    path: Array<{
        lat: number;
        lng: number;
    }>;
    totalDistance: number;
    totalCost: number;
    estimatedTime: number;
}
/**
 * A* pathfinding algorithm
 */
export declare function findPath(startLat: number, startLng: number, endLat: number, endLng: number): Promise<PathResult | null>;
declare const _default: {
    findPath: typeof findPath;
};
export default _default;
//# sourceMappingURL=PathfindingService.d.ts.map