/**
 * Jest Test Setup
 * This file runs before each test file
 */

// Mock environment variables for testing
process.env.JWT_SECRET = 'test-jwt-secret';
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test';
process.env.STORAGE_CONNECTION_STRING = '';
process.env.REDIS_URL = '';

// Global test utilities
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace jest {
        interface Matchers<R> {
            toBeWithinRange(floor: number, ceiling: number): R;
        }
    }
}

// Custom matcher for number ranges
expect.extend({
    toBeWithinRange(received: number, floor: number, ceiling: number) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
                pass: false,
            };
        }
    },
});

export {};
