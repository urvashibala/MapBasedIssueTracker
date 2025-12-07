/**
 * Azure Redis Cache Client
 * Uses REDIS_HOSTNAME and REDIS_ACCESS_KEY environment variables
 */

import { createClient } from "redis";

const redisHostname = process.env.REDIS_HOSTNAME || "";
const redisPassword = process.env.REDIS_ACCESS_KEY || "";
const redisPort = 6380; // Azure Redis SSL port

type RedisClient = ReturnType<typeof createClient>;
let client: RedisClient | null = null;
let connectionPromise: Promise<RedisClient> | null = null;
let isConnecting = false;

async function getClient(): Promise<RedisClient | null> {
	if (!redisHostname || !redisPassword) {
		console.warn("Azure Redis Cache not configured. Using no-op fallback.");
		return null;
	}

	if (client?.isOpen) {
		return client;
	}

	// Return existing connection promise if connecting
	if (isConnecting && connectionPromise) {
		return connectionPromise;
	}

	isConnecting = true;
	connectionPromise = (async () => {
		try {
			client = createClient({
				url: `rediss://:${encodeURIComponent(redisPassword)}@${redisHostname}:${redisPort}`,
				socket: {
					tls: true,
					rejectUnauthorized: false, // Azure Redis uses self-signed certs
					connectTimeout: 10000,
				},
			});

			client.on("error", (err) => {
				console.error("Redis Client Error:", err);
			});

			client.on("connect", () => {
				console.log("Redis: Connected to Azure Redis Cache");
			});

			await client.connect();
			return client;
		} catch (error) {
			console.error("Failed to connect to Redis:", error);
			client = null;
			throw error;
		} finally {
			isConnecting = false;
		}
	})();

	return connectionPromise;
}

// Wrapper class that matches the FakeRedisClient API
class AzureRedisClient {
	// Basic string operations
	async get(key: string): Promise<string | null> {
		const c = await getClient();
		if (!c) return null;
		try {
			return await c.get(key);
		} catch (error) {
			console.error("Redis GET error:", error);
			return null;
		}
	}

	async set(key: string, value: string, mode?: string | null, durationSeconds?: number | null): Promise<"OK"> {
		const c = await getClient();
		if (!c) return "OK";
		try {
			if (mode === "EX" && typeof durationSeconds === "number" && durationSeconds > 0) {
				await c.setEx(key, durationSeconds, value);
			} else {
				await c.set(key, value);
			}
			return "OK";
		} catch (error) {
			console.error("Redis SET error:", error);
			return "OK";
		}
	}

	async setex(key: string, seconds: number, value: string): Promise<"OK"> {
		return this.set(key, value, "EX", seconds);
	}

	async del(...keys: string[]): Promise<number> {
		const c = await getClient();
		if (!c || keys.length === 0) return 0;
		try {
			return await c.del(keys);
		} catch (error) {
			console.error("Redis DEL error:", error);
			return 0;
		}
	}

	async mget(...keys: string[]): Promise<(string | null)[]> {
		const c = await getClient();
		if (!c) return keys.map(() => null);
		try {
			return await c.mGet(keys);
		} catch (error) {
			console.error("Redis MGET error:", error);
			return keys.map(() => null);
		}
	}

	async exists(...keys: string[]): Promise<number> {
		const c = await getClient();
		if (!c) return 0;
		try {
			return await c.exists(keys);
		} catch (error) {
			console.error("Redis EXISTS error:", error);
			return 0;
		}
	}

	async keys(pattern: string): Promise<string[]> {
		const c = await getClient();
		if (!c) return [];
		try {
			return await c.keys(pattern);
		} catch (error) {
			console.error("Redis KEYS error:", error);
			return [];
		}
	}

	async ttl(key: string): Promise<number> {
		const c = await getClient();
		if (!c) return -1;
		try {
			return await c.ttl(key);
		} catch (error) {
			console.error("Redis TTL error:", error);
			return -1;
		}
	}

	async expire(key: string, seconds: number): Promise<number> {
		const c = await getClient();
		if (!c) return 0;
		try {
			return (await c.expire(key, seconds)) ? 1 : 0;
		} catch (error) {
			console.error("Redis EXPIRE error:", error);
			return 0;
		}
	}

	// Hash operations
	async hset(key: string, field: string, value: string): Promise<number> {
		const c = await getClient();
		if (!c) return 0;
		try {
			return await c.hSet(key, field, value);
		} catch (error) {
			console.error("Redis HSET error:", error);
			return 0;
		}
	}

	async hget(key: string, field: string): Promise<string | null> {
		const c = await getClient();
		if (!c) return null;
		try {
			const result = await c.hGet(key, field);
			return result ?? null;
		} catch (error) {
			console.error("Redis HGET error:", error);
			return null;
		}
	}

	async hgetall(key: string): Promise<Record<string, string>> {
		const c = await getClient();
		if (!c) return {};
		try {
			return await c.hGetAll(key);
		} catch (error) {
			console.error("Redis HGETALL error:", error);
			return {};
		}
	}

	async hdel(key: string, ...fields: string[]): Promise<number> {
		const c = await getClient();
		if (!c) return 0;
		try {
			return await c.hDel(key, fields);
		} catch (error) {
			console.error("Redis HDEL error:", error);
			return 0;
		}
	}

	async flushAll(): Promise<"OK"> {
		const c = await getClient();
		if (!c) return "OK";
		try {
			await c.flushAll();
			return "OK";
		} catch (error) {
			console.error("Redis FLUSHALL error:", error);
			return "OK";
		}
	}
}

export const redisClient = new AzureRedisClient();

export default redisClient;
