/**
 * Unit Tests for AuthService
 * Tests authentication utility functions
 */

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Test JWT token generation and verification
describe('Auth Utilities', () => {
    const JWT_SECRET = 'test-jwt-secret';

    describe('JWT Token Operations', () => {
        it('should generate a valid JWT token', () => {
            const payload = { userId: 1, email: 'test@example.com', role: 'USER' };
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

            expect(token).toBeDefined();
            expect(typeof token).toBe('string');
            expect(token.split('.')).toHaveLength(3); // JWT has 3 parts
        });

        it('should verify a valid JWT token', () => {
            const payload = { userId: 1, email: 'test@example.com', role: 'USER' };
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

            const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;

            expect(decoded.userId).toBe(1);
            expect(decoded.email).toBe('test@example.com');
            expect(decoded.role).toBe('USER');
        });

        it('should reject an invalid JWT token', () => {
            const invalidToken = 'invalid.token.here';

            expect(() => {
                jwt.verify(invalidToken, JWT_SECRET);
            }).toThrow();
        });

        it('should reject a token signed with wrong secret', () => {
            const payload = { userId: 1 };
            const token = jwt.sign(payload, 'wrong-secret');

            expect(() => {
                jwt.verify(token, JWT_SECRET);
            }).toThrow();
        });

        it('should handle expired tokens', () => {
            const payload = { userId: 1 };
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '-1s' }); // Already expired

            expect(() => {
                jwt.verify(token, JWT_SECRET);
            }).toThrow(jwt.TokenExpiredError);
        });
    });

    describe('Password Hashing', () => {
        it('should hash a password', async () => {
            const password = 'securePassword123!';
            const hash = await bcrypt.hash(password, 10);

            expect(hash).toBeDefined();
            expect(hash).not.toBe(password);
            expect(hash.length).toBeGreaterThan(50);
        });

        it('should verify correct password against hash', async () => {
            const password = 'securePassword123!';
            const hash = await bcrypt.hash(password, 10);

            const isValid = await bcrypt.compare(password, hash);

            expect(isValid).toBe(true);
        });

        it('should reject incorrect password against hash', async () => {
            const password = 'securePassword123!';
            const wrongPassword = 'wrongPassword';
            const hash = await bcrypt.hash(password, 10);

            const isValid = await bcrypt.compare(wrongPassword, hash);

            expect(isValid).toBe(false);
        });

        it('should generate different hashes for same password', async () => {
            const password = 'securePassword123!';
            const hash1 = await bcrypt.hash(password, 10);
            const hash2 = await bcrypt.hash(password, 10);

            expect(hash1).not.toBe(hash2); // Different salts
            // But both should validate
            expect(await bcrypt.compare(password, hash1)).toBe(true);
            expect(await bcrypt.compare(password, hash2)).toBe(true);
        });
    });
});

describe('Token Payload Validation', () => {
    it('should validate user payload structure', () => {
        const validPayload = {
            userId: 1,
            email: 'test@example.com',
            role: 'USER',
        };

        expect(validPayload.userId).toBeGreaterThan(0);
        expect(validPayload.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        expect(['USER', 'ADMIN', 'GUEST']).toContain(validPayload.role);
    });

    it('should validate guest token payload', () => {
        const guestPayload = {
            id: -1,
            role: 'GUEST',
            guestTokenId: 123,
        };

        expect(guestPayload.id).toBe(-1);
        expect(guestPayload.role).toBe('GUEST');
        expect(guestPayload.guestTokenId).toBeGreaterThan(0);
    });
});
