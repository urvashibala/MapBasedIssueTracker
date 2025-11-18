
type ExpiryEntry = { timeoutId: NodeJS.Timeout };

class FakeRedisClient {
	private store: Map<string, string> = new Map();
	private expiries: Map<string, ExpiryEntry> = new Map();

	async get(key: string): Promise<string | null> {
		const v = this.store.get(key);
		return v ?? null;
	}

	async set(key: string, value: string, mode?: string | null, durationSeconds?: number | null): Promise<'OK'> {
		const prev = this.expiries.get(key);
		if (prev) {
			clearTimeout(prev.timeoutId);
			this.expiries.delete(key);
		}

		this.store.set(key, value);

		if (mode === 'EX' && typeof durationSeconds === 'number' && durationSeconds > 0) {
			const timeoutId = setTimeout(() => {
				this.store.delete(key);
				this.expiries.delete(key);
			}, durationSeconds * 1000);

			this.expiries.set(key, { timeoutId });
		}

		return 'OK';
	}
	async del(key: string): Promise<number> {
		const existed = this.store.delete(key);
		const prev = this.expiries.get(key);
		if (prev) {
			clearTimeout(prev.timeoutId);
			this.expiries.delete(key);
		}
		return existed ? 1 : 0;
	}

	async flushAll(): Promise<'OK'> {
		for (const [, e] of this.expiries) clearTimeout(e.timeoutId);
		this.expiries.clear();
		this.store.clear();
		return 'OK';
	}
}

export const redisClient = new FakeRedisClient();

export default redisClient;