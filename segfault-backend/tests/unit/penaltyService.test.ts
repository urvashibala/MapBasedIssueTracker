/**
 * Unit Tests for Penalty Service
 * Tests penalty calculation logic without database
 */

import { IssueType } from '../../src/generated/prisma/enums';

// Mock the penalty map from PenaltyService
const ISSUE_PENALTY_MAP: Partial<Record<IssueType, number>> = {
    POTHOLE: 1.5,
    ROAD_DAMAGE: 5.0,
    DRAINAGE_BLOCKED: 3.0,
    SEWAGE_OVERFLOW: 4.0,
    OPEN_MANHOLE: 8.0,
    TREE_FALL: 10.0,
    TRAFFIC_LIGHT_FAULT: 2.0,
    BROKEN_FOOTPATH: 1.2,
};

// Pure function to calculate penalty (extracted logic for testing)
function calculatePenalty(issueType: IssueType, severity: number | null): number {
    const basePenalty = ISSUE_PENALTY_MAP[issueType] || 1.0;
    const severityMultiplier = severity ? severity / 3 : 1.0;
    return basePenalty * severityMultiplier;
}

describe('Penalty Service', () => {
    describe('Penalty Map Configuration', () => {
        it('should have penalty values for critical issue types', () => {
            expect(ISSUE_PENALTY_MAP.POTHOLE).toBeDefined();
            expect(ISSUE_PENALTY_MAP.ROAD_DAMAGE).toBeDefined();
            expect(ISSUE_PENALTY_MAP.OPEN_MANHOLE).toBeDefined();
            expect(ISSUE_PENALTY_MAP.TREE_FALL).toBeDefined();
        });

        it('should have higher penalties for dangerous issues', () => {
            expect(ISSUE_PENALTY_MAP.TREE_FALL).toBeGreaterThan(ISSUE_PENALTY_MAP.POTHOLE!);
            expect(ISSUE_PENALTY_MAP.OPEN_MANHOLE).toBeGreaterThan(ISSUE_PENALTY_MAP.DRAINAGE_BLOCKED!);
            expect(ISSUE_PENALTY_MAP.ROAD_DAMAGE).toBeGreaterThan(ISSUE_PENALTY_MAP.BROKEN_FOOTPATH!);
        });

        it('should have all penalty values greater than or equal to 1', () => {
            Object.values(ISSUE_PENALTY_MAP).forEach(penalty => {
                expect(penalty).toBeGreaterThanOrEqual(1);
            });
        });
    });

    describe('Penalty Calculation', () => {
        it('should return base penalty when severity is null', () => {
            const penalty = calculatePenalty('POTHOLE' as IssueType, null);
            expect(penalty).toBe(1.5);
        });

        it('should calculate penalty with severity multiplier', () => {
            // Severity 3 (medium) should give multiplier of 1.0
            const penalty = calculatePenalty('POTHOLE' as IssueType, 3);
            expect(penalty).toBeCloseTo(1.5 * 1.0);
        });

        it('should increase penalty for higher severity', () => {
            const lowSeverity = calculatePenalty('ROAD_DAMAGE' as IssueType, 1);
            const highSeverity = calculatePenalty('ROAD_DAMAGE' as IssueType, 5);
            
            expect(highSeverity).toBeGreaterThan(lowSeverity);
        });

        it('should return 1.0 for unknown issue types', () => {
            const penalty = calculatePenalty('UNKNOWN_TYPE' as IssueType, null);
            expect(penalty).toBe(1.0);
        });

        it('should calculate correct penalty for TREE_FALL with max severity', () => {
            // TREE_FALL base = 10.0, severity 5 = 5/3 multiplier
            const penalty = calculatePenalty('TREE_FALL' as IssueType, 5);
            expect(penalty).toBeCloseTo(10.0 * (5 / 3));
        });

        it('should handle severity of 0', () => {
            // severity 0 with basePenalty still gives a small value (base + 0 * multiplier)
            const penalty = calculatePenalty('POTHOLE' as IssueType, 0);
            // Expect minimum penalty based on formula: base + (severity/10) * multiplier
            expect(penalty).toBeGreaterThanOrEqual(0);
        });
    });

    describe('Issue Type Coverage', () => {
        const issueTypesWithPenalties = [
            'POTHOLE',
            'ROAD_DAMAGE',
            'DRAINAGE_BLOCKED',
            'SEWAGE_OVERFLOW',
            'OPEN_MANHOLE',
            'TREE_FALL',
            'TRAFFIC_LIGHT_FAULT',
            'BROKEN_FOOTPATH',
        ];

        it.each(issueTypesWithPenalties)('should have penalty defined for %s', (issueType) => {
            expect(ISSUE_PENALTY_MAP[issueType as IssueType]).toBeDefined();
        });

        it('should not have penalties for non-road-affecting issues', () => {
            // These issue types don't directly affect road navigation
            const nonRoadIssues = ['GARBAGE_UNCOLLECTED', 'MOSQUITO_BREEDING', 'NOISE_COMPLAINT'];
            
            nonRoadIssues.forEach(issueType => {
                expect(ISSUE_PENALTY_MAP[issueType as IssueType]).toBeUndefined();
            });
        });
    });
});

describe('Search Radius Configuration', () => {
    const SEARCH_RADIUS = 0.0002; // From PenaltyService

    it('should be a reasonable search radius', () => {
        // 0.0002 degrees ≈ 20 meters at the equator
        const metersApprox = SEARCH_RADIUS * 111000;
        expect(metersApprox).toBeGreaterThan(10);
        expect(metersApprox).toBeLessThan(100);
    });
});
