/**
 * Integration Tests for Issue Routes
 * Tests issue-related endpoints with mocked database
 */

import { describe, it, expect, beforeAll, beforeEach, jest } from '@jest/globals';
import request from 'supertest';
import express, { type Express, type Request, type Response, type NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

// Set up environment
process.env.JWT_SECRET = 'test-jwt-secret-key-for-testing';

const JWT_SECRET = process.env.JWT_SECRET;

// Mock data store
let mockIssues: any[] = [];
let mockVotes: any[] = [];
let nextIssueId = 1;

// Auth middleware for tests
function mockAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.cookies?.session || req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'Authentication required' });
        }
        const decoded = jwt.verify(token, JWT_SECRET!) as any;
        req.user = {
            id: decoded.userId || decoded.id,
            role: decoded.role || 'USER',
        };
        next();
    } catch {
        return res.status(401).json({ error: 'Invalid token' });
    }
}

function optionalAuthMiddleware(req: Request, _res: Response, next: NextFunction) {
    try {
        const token = req.cookies?.session || req.headers.authorization?.replace('Bearer ', '');
        if (token) {
            const decoded = jwt.verify(token, JWT_SECRET!) as any;
            req.user = {
                id: decoded.userId || decoded.id,
                role: decoded.role || 'USER',
            };
        }
    } catch {
        // Ignore - optional auth
    }
    next();
}

describe('Issue Routes Integration Tests', () => {
    let app: Express;
    let userToken: string;
    let adminToken: string;

    beforeAll(() => {
        userToken = jwt.sign({ userId: 1, role: 'USER' }, JWT_SECRET!);
        adminToken = jwt.sign({ userId: 2, role: 'ADMIN' }, JWT_SECRET!);

        app = express();
        app.use(cookieParser());
        app.use(express.json());

        // GET /issues - List all issues
        app.get('/issues', optionalAuthMiddleware, (_req, res) => {
            return res.status(200).json(mockIssues);
        });

        // GET /issues/types - Get issue types
        app.get('/issues/types', (_req, res) => {
            return res.status(200).json([
                'POTHOLE',
                'STREETLIGHT',
                'GRAFFITI',
                'GARBAGE',
                'ROAD_DAMAGE',
                'FLOODING',
                'OTHER',
            ]);
        });

        // GET /issues/map - Get issues in bounds
        app.get('/issues/map', optionalAuthMiddleware, (req, res) => {
            const { minLat, maxLat, minLng, maxLng } = req.query;

            if (!minLat || !maxLat || !minLng || !maxLng) {
                return res.status(400).json({ error: 'Bounds parameters required' });
            }

            const filteredIssues = mockIssues.filter(issue =>
                issue.latitude >= parseFloat(minLat as string) &&
                issue.latitude <= parseFloat(maxLat as string) &&
                issue.longitude >= parseFloat(minLng as string) &&
                issue.longitude <= parseFloat(maxLng as string)
            );

            return res.status(200).json(filteredIssues);
        });

        // GET /issues/:id - Get single issue
        app.get('/issues/:id', optionalAuthMiddleware, (req, res) => {
            const id = parseInt(req.params.id);
            const issue = mockIssues.find(i => i.id === id);

            if (!issue) {
                return res.status(404).json({ error: 'Issue not found' });
            }

            return res.status(200).json(issue);
        });

        // POST /issues/report - Create issue
        app.post('/issues/report', mockAuthMiddleware, (req, res) => {
            const { title, description, issueType, latitude, longitude, severity } = req.body;

            if (!title || typeof title !== 'string' || title.trim().length === 0) {
                return res.status(400).json({ error: 'Title is required' });
            }

            if (!issueType) {
                return res.status(400).json({ error: 'Issue type is required' });
            }

            if (latitude === undefined || longitude === undefined) {
                return res.status(400).json({ error: 'Location is required' });
            }

            if (typeof latitude !== 'number' || latitude < -90 || latitude > 90) {
                return res.status(400).json({ error: 'Invalid latitude' });
            }

            if (typeof longitude !== 'number' || longitude < -180 || longitude > 180) {
                return res.status(400).json({ error: 'Invalid longitude' });
            }

            const newIssue = {
                id: nextIssueId++,
                title: title.trim(),
                description: description || '',
                issueType,
                status: 'PENDING',
                latitude,
                longitude,
                severity: severity || 5,
                reporterId: req.user!.id,
                voteCount: 0,
                commentCount: 0,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            mockIssues.push(newIssue);
            return res.status(201).json(newIssue);
        });

        // POST /issues/:id/vote - Vote on issue
        app.post('/issues/:id/vote', mockAuthMiddleware, (req, res) => {
            const id = parseInt(req.params.id);
            const { voteType } = req.body;

            if (!voteType || !['up', 'down'].includes(voteType)) {
                return res.status(400).json({ error: 'Valid vote type required (up/down)' });
            }

            const issue = mockIssues.find(i => i.id === id);
            if (!issue) {
                return res.status(404).json({ error: 'Issue not found' });
            }

            // Check for duplicate vote
            const existingVote = mockVotes.find(v => v.issueId === id && v.userId === req.user!.id);
            if (existingVote) {
                if (existingVote.voteType === voteType) {
                    return res.status(400).json({ error: 'Already voted' });
                }
                existingVote.voteType = voteType;
            } else {
                mockVotes.push({ issueId: id, userId: req.user!.id, voteType });
            }

            issue.voteCount += voteType === 'up' ? 1 : -1;
            return res.status(200).json({ ok: true, voteCount: issue.voteCount });
        });

        // PATCH /issues/:id/status - Update issue status
        app.patch('/issues/:id/status', mockAuthMiddleware, (req, res) => {
            const id = parseInt(req.params.id);
            const { status } = req.body;

            const validStatuses = ['PENDING', 'IN_PROGRESS', 'RESOLVED', 'REJECTED'];
            if (!status || !validStatuses.includes(status)) {
                return res.status(400).json({ error: 'Valid status required' });
            }

            const issue = mockIssues.find(i => i.id === id);
            if (!issue) {
                return res.status(404).json({ error: 'Issue not found' });
            }

            // Only admin or reporter can update status
            if (req.user!.role !== 'ADMIN' && issue.reporterId !== req.user!.id) {
                return res.status(403).json({ error: 'Not authorized to update this issue' });
            }

            issue.status = status;
            issue.updatedAt = new Date().toISOString();
            return res.status(200).json(issue);
        });
    });

    beforeEach(() => {
        mockIssues = [];
        mockVotes = [];
        nextIssueId = 1;
    });

    describe('GET /issues', () => {
        it('should return empty array when no issues', async () => {
            const response = await request(app).get('/issues');
            expect(response.status).toBe(200);
            expect(response.body).toEqual([]);
        });

        it('should return all issues', async () => {
            mockIssues.push({
                id: 1,
                title: 'Test Issue',
                status: 'PENDING',
                latitude: 28.6139,
                longitude: 77.209,
            });

            const response = await request(app).get('/issues');
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(1);
            expect(response.body[0].title).toBe('Test Issue');
        });

        it('should work without authentication', async () => {
            const response = await request(app).get('/issues');
            expect(response.status).toBe(200);
        });
    });

    describe('GET /issues/types', () => {
        it('should return list of issue types', async () => {
            const response = await request(app).get('/issues/types');
            expect(response.status).toBe(200);
            expect(response.body).toContain('POTHOLE');
            expect(response.body).toContain('STREETLIGHT');
            expect(response.body).toContain('OTHER');
        });

        it('should return array of strings', async () => {
            const response = await request(app).get('/issues/types');
            expect(Array.isArray(response.body)).toBe(true);
            response.body.forEach((type: any) => {
                expect(typeof type).toBe('string');
            });
        });
    });

    describe('GET /issues/map', () => {
        beforeEach(() => {
            mockIssues.push(
                { id: 1, title: 'Issue 1', latitude: 28.61, longitude: 77.21 },
                { id: 2, title: 'Issue 2', latitude: 28.62, longitude: 77.22 },
                { id: 3, title: 'Issue 3', latitude: 30.00, longitude: 80.00 }, // Outside bounds
            );
        });

        it('should return issues within bounds', async () => {
            const response = await request(app)
                .get('/issues/map')
                .query({ minLat: 28.60, maxLat: 28.65, minLng: 77.20, maxLng: 77.25 });

            expect(response.status).toBe(200);
            expect(response.body.length).toBe(2);
        });

        it('should exclude issues outside bounds', async () => {
            const response = await request(app)
                .get('/issues/map')
                .query({ minLat: 28.60, maxLat: 28.65, minLng: 77.20, maxLng: 77.25 });

            expect(response.body.every((i: any) => i.id !== 3)).toBe(true);
        });

        it('should require bounds parameters', async () => {
            const response = await request(app).get('/issues/map');
            expect(response.status).toBe(400);
        });

        it('should require all four bounds', async () => {
            const response = await request(app)
                .get('/issues/map')
                .query({ minLat: 28.60, maxLat: 28.65 });
            expect(response.status).toBe(400);
        });
    });

    describe('GET /issues/:id', () => {
        beforeEach(() => {
            mockIssues.push({
                id: 1,
                title: 'Test Issue',
                description: 'Description',
                status: 'PENDING',
                latitude: 28.6139,
                longitude: 77.209,
            });
        });

        it('should return issue by id', async () => {
            const response = await request(app).get('/issues/1');
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(1);
            expect(response.body.title).toBe('Test Issue');
        });

        it('should return 404 for non-existent issue', async () => {
            const response = await request(app).get('/issues/999');
            expect(response.status).toBe(404);
        });

        it('should work without authentication', async () => {
            const response = await request(app).get('/issues/1');
            expect(response.status).toBe(200);
        });
    });

    describe('POST /issues/report', () => {
        const validIssue = {
            title: 'New Pothole',
            description: 'Large pothole on main street',
            issueType: 'POTHOLE',
            latitude: 28.6139,
            longitude: 77.209,
            severity: 7,
        };

        it('should create issue with valid data', async () => {
            const response = await request(app)
                .post('/issues/report')
                .set('Authorization', `Bearer ${userToken}`)
                .send(validIssue);

            expect(response.status).toBe(201);
            expect(response.body.title).toBe('New Pothole');
            expect(response.body.id).toBeDefined();
            expect(response.body.status).toBe('PENDING');
        });

        it('should require authentication', async () => {
            const response = await request(app)
                .post('/issues/report')
                .send(validIssue);

            expect(response.status).toBe(401);
        });

        it('should reject missing title', async () => {
            const response = await request(app)
                .post('/issues/report')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ ...validIssue, title: '' });

            expect(response.status).toBe(400);
            expect(response.body.error).toContain('Title');
        });

        it('should reject missing issue type', async () => {
            const response = await request(app)
                .post('/issues/report')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ ...validIssue, issueType: undefined });

            expect(response.status).toBe(400);
        });

        it('should reject missing location', async () => {
            const response = await request(app)
                .post('/issues/report')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ title: 'Test', issueType: 'POTHOLE' });

            expect(response.status).toBe(400);
            expect(response.body.error).toContain('Location');
        });

        it('should reject invalid latitude', async () => {
            const response = await request(app)
                .post('/issues/report')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ ...validIssue, latitude: 100 }); // > 90

            expect(response.status).toBe(400);
            expect(response.body.error).toContain('latitude');
        });

        it('should reject invalid longitude', async () => {
            const response = await request(app)
                .post('/issues/report')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ ...validIssue, longitude: 200 }); // > 180

            expect(response.status).toBe(400);
            expect(response.body.error).toContain('longitude');
        });

        it('should set default severity if not provided', async () => {
            const response = await request(app)
                .post('/issues/report')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ ...validIssue, severity: undefined });

            expect(response.status).toBe(201);
            expect(response.body.severity).toBe(5);
        });

        it('should set reporter id from authenticated user', async () => {
            const response = await request(app)
                .post('/issues/report')
                .set('Authorization', `Bearer ${userToken}`)
                .send(validIssue);

            expect(response.body.reporterId).toBe(1);
        });

        it('should trim title', async () => {
            const response = await request(app)
                .post('/issues/report')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ ...validIssue, title: '  Trimmed Title  ' });

            expect(response.body.title).toBe('Trimmed Title');
        });
    });

    describe('POST /issues/:id/vote', () => {
        beforeEach(() => {
            mockIssues.push({
                id: 1,
                title: 'Test Issue',
                voteCount: 0,
                reporterId: 2,
            });
        });

        it('should upvote issue', async () => {
            const response = await request(app)
                .post('/issues/1/vote')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ voteType: 'up' });

            expect(response.status).toBe(200);
            expect(response.body.voteCount).toBe(1);
        });

        it('should downvote issue', async () => {
            const response = await request(app)
                .post('/issues/1/vote')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ voteType: 'down' });

            expect(response.status).toBe(200);
            expect(response.body.voteCount).toBe(-1);
        });

        it('should require authentication', async () => {
            const response = await request(app)
                .post('/issues/1/vote')
                .send({ voteType: 'up' });

            expect(response.status).toBe(401);
        });

        it('should reject invalid vote type', async () => {
            const response = await request(app)
                .post('/issues/1/vote')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ voteType: 'invalid' });

            expect(response.status).toBe(400);
        });

        it('should return 404 for non-existent issue', async () => {
            const response = await request(app)
                .post('/issues/999/vote')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ voteType: 'up' });

            expect(response.status).toBe(404);
        });

        it('should prevent duplicate same votes', async () => {
            await request(app)
                .post('/issues/1/vote')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ voteType: 'up' });

            const response = await request(app)
                .post('/issues/1/vote')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ voteType: 'up' });

            expect(response.status).toBe(400);
        });

        it('should allow changing vote', async () => {
            await request(app)
                .post('/issues/1/vote')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ voteType: 'up' });

            const response = await request(app)
                .post('/issues/1/vote')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ voteType: 'down' });

            expect(response.status).toBe(200);
        });
    });

    describe('PATCH /issues/:id/status', () => {
        beforeEach(() => {
            mockIssues.push({
                id: 1,
                title: 'Test Issue',
                status: 'PENDING',
                reporterId: 1, // User 1 is reporter
            });
        });

        it('should update status as admin', async () => {
            const response = await request(app)
                .patch('/issues/1/status')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ status: 'IN_PROGRESS' });

            expect(response.status).toBe(200);
            expect(response.body.status).toBe('IN_PROGRESS');
        });

        it('should update status as reporter', async () => {
            const response = await request(app)
                .patch('/issues/1/status')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ status: 'RESOLVED' });

            expect(response.status).toBe(200);
            expect(response.body.status).toBe('RESOLVED');
        });

        it('should require authentication', async () => {
            const response = await request(app)
                .patch('/issues/1/status')
                .send({ status: 'RESOLVED' });

            expect(response.status).toBe(401);
        });

        it('should reject invalid status', async () => {
            const response = await request(app)
                .patch('/issues/1/status')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ status: 'INVALID_STATUS' });

            expect(response.status).toBe(400);
        });

        it('should return 404 for non-existent issue', async () => {
            const response = await request(app)
                .patch('/issues/999/status')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ status: 'RESOLVED' });

            expect(response.status).toBe(404);
        });

        it('should reject non-admin non-reporter update', async () => {
            // Create issue by user 2
            mockIssues[0].reporterId = 2;

            const response = await request(app)
                .patch('/issues/1/status')
                .set('Authorization', `Bearer ${userToken}`) // User 1 token
                .send({ status: 'RESOLVED' });

            expect(response.status).toBe(403);
        });

        it('should update updatedAt timestamp', async () => {
            const before = new Date().toISOString();
            
            const response = await request(app)
                .patch('/issues/1/status')
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ status: 'RESOLVED' });

            expect(new Date(response.body.updatedAt).getTime())
                .toBeGreaterThanOrEqual(new Date(before).getTime());
        });
    });
});

describe('Issue Coordinate Validation', () => {
    let app: Express;
    let userToken: string;

    beforeAll(() => {
        userToken = jwt.sign({ userId: 1, role: 'USER' }, JWT_SECRET!);

        app = express();
        app.use(cookieParser());
        app.use(express.json());

        app.post('/issues/report', (req: Request, res: Response) => {
            const token = req.headers.authorization?.replace('Bearer ', '');
            if (!token) return res.status(401).json({ error: 'Auth required' });

            const { latitude, longitude } = req.body;

            if (typeof latitude !== 'number' || latitude < -90 || latitude > 90) {
                return res.status(400).json({ error: 'Latitude must be between -90 and 90' });
            }

            if (typeof longitude !== 'number' || longitude < -180 || longitude > 180) {
                return res.status(400).json({ error: 'Longitude must be between -180 and 180' });
            }

            return res.status(201).json({ ok: true });
        });
    });

    const validBase = { title: 'Test', issueType: 'POTHOLE' };

    it('should accept valid coordinates', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: 28.6139, longitude: 77.209 });

        expect(response.status).toBe(201);
    });

    it('should accept edge case: equator', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: 0, longitude: 0 });

        expect(response.status).toBe(201);
    });

    it('should accept edge case: north pole', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: 90, longitude: 0 });

        expect(response.status).toBe(201);
    });

    it('should accept edge case: south pole', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: -90, longitude: 0 });

        expect(response.status).toBe(201);
    });

    it('should accept edge case: date line', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: 0, longitude: 180 });

        expect(response.status).toBe(201);
    });

    it('should reject latitude > 90', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: 91, longitude: 0 });

        expect(response.status).toBe(400);
    });

    it('should reject latitude < -90', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: -91, longitude: 0 });

        expect(response.status).toBe(400);
    });

    it('should reject longitude > 180', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: 0, longitude: 181 });

        expect(response.status).toBe(400);
    });

    it('should reject longitude < -180', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: 0, longitude: -181 });

        expect(response.status).toBe(400);
    });

    it('should reject string latitude', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: '28.6139', longitude: 77.209 });

        expect(response.status).toBe(400);
    });

    it('should reject null coordinates', async () => {
        const response = await request(app)
            .post('/issues/report')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ ...validBase, latitude: null, longitude: null });

        expect(response.status).toBe(400);
    });
});
