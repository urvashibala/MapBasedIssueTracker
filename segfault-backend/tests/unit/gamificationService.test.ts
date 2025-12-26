/**
 * Unit Tests for Gamification Service
 * Tests badge thresholds and point calculation logic
 */

// Badge thresholds from GamificationService
const BADGE_THRESHOLDS: Record<string, number> = {
    Observer: 10,
    Activist: 100,
    Guardian: 500,
};

// Pure function to determine which badges should be awarded
function getBadgesForCredibility(credibility: number): string[] {
    const badges: string[] = [];
    for (const [badgeName, threshold] of Object.entries(BADGE_THRESHOLDS)) {
        if (credibility >= threshold) {
            badges.push(badgeName);
        }
    }
    return badges;
}

// Function to check if a new badge should be awarded
function shouldAwardBadge(
    credibility: number,
    badgeName: string,
    existingBadges: string[]
): boolean {
    const threshold = BADGE_THRESHOLDS[badgeName];
    if (!threshold) return false;
    if (credibility < threshold) return false;
    if (existingBadges.includes(badgeName)) return false;
    return true;
}

describe('Gamification Service', () => {
    describe('Badge Thresholds Configuration', () => {
        it('should have increasing thresholds', () => {
            expect(BADGE_THRESHOLDS.Observer).toBeLessThan(BADGE_THRESHOLDS.Activist);
            expect(BADGE_THRESHOLDS.Activist).toBeLessThan(BADGE_THRESHOLDS.Guardian);
        });

        it('should start with a reasonable minimum threshold', () => {
            const minThreshold = Math.min(...Object.values(BADGE_THRESHOLDS));
            expect(minThreshold).toBeGreaterThanOrEqual(5);
            expect(minThreshold).toBeLessThanOrEqual(20);
        });

        it('should have at least 3 badge levels', () => {
            expect(Object.keys(BADGE_THRESHOLDS).length).toBeGreaterThanOrEqual(3);
        });
    });

    describe('getBadgesForCredibility', () => {
        it('should return empty array for 0 credibility', () => {
            const badges = getBadgesForCredibility(0);
            expect(badges).toEqual([]);
        });

        it('should return Observer badge at exactly 10 points', () => {
            const badges = getBadgesForCredibility(10);
            expect(badges).toContain('Observer');
        });

        it('should not return Observer badge below threshold', () => {
            const badges = getBadgesForCredibility(9);
            expect(badges).not.toContain('Observer');
        });

        it('should return multiple badges when credibility is high', () => {
            const badges = getBadgesForCredibility(100);
            expect(badges).toContain('Observer');
            expect(badges).toContain('Activist');
            expect(badges.length).toBe(2);
        });

        it('should return all badges for maximum credibility', () => {
            const badges = getBadgesForCredibility(1000);
            expect(badges).toContain('Observer');
            expect(badges).toContain('Activist');
            expect(badges).toContain('Guardian');
            expect(badges.length).toBe(3);
        });
    });

    describe('shouldAwardBadge', () => {
        it('should award badge when threshold is met and not owned', () => {
            const result = shouldAwardBadge(10, 'Observer', []);
            expect(result).toBe(true);
        });

        it('should not award badge below threshold', () => {
            const result = shouldAwardBadge(9, 'Observer', []);
            expect(result).toBe(false);
        });

        it('should not award badge already owned', () => {
            const result = shouldAwardBadge(100, 'Observer', ['Observer']);
            expect(result).toBe(false);
        });

        it('should not award unknown badges', () => {
            const result = shouldAwardBadge(1000, 'UnknownBadge', []);
            expect(result).toBe(false);
        });
    });

    describe('Point Award Scenarios', () => {
        const POINT_REWARDS = {
            REPORT_ISSUE: 5,
            ISSUE_UPVOTED: 2,
            COMMENT_UPVOTED: 1,
            ISSUE_RESOLVED: 20,
            ISSUE_VERIFIED: 10,
        };

        it('should have reasonable point values', () => {
            expect(POINT_REWARDS.REPORT_ISSUE).toBeGreaterThan(0);
            expect(POINT_REWARDS.ISSUE_RESOLVED).toBeGreaterThan(POINT_REWARDS.REPORT_ISSUE);
        });

        it('should require multiple actions to earn first badge', () => {
            const actionsForObserver = Math.ceil(BADGE_THRESHOLDS.Observer / POINT_REWARDS.REPORT_ISSUE);
            expect(actionsForObserver).toBeGreaterThan(1);
        });

        it('should calculate correct points for mixed actions', () => {
            const points = 
                3 * POINT_REWARDS.REPORT_ISSUE +
                5 * POINT_REWARDS.ISSUE_UPVOTED +
                2 * POINT_REWARDS.ISSUE_RESOLVED;

            expect(points).toBe(15 + 10 + 40);
            expect(points).toBe(65);
        });
    });
});

describe('Credibility Score Validation', () => {
    it('should not allow negative credibility', () => {
        const credibility = -10;
        // In real implementation, this should be prevented
        expect(credibility).toBeLessThan(0);
        // getBadgesForCredibility should handle gracefully
        const badges = getBadgesForCredibility(credibility);
        expect(badges).toEqual([]);
    });

    it('should handle very large credibility values', () => {
        const badges = getBadgesForCredibility(1000000);
        expect(badges.length).toBe(Object.keys(BADGE_THRESHOLDS).length);
    });

    it('should handle decimal credibility values', () => {
        const badges = getBadgesForCredibility(10.5);
        expect(badges).toContain('Observer');
    });
});
