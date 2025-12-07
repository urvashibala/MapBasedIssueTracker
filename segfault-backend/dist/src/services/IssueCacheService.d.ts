/**
 * Issue Cache Service
 * Caches issue summaries by geo-grid cells for fast map loading
 * Full issue details are loaded on-demand from DB
 */
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
export declare function getIssuesInBounds(minLat: number, maxLat: number, minLng: number, maxLng: number, includeResolved?: boolean): Promise<IssueSummary[]>;
export declare function invalidateIssueCache(issueId: number, lat?: number, lng?: number): Promise<void>;
export declare function clearAllIssueCache(): Promise<void>;
declare const _default: {
    getIssuesInBounds: typeof getIssuesInBounds;
    invalidateIssueCache: typeof invalidateIssueCache;
    clearAllIssueCache: typeof clearAllIssueCache;
};
export default _default;
//# sourceMappingURL=IssueCacheService.d.ts.map