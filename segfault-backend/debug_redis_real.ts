
import redisClient from "./src/data/redisClient";

console.log("Imported redisClient, waiting for connection or failure...");

// TODO check this
// Force usage to ensure connection promise is awaited if getting lazy
// But the IIFE runs on load anyway.

const check = async () => {
    try {
        await redisClient.get("test");
        console.log("Redis get success");
    } catch (e) {
        console.error("Redis get failed", e);
    }
};

check();

setTimeout(() => {
    console.log("15 seconds passed");
}, 15000); // Wait longer than 10s timeout
