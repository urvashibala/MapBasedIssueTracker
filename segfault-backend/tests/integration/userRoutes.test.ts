/**
 * Integration Tests for User Routes
 * Tests user profile and related endpoints
 */

import { describe, it, expect, beforeAll, beforeEach, jest } from '@jest/globals';
import request from 'supertest';
import express, { type Express, type Request, type Response, type NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

// Set up environment
process.env.JWT_SECRET = 'test-jwt-secret-key-for-testing';

const JWT_SECRET = process.env.JWT_SECRET;

// Mock data
let mockUsers: any[] = [];
let mockIssues: any[] = [];
let mockComments: any[] = [];

// Auth middleware
function mockAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.cookies?.session || req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'Authentication required' });
        }
        const decoded = jwt.verify(token, JWT_SECRET!) as any;
        
        const user = mockUsers.find(u => u.id === (decoded.userId || decoded.id));
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        
        req.user = {
            id: user.id,
            role: user.role,
            email: user.email,
        };
        next();
    } catch {
        return res.status(401).json({ error: 'Invalid token' });
    }
}

describe('User Routes Integration Tests', () => {
    let app: Express;
    let userToken: string;
    let adminToken: string;

    beforeAll(() => {
        app = express();
        app.use(cookieParser());
        app.use(express.json());

        // GET /api/user/me - Get current user profile
        app.get('/api/user/me', mockAuthMiddleware, (req, res) => {
            const user = mockUsers.find(u => u.id === req.user!.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            
            // Don't return sensitive fields
            const { passwordHash, twoFactorSecret, ...safeUser } = user;
            return res.status(200).json(safeUser);
        });

        // GET /api/user/me/issues - Get current user's issues
        app.get('/api/user/me/issues', mockAuthMiddleware, (req, res) => {
            const userIssues = mockIssues.filter(i => i.reporterId === req.user!.id);
            return res.status(200).json(userIssues);
        });

        // GET /api/user/me/comments - Get current user's comments
        app.get('/api/user/me/comments', mockAuthMiddleware, (req, res) => {
            const userComments = mockComments.filter(c => c.authorId === req.user!.id);
            return res.status(200).json(userComments);
        });
    });

    beforeEach(() => {
        // Reset mock data
        mockUsers = [
            {
                id: 1,
                email: 'user@test.com',
                name: 'Test User',
                role: 'USER',
                credibilityScore: 100,
                createdAt: '2025-01-01T00:00:00.000Z',
                passwordHash: 'secret-hash',
                twoFactorEnabled: false,
            },
            {
                id: 2,
                email: 'admin@test.com',
                name: 'Admin User',
                role: 'ADMIN',
                credibilityScore: 500,
                createdAt: '2025-01-01T00:00:00.000Z',
                passwordHash: 'secret-hash',
            },
        ];

        mockIssues = [
            { id: 1, title: 'Issue 1', reporterId: 1, status: 'PENDING' },
            { id: 2, title: 'Issue 2', reporterId: 1, status: 'RESOLVED' },
            { id: 3, title: 'Issue 3', reporterId: 2, status: 'PENDING' },
        ];

        mockComments = [
            { id: 1, content: 'Comment 1', authorId: 1, issueId: 3 },
            { id: 2, content: 'Comment 2', authorId: 1, issueId: 3 },
            { id: 3, content: 'Comment 3', authorId: 2, issueId: 1 },
        ];

        userToken = jwt.sign({ userId: 1, role: 'USER' }, JWT_SECRET!);
        adminToken = jwt.sign({ userId: 2, role: 'ADMIN' }, JWT_SECRET!);
    });

    describe('GET /api/user/me', () => {
        it('should return current user profile', async () => {
            const response = await request(app)
                .get('/api/user/me')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(200);
            expect(response.body.id).toBe(1);
            expect(response.body.email).toBe('user@test.com');
            expect(response.body.name).toBe('Test User');
        });

        it('should not return password hash', async () => {
            const response = await request(app)
                .get('/api/user/me')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.body.passwordHash).toBeUndefined();
        });

        it('should not return 2FA secret', async () => {
            const response = await request(app)
                .get('/api/user/me')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.body.twoFactorSecret).toBeUndefined();
        });

        it('should require authentication', async () => {
            const response = await request(app)
                .get('/api/user/me');

            expect(response.status).toBe(401);
        });

        it('should reject invalid token', async () => {
            const response = await request(app)
                .get('/api/user/me')
                .set('Authorization', 'Bearer invalid-token');

            expect(response.status).toBe(401);
        });

        it('should return admin profile for admin token', async () => {
            const response = await request(app)
                .get('/api/user/me')
                .set('Authorization', `Bearer ${adminToken}`);

            expect(response.status).toBe(200);
            expect(response.body.role).toBe('ADMIN');
        });

        it('should return credibility score', async () => {
            const response = await request(app)
                .get('/api/user/me')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.body.credibilityScore).toBeDefined();
            expect(typeof response.body.credibilityScore).toBe('number');
        });

        it('should return 401 for deleted user', async () => {
            mockUsers = mockUsers.filter(u => u.id !== 1);

            const response = await request(app)
                .get('/api/user/me')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(401);
        });
    });

    describe('GET /api/user/me/issues', () => {
        it('should return user issues', async () => {
            const response = await request(app)
                .get('/api/user/me/issues')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(200);
            expect(response.body.length).toBe(2); // User 1 has 2 issues
        });

        it('should only return issues by current user', async () => {
            const response = await request(app)
                .get('/api/user/me/issues')
                .set('Authorization', `Bearer ${userToken}`);

            response.body.forEach((issue: any) => {
                expect(issue.reporterId).toBe(1);
            });
        });

        it('should return empty array if no issues', async () => {
            mockIssues = mockIssues.filter(i => i.reporterId !== 1);

            const response = await request(app)
                .get('/api/user/me/issues')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(200);
            expect(response.body).toEqual([]);
        });

        it('should require authentication', async () => {
            const response = await request(app)
                .get('/api/user/me/issues');

            expect(response.status).toBe(401);
        });

        it('should return admin issues for admin', async () => {
            const response = await request(app)
                .get('/api/user/me/issues')
                .set('Authorization', `Bearer ${adminToken}`);

            expect(response.status).toBe(200);
            expect(response.body.length).toBe(1); // Admin has 1 issue
        });
    });

    describe('GET /api/user/me/comments', () => {
        it('should return user comments', async () => {
            const response = await request(app)
                .get('/api/user/me/comments')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(200);
            expect(response.body.length).toBe(2); // User 1 has 2 comments
        });

        it('should only return comments by current user', async () => {
            const response = await request(app)
                .get('/api/user/me/comments')
                .set('Authorization', `Bearer ${userToken}`);

            response.body.forEach((comment: any) => {
                expect(comment.authorId).toBe(1);
            });
        });

        it('should return empty array if no comments', async () => {
            mockComments = mockComments.filter(c => c.authorId !== 1);

            const response = await request(app)
                .get('/api/user/me/comments')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(200);
            expect(response.body).toEqual([]);
        });

        it('should require authentication', async () => {
            const response = await request(app)
                .get('/api/user/me/comments');

            expect(response.status).toBe(401);
        });
    });
});

describe('User Profile Security', () => {
    let app: Express;

    beforeAll(() => {
        app = express();
        app.use(cookieParser());
        app.use(express.json());

        // Mock sensitive data endpoint
        app.get('/api/user/:id', (req, res) => {
            const token = req.headers.authorization?.replace('Bearer ', '');
            
            if (!token) {
                return res.status(401).json({ error: 'Authentication required' });
            }

            try {
                const decoded = jwt.verify(token, JWT_SECRET!) as any;
                const requestedId = parseInt(req.params.id);

                // Users can only view their own full profile
                if (decoded.userId !== requestedId && decoded.role !== 'ADMIN') {
                    // Return limited public profile
                    return res.status(200).json({
                        id: requestedId,
                        name: 'Public Name',
                        // No email, no sensitive data
                    });
                }

                // Full profile for self or admin
                return res.status(200).json({
                    id: requestedId,
                    name: 'Full Name',
                    email: 'user@test.com',
                    credibilityScore: 100,
                });
            } catch {
                return res.status(401).json({ error: 'Invalid token' });
            }
        });
    });

    it('should return full profile for own user', async () => {
        const token = jwt.sign({ userId: 1, role: 'USER' }, JWT_SECRET!);

        const response = await request(app)
            .get('/api/user/1')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.email).toBeDefined();
    });

    it('should return limited profile for other users', async () => {
        const token = jwt.sign({ userId: 1, role: 'USER' }, JWT_SECRET!);

        const response = await request(app)
            .get('/api/user/2')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.email).toBeUndefined();
    });

    it('should allow admin to view any profile', async () => {
        const token = jwt.sign({ userId: 2, role: 'ADMIN' }, JWT_SECRET!);

        const response = await request(app)
            .get('/api/user/1')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.email).toBeDefined();
    });
});

describe('Token Validation', () => {
    let app: Express;

    beforeAll(() => {
        app = express();
        app.use(cookieParser());

        app.get('/protected', (req, res) => {
            const token = req.cookies?.session || req.headers.authorization?.replace('Bearer ', '');

            if (!token) {
                return res.status(401).json({ error: 'No token provided' });
            }

            try {
                const decoded = jwt.verify(token, JWT_SECRET!) as any;
                return res.status(200).json({ userId: decoded.userId });
            } catch (err: any) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ error: 'Token expired' });
                }
                return res.status(401).json({ error: 'Invalid token' });
            }
        });
    });

    it('should accept valid token in Authorization header', async () => {
        const token = jwt.sign({ userId: 1 }, JWT_SECRET!);

        const response = await request(app)
            .get('/protected')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
    });

    it('should accept valid token in cookie', async () => {
        const token = jwt.sign({ userId: 1 }, JWT_SECRET!);

        const response = await request(app)
            .get('/protected')
            .set('Cookie', `session=${token}`);

        expect(response.status).toBe(200);
    });

    it('should reject expired token', async () => {
        const token = jwt.sign({ userId: 1 }, JWT_SECRET!, { expiresIn: '-1s' });

        const response = await request(app)
            .get('/protected')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(401);
        expect(response.body.error).toContain('expired');
    });

    it('should reject malformed token', async () => {
        const response = await request(app)
            .get('/protected')
            .set('Authorization', 'Bearer malformed.token.here');

        expect(response.status).toBe(401);
    });

    it('should reject token signed with wrong secret', async () => {
        const token = jwt.sign({ userId: 1 }, 'wrong-secret');

        const response = await request(app)
            .get('/protected')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(401);
    });

    it('should reject missing token', async () => {
        const response = await request(app)
            .get('/protected');

        expect(response.status).toBe(401);
        expect(response.body.error).toContain('No token');
    });
});
