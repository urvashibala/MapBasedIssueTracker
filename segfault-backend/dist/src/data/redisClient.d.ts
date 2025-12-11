/**
 * Azure Redis Cache Client
 * Uses REDIS_HOSTNAME and REDIS_ACCESS_KEY environment variables
 */
declare class AzureRedisClient {
    get(key: string): Promise<string | null>;
    set(key: string, value: string, mode?: string | null, durationSeconds?: number | null): Promise<"OK">;
    setex(key: string, seconds: number, value: string): Promise<"OK">;
    del(...keys: string[]): Promise<number>;
    mget(...keys: string[]): Promise<(string | null)[]>;
    /**
     * Pipelined SETEX for many keys in a single Redis round-trip.
     * Uses MULTI/EXEC under the hood.
     */
    setexMany(entries: Array<{
        key: string;
        seconds: number;
        value: string;
    }>): Promise<void>;
    exists(...keys: string[]): Promise<number>;
    keys(pattern: string): Promise<string[]>;
    ttl(key: string): Promise<number>;
    expire(key: string, seconds: number): Promise<number>;
    hset(key: string, field: string, value: string): Promise<number>;
    hget(key: string, field: string): Promise<string | null>;
    hgetall(key: string): Promise<Record<string, string>>;
    hdel(key: string, ...fields: string[]): Promise<number>;
    flushAll(): Promise<"OK">;
}
export declare const redisClient: AzureRedisClient;
export default redisClient;
//# sourceMappingURL=redisClient.d.ts.map