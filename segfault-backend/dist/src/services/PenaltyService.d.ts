/**
 * Penalty Service
 * Maps reported issues to nearby road edges and updates their penalties.
 */
/**
 * Recalculates penalties for all edges based on active issues.
 * Uses nodes-first approach for performance:
 * 1. Find nodes near each issue
 * 2. Update edges connected to those nodes
 */
export declare function recalculatePenalties(): Promise<void>;
declare const _default: {
    recalculatePenalties: typeof recalculatePenalties;
};
export default _default;
//# sourceMappingURL=PenaltyService.d.ts.map