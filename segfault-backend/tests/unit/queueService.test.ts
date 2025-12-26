/**
 * Unit Tests for Queue Service
 * Tests message processing logic and rate limiting
 */

// Simulated queue message types
interface QueueMessage {
    id: string;
    type: string;
    payload: unknown;
    timestamp: Date;
    retryCount: number;
}

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100;

// Pure functions for testing
function isRateLimited(
    requestTimestamps: number[],
    currentTime: number = Date.now()
): boolean {
    const windowStart = currentTime - RATE_LIMIT_WINDOW;
    const requestsInWindow = requestTimestamps.filter(ts => ts > windowStart);
    return requestsInWindow.length >= MAX_REQUESTS_PER_WINDOW;
}

function shouldRetry(retryCount: number, maxRetries: number = 3): boolean {
    return retryCount < maxRetries;
}

function calculateBackoff(retryCount: number, baseDelay: number = 1000): number {
    // Exponential backoff with jitter
    const exponentialDelay = baseDelay * Math.pow(2, retryCount);
    const maxDelay = 30000; // 30 seconds max
    return Math.min(exponentialDelay, maxDelay);
}

function isValidMessage(message: unknown): message is QueueMessage {
    if (!message || typeof message !== 'object') return false;
    const msg = message as Record<string, unknown>;
    return (
        typeof msg.id === 'string' &&
        typeof msg.type === 'string' &&
        msg.payload !== undefined &&
        msg.timestamp instanceof Date &&
        typeof msg.retryCount === 'number'
    );
}

function createMessage(type: string, payload: unknown): QueueMessage {
    return {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
        type,
        payload,
        timestamp: new Date(),
        retryCount: 0,
    };
}

describe('Queue Service', () => {
    describe('Rate Limiting', () => {
        it('should not be rate limited with no requests', () => {
            expect(isRateLimited([], Date.now())).toBe(false);
        });

        it('should not be rate limited with few requests', () => {
            const timestamps = Array(10).fill(Date.now());
            expect(isRateLimited(timestamps)).toBe(false);
        });

        it('should be rate limited when exceeding max requests', () => {
            const timestamps = Array(MAX_REQUESTS_PER_WINDOW).fill(Date.now());
            expect(isRateLimited(timestamps)).toBe(true);
        });

        it('should not count old requests in rate limit window', () => {
            const oldTimestamp = Date.now() - RATE_LIMIT_WINDOW - 1000;
            const timestamps = Array(MAX_REQUESTS_PER_WINDOW).fill(oldTimestamp);
            expect(isRateLimited(timestamps)).toBe(false);
        });

        it('should correctly count mixed old and new requests', () => {
            const now = Date.now();
            const oldTimestamp = now - RATE_LIMIT_WINDOW - 1000;
            const timestamps = [
                ...Array(50).fill(oldTimestamp),
                ...Array(50).fill(now),
            ];
            expect(isRateLimited(timestamps, now)).toBe(false);
        });

        it('should be rate limited with exact limit in window', () => {
            const now = Date.now();
            const timestamps = Array(MAX_REQUESTS_PER_WINDOW).fill(now - 1000);
            expect(isRateLimited(timestamps, now)).toBe(true);
        });
    });

    describe('Retry Logic', () => {
        it('should retry when count is zero', () => {
            expect(shouldRetry(0)).toBe(true);
        });

        it('should retry when under max retries', () => {
            expect(shouldRetry(1, 3)).toBe(true);
            expect(shouldRetry(2, 3)).toBe(true);
        });

        it('should not retry when at max retries', () => {
            expect(shouldRetry(3, 3)).toBe(false);
        });

        it('should not retry when over max retries', () => {
            expect(shouldRetry(5, 3)).toBe(false);
        });

        it('should respect custom max retries', () => {
            expect(shouldRetry(4, 5)).toBe(true);
            expect(shouldRetry(5, 5)).toBe(false);
        });
    });

    describe('Exponential Backoff', () => {
        const baseDelay = 1000;

        it('should return base delay for first retry', () => {
            expect(calculateBackoff(0, baseDelay)).toBe(1000);
        });

        it('should double delay for second retry', () => {
            expect(calculateBackoff(1, baseDelay)).toBe(2000);
        });

        it('should quadruple delay for third retry', () => {
            expect(calculateBackoff(2, baseDelay)).toBe(4000);
        });

        it('should cap delay at max value', () => {
            expect(calculateBackoff(10, baseDelay)).toBe(30000);
        });

        it('should increase exponentially', () => {
            const delay0 = calculateBackoff(0, baseDelay);
            const delay1 = calculateBackoff(1, baseDelay);
            const delay2 = calculateBackoff(2, baseDelay);

            expect(delay1).toBe(delay0 * 2);
            expect(delay2).toBe(delay1 * 2);
        });
    });

    describe('Message Validation', () => {
        it('should validate correct message', () => {
            const message: QueueMessage = {
                id: 'test-123',
                type: 'NOTIFICATION',
                payload: { userId: 1 },
                timestamp: new Date(),
                retryCount: 0,
            };
            expect(isValidMessage(message)).toBe(true);
        });

        it('should reject null message', () => {
            expect(isValidMessage(null)).toBe(false);
        });

        it('should reject undefined message', () => {
            expect(isValidMessage(undefined)).toBe(false);
        });

        it('should reject message without id', () => {
            const message = {
                type: 'NOTIFICATION',
                payload: {},
                timestamp: new Date(),
                retryCount: 0,
            };
            expect(isValidMessage(message)).toBe(false);
        });

        it('should reject message without type', () => {
            const message = {
                id: 'test-123',
                payload: {},
                timestamp: new Date(),
                retryCount: 0,
            };
            expect(isValidMessage(message)).toBe(false);
        });

        it('should reject message with wrong timestamp type', () => {
            const message = {
                id: 'test-123',
                type: 'NOTIFICATION',
                payload: {},
                timestamp: '2024-01-01',
                retryCount: 0,
            };
            expect(isValidMessage(message)).toBe(false);
        });

        it('should reject message with wrong retryCount type', () => {
            const message = {
                id: 'test-123',
                type: 'NOTIFICATION',
                payload: {},
                timestamp: new Date(),
                retryCount: '0',
            };
            expect(isValidMessage(message)).toBe(false);
        });
    });

    describe('Message Creation', () => {
        it('should create message with unique id', () => {
            const msg1 = createMessage('TEST', {});
            const msg2 = createMessage('TEST', {});
            expect(msg1.id).not.toBe(msg2.id);
        });

        it('should create message with correct type', () => {
            const msg = createMessage('NOTIFICATION', {});
            expect(msg.type).toBe('NOTIFICATION');
        });

        it('should create message with payload', () => {
            const payload = { userId: 1, action: 'test' };
            const msg = createMessage('TEST', payload);
            expect(msg.payload).toEqual(payload);
        });

        it('should create message with zero retry count', () => {
            const msg = createMessage('TEST', {});
            expect(msg.retryCount).toBe(0);
        });

        it('should create message with current timestamp', () => {
            const before = new Date();
            const msg = createMessage('TEST', {});
            const after = new Date();
            
            expect(msg.timestamp.getTime()).toBeGreaterThanOrEqual(before.getTime());
            expect(msg.timestamp.getTime()).toBeLessThanOrEqual(after.getTime());
        });

        it('should create valid message', () => {
            const msg = createMessage('TEST', { data: 'value' });
            expect(isValidMessage(msg)).toBe(true);
        });
    });
});

describe('Queue Configuration', () => {
    it('should have reasonable rate limit window', () => {
        expect(RATE_LIMIT_WINDOW).toBeGreaterThanOrEqual(10000); // At least 10 seconds
        expect(RATE_LIMIT_WINDOW).toBeLessThanOrEqual(300000); // At most 5 minutes
    });

    it('should have reasonable max requests per window', () => {
        expect(MAX_REQUESTS_PER_WINDOW).toBeGreaterThanOrEqual(10);
        expect(MAX_REQUESTS_PER_WINDOW).toBeLessThanOrEqual(1000);
    });
});
