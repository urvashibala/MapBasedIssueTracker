/**
 * Graph Import Script
 * Fetches road network data from OpenStreetMap via Overpass API
 * and populates the GraphNode and GraphEdge tables.
 *
 * Usage: npx tsx src/scripts/importGraph.ts
 */
import "dotenv/config";
import axios from "axios";
import * as turf from "@turf/turf";
import { prisma } from "../data/prisma/prismaClient";
// Expanded bounding box covering central Delhi
const BOUNDING_BOX = {
    minLat: 28.55,
    minLng: 77.15,
    maxLat: 28.70,
    maxLng: 77.25,
};
const OVERPASS_API = "https://overpass-api.de/api/interpreter";
async function fetchOSMData() {
    const { minLat, minLng, maxLat, maxLng } = BOUNDING_BOX;
    // Overpass QL query for driveable roads
    const query = `
        [out:json];
        (
            way["highway"]
               ["highway"!~"footway|cycleway|path|service|track|steps"]
               (${minLat},${minLng},${maxLat},${maxLng});
        );
        out body;
        >;
        out skel qt;
    `;
    console.log("Fetching OSM data from Overpass API...");
    console.log(`Bounding box: ${minLat},${minLng} to ${maxLat},${maxLng}`);
    const response = await axios.post(OVERPASS_API, `data=${encodeURIComponent(query)}`, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        timeout: 60000,
    });
    const elements = response.data.elements;
    // Separate nodes and ways
    const nodes = new Map();
    const ways = [];
    for (const element of elements) {
        if (element.type === "node") {
            nodes.set(element.id, element);
        }
        else if (element.type === "way") {
            ways.push(element);
        }
    }
    console.log(`Found ${nodes.size} nodes and ${ways.length} ways`);
    return { nodes, ways };
}
function calculateDistance(lat1, lon1, lat2, lon2) {
    // Use Turf.js for accurate distance calculation
    const from = turf.point([lon1, lat1]);
    const to = turf.point([lon2, lat2]);
    return turf.distance(from, to, { units: "meters" });
}
async function importGraph() {
    console.log("Starting graph import...\n");
    // Clear existing graph data
    console.log("Clearing existing graph data...");
    await prisma.graphEdge.deleteMany({});
    await prisma.graphNode.deleteMany({});
    // Fetch OSM data
    const { nodes: osmNodes, ways } = await fetchOSMData();
    // Collect all node IDs used in ways
    const usedNodeIds = new Set();
    for (const way of ways) {
        for (const nodeId of way.nodes) {
            usedNodeIds.add(nodeId);
        }
    }
    // Create GraphNodes for all used nodes
    console.log(`\nCreating ${usedNodeIds.size} graph nodes...`);
    const nodeIdMap = new Map(); // OSM ID -> Prisma UUID
    const nodesToCreate = [];
    for (const osmId of usedNodeIds) {
        const osmNode = osmNodes.get(osmId);
        if (osmNode) {
            nodesToCreate.push({
                osmId: String(osmId),
                latitude: osmNode.lat,
                longitude: osmNode.lon,
            });
        }
    }
    // Batch create nodes
    await prisma.graphNode.createMany({
        data: nodesToCreate,
        skipDuplicates: true,
    });
    // Fetch created nodes to get their UUIDs
    const createdNodes = await prisma.graphNode.findMany({
        where: { osmId: { in: nodesToCreate.map((n) => n.osmId) } },
    });
    for (const node of createdNodes) {
        nodeIdMap.set(parseInt(node.osmId), node.id);
    }
    console.log(`Created ${createdNodes.length} nodes`);
    // Create GraphEdges for each way
    console.log(`\nCreating edges from ${ways.length} ways...`);
    const edgesToCreate = [];
    for (const way of ways) {
        const wayNodes = way.nodes;
        // Create edges between sequential nodes
        for (let i = 0; i < wayNodes.length - 1; i++) {
            const startOsmId = wayNodes[i];
            const endOsmId = wayNodes[i + 1];
            // Skip if array access returned undefined
            if (startOsmId === undefined || endOsmId === undefined)
                continue;
            const startNode = osmNodes.get(startOsmId);
            const endNode = osmNodes.get(endOsmId);
            const startUuid = nodeIdMap.get(startOsmId);
            const endUuid = nodeIdMap.get(endOsmId);
            if (startNode && endNode && startUuid && endUuid) {
                const distance = calculateDistance(startNode.lat, startNode.lon, endNode.lat, endNode.lon);
                // Create edge in both directions (for bidirectional roads)
                edgesToCreate.push({
                    startNodeId: startUuid,
                    endNodeId: endUuid,
                    distance,
                    baseCost: distance,
                });
                // Reverse direction
                edgesToCreate.push({
                    startNodeId: endUuid,
                    endNodeId: startUuid,
                    distance,
                    baseCost: distance,
                });
            }
        }
    }
    // Batch create edges
    await prisma.graphEdge.createMany({
        data: edgesToCreate,
        skipDuplicates: true,
    });
    console.log(`Created ${edgesToCreate.length} edges`);
    // Summary
    const totalNodes = await prisma.graphNode.count();
    const totalEdges = await prisma.graphEdge.count();
    console.log(`\n✅ Import complete!`);
    console.log(`   Total nodes in database: ${totalNodes}`);
    console.log(`   Total edges in database: ${totalEdges}`);
}
// Run the import
importGraph()
    .then(() => {
    console.log("\nGraph import finished successfully.");
    process.exit(0);
})
    .catch((error) => {
    console.error("Graph import failed:", error);
    process.exit(1);
});
//# sourceMappingURL=importGraph.js.map