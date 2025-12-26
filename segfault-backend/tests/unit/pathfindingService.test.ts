/**
 * Unit Tests for Pathfinding Service
 * Tests pathfinding algorithms and utilities without database
 */

import * as turf from '@turf/turf';

// Extracted pure functions from PathfindingService for testing
function heuristic(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const from = turf.point([lon1, lat1]);
    const to = turf.point([lon2, lat2]);
    return turf.distance(from, to, { units: 'meters' });
}

function getBoundingBox(
    startLat: number,
    startLng: number,
    endLat: number,
    endLng: number,
    bufferKM: number
): [number, number, number, number] {
    const bufferDegrees = bufferKM / 111; // Approximate degrees per km
    const minLat = Math.min(startLat, endLat) - bufferDegrees;
    const maxLat = Math.max(startLat, endLat) + bufferDegrees;
    const minLng = Math.min(startLng, endLng) - bufferDegrees;
    const maxLng = Math.max(startLng, endLng) + bufferDegrees;
    return [minLat, minLng, maxLat, maxLng];
}

interface PathEdge {
    id: string;
    startNodeId: string;
    endNodeId: string;
    distance: number;
    baseCost: number;
    penalty: number;
}

function buildAdjacencyList(
    edges: PathEdge[]
): Map<string, Array<{ nodeId: string; cost: number; distance: number; edgeId: string }>> {
    const adj = new Map<string, Array<{ nodeId: string; cost: number; distance: number; edgeId: string }>>();

    for (const edge of edges) {
        const cost = edge.baseCost * edge.penalty;

        // Add forward edge
        if (!adj.has(edge.startNodeId)) {
            adj.set(edge.startNodeId, []);
        }
        adj.get(edge.startNodeId)!.push({
            nodeId: edge.endNodeId,
            cost,
            distance: edge.distance,
            edgeId: edge.id,
        });

        // Add reverse edge (undirected graph)
        if (!adj.has(edge.endNodeId)) {
            adj.set(edge.endNodeId, []);
        }
        adj.get(edge.endNodeId)!.push({
            nodeId: edge.startNodeId,
            cost,
            distance: edge.distance,
            edgeId: edge.id,
        });
    }

    return adj;
}

describe('Pathfinding Service', () => {
    describe('Heuristic Function (Distance Calculation)', () => {
        it('should calculate zero distance for same point', () => {
            const dist = heuristic(28.6139, 77.209, 28.6139, 77.209);
            expect(dist).toBeCloseTo(0, 1);
        });

        it('should calculate correct distance between two points', () => {
            // Delhi to Gurugram (approximately 30km)
            const delhi = { lat: 28.6139, lng: 77.209 };
            const gurugram = { lat: 28.4595, lng: 77.0266 };

            const dist = heuristic(delhi.lat, delhi.lng, gurugram.lat, gurugram.lng);

            // Should be approximately 25-35 km
            expect(dist).toBeGreaterThan(20000);
            expect(dist).toBeLessThan(40000);
        });

        it('should be symmetric (A to B = B to A)', () => {
            const pointA = { lat: 28.6139, lng: 77.209 };
            const pointB = { lat: 28.5, lng: 77.0 };

            const distAB = heuristic(pointA.lat, pointA.lng, pointB.lat, pointB.lng);
            const distBA = heuristic(pointB.lat, pointB.lng, pointA.lat, pointA.lng);

            expect(distAB).toBeCloseTo(distBA, 2);
        });

        it('should increase with greater lat/lng difference', () => {
            const origin = { lat: 28.6139, lng: 77.209 };
            
            const nearDist = heuristic(origin.lat, origin.lng, 28.62, 77.21);
            const farDist = heuristic(origin.lat, origin.lng, 28.7, 77.3);

            expect(farDist).toBeGreaterThan(nearDist);
        });
    });

    describe('Bounding Box Calculation', () => {
        it('should create correct bounding box with buffer', () => {
            const start = { lat: 28.5, lng: 77.0 };
            const end = { lat: 28.6, lng: 77.2 };
            const bufferKM = 1;

            const bbox = getBoundingBox(start.lat, start.lng, end.lat, end.lng, bufferKM);

            expect(bbox[0]).toBeLessThan(start.lat); // minLat
            expect(bbox[1]).toBeLessThan(start.lng); // minLng
            expect(bbox[2]).toBeGreaterThan(end.lat); // maxLat
            expect(bbox[3]).toBeGreaterThan(end.lng); // maxLng
        });

        it('should handle reversed start/end points', () => {
            const bbox1 = getBoundingBox(28.5, 77.0, 28.6, 77.2, 1);
            const bbox2 = getBoundingBox(28.6, 77.2, 28.5, 77.0, 1);

            // Should produce same bounding box regardless of order
            expect(bbox1[0]).toBeCloseTo(bbox2[0], 5);
            expect(bbox1[1]).toBeCloseTo(bbox2[1], 5);
            expect(bbox1[2]).toBeCloseTo(bbox2[2], 5);
            expect(bbox1[3]).toBeCloseTo(bbox2[3], 5);
        });

        it('should increase buffer proportionally', () => {
            const start = { lat: 28.5, lng: 77.0 };
            const end = { lat: 28.5, lng: 77.0 };

            const smallBuffer = getBoundingBox(start.lat, start.lng, end.lat, end.lng, 1);
            const largeBuffer = getBoundingBox(start.lat, start.lng, end.lat, end.lng, 5);

            const smallArea = (smallBuffer[2] - smallBuffer[0]) * (smallBuffer[3] - smallBuffer[1]);
            const largeArea = (largeBuffer[2] - largeBuffer[0]) * (largeBuffer[3] - largeBuffer[1]);

            expect(largeArea).toBeGreaterThan(smallArea);
        });
    });

    describe('Adjacency List Building', () => {
        const sampleEdges: PathEdge[] = [
            { id: 'e1', startNodeId: 'A', endNodeId: 'B', distance: 100, baseCost: 100, penalty: 1.0 },
            { id: 'e2', startNodeId: 'B', endNodeId: 'C', distance: 150, baseCost: 150, penalty: 1.5 },
            { id: 'e3', startNodeId: 'A', endNodeId: 'C', distance: 200, baseCost: 200, penalty: 2.0 },
        ];

        it('should build adjacency list from edges', () => {
            const adj = buildAdjacencyList(sampleEdges);

            expect(adj.has('A')).toBe(true);
            expect(adj.has('B')).toBe(true);
            expect(adj.has('C')).toBe(true);
        });

        it('should create bidirectional edges', () => {
            const adj = buildAdjacencyList(sampleEdges);

            // A should connect to B and C
            const aNeighbors = adj.get('A')!.map(n => n.nodeId);
            expect(aNeighbors).toContain('B');
            expect(aNeighbors).toContain('C');

            // B should connect back to A
            const bNeighbors = adj.get('B')!.map(n => n.nodeId);
            expect(bNeighbors).toContain('A');
        });

        it('should apply penalty to cost calculation', () => {
            const adj = buildAdjacencyList(sampleEdges);

            // Edge e2 (B->C) has penalty 1.5, baseCost 150
            const bcEdge = adj.get('B')!.find(n => n.nodeId === 'C');
            expect(bcEdge?.cost).toBe(150 * 1.5);
        });

        it('should preserve distance separate from cost', () => {
            const adj = buildAdjacencyList(sampleEdges);

            const acEdge = adj.get('A')!.find(n => n.nodeId === 'C');
            expect(acEdge?.distance).toBe(200);
            expect(acEdge?.cost).toBe(400); // 200 * 2.0 penalty
        });

        it('should handle empty edge list', () => {
            const adj = buildAdjacencyList([]);
            expect(adj.size).toBe(0);
        });

        it('should handle single edge', () => {
            const singleEdge: PathEdge[] = [
                { id: 'e1', startNodeId: 'X', endNodeId: 'Y', distance: 50, baseCost: 50, penalty: 1.0 },
            ];
            const adj = buildAdjacencyList(singleEdge);

            expect(adj.size).toBe(2);
            expect(adj.get('X')!.length).toBe(1);
            expect(adj.get('Y')!.length).toBe(1);
        });
    });

    describe('Cost Calculation with Penalties', () => {
        it('should calculate correct total cost through path', () => {
            const edges: PathEdge[] = [
                { id: 'e1', startNodeId: 'A', endNodeId: 'B', distance: 100, baseCost: 100, penalty: 1.0 },
                { id: 'e2', startNodeId: 'B', endNodeId: 'C', distance: 100, baseCost: 100, penalty: 2.0 },
            ];

            const adj = buildAdjacencyList(edges);
            
            // Path A -> B -> C
            const costAB = adj.get('A')!.find(n => n.nodeId === 'B')!.cost;
            const costBC = adj.get('B')!.find(n => n.nodeId === 'C')!.cost;
            const totalCost = costAB + costBC;

            expect(totalCost).toBe(100 + 200); // 100*1.0 + 100*2.0
        });
    });
});

describe('Time Estimation', () => {
    const AVERAGE_SPEED_KMH = 30;

    function estimateTime(distanceMeters: number): number {
        const distanceKm = distanceMeters / 1000;
        return (distanceKm / AVERAGE_SPEED_KMH) * 60; // minutes
    }

    it('should calculate reasonable time for 1km', () => {
        const time = estimateTime(1000);
        expect(time).toBe(2); // 1km at 30km/h = 2 minutes
    });

    it('should scale linearly with distance', () => {
        const time1km = estimateTime(1000);
        const time10km = estimateTime(10000);

        expect(time10km).toBe(time1km * 10);
    });
});
