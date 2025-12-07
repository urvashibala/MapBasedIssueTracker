export declare function awardPoints(userId: number, points: number): Promise<{
    newCredibility: number;
    newBadges: string[];
}>;
export declare function getUserCredibility(userId: number): Promise<{
    credibility: number;
    badges: string[];
}>;
declare const _default: {
    awardPoints: typeof awardPoints;
    getUserCredibility: typeof getUserCredibility;
};
export default _default;
//# sourceMappingURL=GamificationService.d.ts.map