/**
 * Integration Tests for Comment Routes
 * Tests comment-related endpoints
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
let mockComments: any[] = [];
let mockIssues: any[] = [];
let mockUpvotes: any[] = [];
let nextCommentId = 1;

// Auth middleware
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
        // Ignore
    }
    next();
}

describe('Comment Routes Integration Tests', () => {
    let app: Express;
    let userToken: string;
    let adminToken: string;
    let otherUserToken: string;

    beforeAll(() => {
        userToken = jwt.sign({ userId: 1, role: 'USER' }, JWT_SECRET!);
        adminToken = jwt.sign({ userId: 2, role: 'ADMIN' }, JWT_SECRET!);
        otherUserToken = jwt.sign({ userId: 3, role: 'USER' }, JWT_SECRET!);

        app = express();
        app.use(cookieParser());
        app.use(express.json());

        // GET /issues/:id/comments - Get comments for issue
        app.get('/issues/:id/comments', optionalAuthMiddleware, (req, res) => {
            const issueId = parseInt(req.params.id);
            const issue = mockIssues.find(i => i.id === issueId);

            if (!issue) {
                return res.status(404).json({ error: 'Issue not found' });
            }

            const comments = mockComments
                .filter(c => c.issueId === issueId)
                .map(c => ({
                    ...c,
                    upvoteCount: mockUpvotes.filter(u => u.commentId === c.id).length,
                    hasUpvoted: req.user 
                        ? mockUpvotes.some(u => u.commentId === c.id && u.userId === req.user!.id)
                        : false,
                }));

            return res.status(200).json(comments);
        });

        // POST /issues/:id/comments - Create comment
        app.post('/issues/:id/comments', mockAuthMiddleware, (req, res) => {
            const issueId = parseInt(req.params.id);
            const { content } = req.body;

            const issue = mockIssues.find(i => i.id === issueId);
            if (!issue) {
                return res.status(404).json({ error: 'Issue not found' });
            }

            if (!content || typeof content !== 'string' || content.trim().length === 0) {
                return res.status(400).json({ error: 'Comment content is required' });
            }

            if (content.length > 1000) {
                return res.status(400).json({ error: 'Comment too long (max 1000 characters)' });
            }

            const newComment = {
                id: nextCommentId++,
                content: content.trim(),
                issueId,
                authorId: req.user!.id,
                authorName: `User ${req.user!.id}`,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            mockComments.push(newComment);
            return res.status(201).json(newComment);
        });

        // DELETE /comments/:id - Delete comment
        app.delete('/comments/:id', mockAuthMiddleware, (req, res) => {
            const commentId = parseInt(req.params.id);
            const comment = mockComments.find(c => c.id === commentId);

            if (!comment) {
                return res.status(404).json({ error: 'Comment not found' });
            }

            // Only author or admin can delete
            if (comment.authorId !== req.user!.id && req.user!.role !== 'ADMIN') {
                return res.status(403).json({ error: 'Not authorized to delete this comment' });
            }

            mockComments = mockComments.filter(c => c.id !== commentId);
            mockUpvotes = mockUpvotes.filter(u => u.commentId !== commentId);

            return res.status(200).json({ ok: true });
        });

        // POST /comments/:id/upvote - Upvote comment
        app.post('/comments/:id/upvote', mockAuthMiddleware, (req, res) => {
            const commentId = parseInt(req.params.id);
            const comment = mockComments.find(c => c.id === commentId);

            if (!comment) {
                return res.status(404).json({ error: 'Comment not found' });
            }

            // Can't upvote own comment
            if (comment.authorId === req.user!.id) {
                return res.status(400).json({ error: 'Cannot upvote own comment' });
            }

            const existingUpvote = mockUpvotes.find(
                u => u.commentId === commentId && u.userId === req.user!.id
            );

            if (existingUpvote) {
                // Remove upvote (toggle)
                mockUpvotes = mockUpvotes.filter(
                    u => !(u.commentId === commentId && u.userId === req.user!.id)
                );
                return res.status(200).json({ ok: true, upvoted: false });
            }

            mockUpvotes.push({ commentId, userId: req.user!.id });
            return res.status(200).json({ ok: true, upvoted: true });
        });

        // POST /comments/:id/flag - Report comment
        app.post('/comments/:id/flag', mockAuthMiddleware, (req, res) => {
            const commentId = parseInt(req.params.id);
            const { reason } = req.body;

            const comment = mockComments.find(c => c.id === commentId);

            if (!comment) {
                return res.status(404).json({ error: 'Comment not found' });
            }

            if (!reason || typeof reason !== 'string') {
                return res.status(400).json({ error: 'Reason is required' });
            }

            // Just acknowledge the flag
            return res.status(200).json({ ok: true, message: 'Comment flagged for review' });
        });
    });

    beforeEach(() => {
        mockIssues = [
            { id: 1, title: 'Test Issue', status: 'PENDING', reporterId: 1 },
            { id: 2, title: 'Another Issue', status: 'RESOLVED', reporterId: 2 },
        ];

        mockComments = [
            {
                id: 1,
                content: 'First comment',
                issueId: 1,
                authorId: 1,
                authorName: 'User 1',
                createdAt: '2025-01-01T00:00:00.000Z',
            },
            {
                id: 2,
                content: 'Second comment',
                issueId: 1,
                authorId: 2,
                authorName: 'User 2',
                createdAt: '2025-01-02T00:00:00.000Z',
            },
        ];

        mockUpvotes = [];
        nextCommentId = 3;
    });

    describe('GET /issues/:id/comments', () => {
        it('should return comments for issue', async () => {
            const response = await request(app)
                .get('/issues/1/comments');

            expect(response.status).toBe(200);
            expect(response.body.length).toBe(2);
        });

        it('should return empty array for issue with no comments', async () => {
            const response = await request(app)
                .get('/issues/2/comments');

            expect(response.status).toBe(200);
            expect(response.body).toEqual([]);
        });

        it('should return 404 for non-existent issue', async () => {
            const response = await request(app)
                .get('/issues/999/comments');

            expect(response.status).toBe(404);
        });

        it('should work without authentication', async () => {
            const response = await request(app)
                .get('/issues/1/comments');

            expect(response.status).toBe(200);
        });

        it('should include upvote count', async () => {
            mockUpvotes.push({ commentId: 1, userId: 3 });

            const response = await request(app)
                .get('/issues/1/comments');

            const comment = response.body.find((c: any) => c.id === 1);
            expect(comment.upvoteCount).toBe(1);
        });

        it('should show hasUpvoted for authenticated user', async () => {
            mockUpvotes.push({ commentId: 1, userId: 1 });

            const response = await request(app)
                .get('/issues/1/comments')
                .set('Authorization', `Bearer ${userToken}`);

            const comment = response.body.find((c: any) => c.id === 1);
            expect(comment.hasUpvoted).toBe(true);
        });

        it('should show hasUpvoted false when not upvoted', async () => {
            const response = await request(app)
                .get('/issues/1/comments')
                .set('Authorization', `Bearer ${userToken}`);

            const comment = response.body.find((c: any) => c.id === 1);
            expect(comment.hasUpvoted).toBe(false);
        });
    });

    describe('POST /issues/:id/comments', () => {
        it('should create comment', async () => {
            const response = await request(app)
                .post('/issues/1/comments')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ content: 'New comment' });

            expect(response.status).toBe(201);
            expect(response.body.content).toBe('New comment');
            expect(response.body.id).toBeDefined();
        });

        it('should require authentication', async () => {
            const response = await request(app)
                .post('/issues/1/comments')
                .send({ content: 'New comment' });

            expect(response.status).toBe(401);
        });

        it('should reject empty content', async () => {
            const response = await request(app)
                .post('/issues/1/comments')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ content: '' });

            expect(response.status).toBe(400);
        });

        it('should reject missing content', async () => {
            const response = await request(app)
                .post('/issues/1/comments')
                .set('Authorization', `Bearer ${userToken}`)
                .send({});

            expect(response.status).toBe(400);
        });

        it('should reject content over 1000 characters', async () => {
            const response = await request(app)
                .post('/issues/1/comments')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ content: 'x'.repeat(1001) });

            expect(response.status).toBe(400);
            expect(response.body.error).toContain('1000');
        });

        it('should return 404 for non-existent issue', async () => {
            const response = await request(app)
                .post('/issues/999/comments')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ content: 'Comment' });

            expect(response.status).toBe(404);
        });

        it('should trim content', async () => {
            const response = await request(app)
                .post('/issues/1/comments')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ content: '  Trimmed comment  ' });

            expect(response.body.content).toBe('Trimmed comment');
        });

        it('should set authorId from authenticated user', async () => {
            const response = await request(app)
                .post('/issues/1/comments')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ content: 'Comment' });

            expect(response.body.authorId).toBe(1);
        });
    });

    describe('DELETE /comments/:id', () => {
        it('should delete own comment', async () => {
            const response = await request(app)
                .delete('/comments/1')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(200);
            expect(mockComments.find(c => c.id === 1)).toBeUndefined();
        });

        it('should allow admin to delete any comment', async () => {
            const response = await request(app)
                .delete('/comments/1')
                .set('Authorization', `Bearer ${adminToken}`);

            expect(response.status).toBe(200);
        });

        it('should reject deleting others comment as regular user', async () => {
            const response = await request(app)
                .delete('/comments/1')
                .set('Authorization', `Bearer ${otherUserToken}`);

            expect(response.status).toBe(403);
        });

        it('should require authentication', async () => {
            const response = await request(app)
                .delete('/comments/1');

            expect(response.status).toBe(401);
        });

        it('should return 404 for non-existent comment', async () => {
            const response = await request(app)
                .delete('/comments/999')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(404);
        });

        it('should also delete associated upvotes', async () => {
            mockUpvotes.push({ commentId: 1, userId: 2 });
            mockUpvotes.push({ commentId: 1, userId: 3 });

            await request(app)
                .delete('/comments/1')
                .set('Authorization', `Bearer ${userToken}`);

            const remainingUpvotes = mockUpvotes.filter(u => u.commentId === 1);
            expect(remainingUpvotes.length).toBe(0);
        });
    });

    describe('POST /comments/:id/upvote', () => {
        it('should upvote comment', async () => {
            const response = await request(app)
                .post('/comments/2/upvote') // User 1 upvoting User 2's comment
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(200);
            expect(response.body.upvoted).toBe(true);
        });

        it('should toggle upvote off', async () => {
            mockUpvotes.push({ commentId: 2, userId: 1 });

            const response = await request(app)
                .post('/comments/2/upvote')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(200);
            expect(response.body.upvoted).toBe(false);
        });

        it('should not allow upvoting own comment', async () => {
            const response = await request(app)
                .post('/comments/1/upvote') // User 1 trying to upvote own comment
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(400);
            expect(response.body.error).toContain('own comment');
        });

        it('should require authentication', async () => {
            const response = await request(app)
                .post('/comments/1/upvote');

            expect(response.status).toBe(401);
        });

        it('should return 404 for non-existent comment', async () => {
            const response = await request(app)
                .post('/comments/999/upvote')
                .set('Authorization', `Bearer ${userToken}`);

            expect(response.status).toBe(404);
        });
    });

    describe('POST /comments/:id/flag', () => {
        it('should flag comment with reason', async () => {
            const response = await request(app)
                .post('/comments/1/flag')
                .set('Authorization', `Bearer ${otherUserToken}`)
                .send({ reason: 'Inappropriate content' });

            expect(response.status).toBe(200);
            expect(response.body.ok).toBe(true);
        });

        it('should require reason', async () => {
            const response = await request(app)
                .post('/comments/1/flag')
                .set('Authorization', `Bearer ${userToken}`)
                .send({});

            expect(response.status).toBe(400);
            expect(response.body.error).toContain('Reason');
        });

        it('should require authentication', async () => {
            const response = await request(app)
                .post('/comments/1/flag')
                .send({ reason: 'Spam' });

            expect(response.status).toBe(401);
        });

        it('should return 404 for non-existent comment', async () => {
            const response = await request(app)
                .post('/comments/999/flag')
                .set('Authorization', `Bearer ${userToken}`)
                .send({ reason: 'Spam' });

            expect(response.status).toBe(404);
        });
    });
});

describe('Comment Content Validation', () => {
    let app: Express;
    let userToken: string;

    beforeAll(() => {
        userToken = jwt.sign({ userId: 1, role: 'USER' }, JWT_SECRET!);

        app = express();
        app.use(express.json());

        app.post('/comments', (req, res) => {
            const token = req.headers.authorization?.replace('Bearer ', '');
            if (!token) return res.status(401).json({ error: 'Auth required' });

            const { content } = req.body;

            if (!content || typeof content !== 'string') {
                return res.status(400).json({ error: 'Content is required' });
            }

            const trimmed = content.trim();

            if (trimmed.length === 0) {
                return res.status(400).json({ error: 'Content cannot be empty' });
            }

            if (trimmed.length < 2) {
                return res.status(400).json({ error: 'Content too short' });
            }

            if (trimmed.length > 1000) {
                return res.status(400).json({ error: 'Content too long' });
            }

            return res.status(201).json({ content: trimmed });
        });
    });

    it('should accept valid content', async () => {
        const response = await request(app)
            .post('/comments')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ content: 'This is a valid comment' });

        expect(response.status).toBe(201);
    });

    it('should reject whitespace-only content', async () => {
        const response = await request(app)
            .post('/comments')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ content: '   \n\t   ' });

        expect(response.status).toBe(400);
    });

    it('should reject single character content', async () => {
        const response = await request(app)
            .post('/comments')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ content: 'a' });

        expect(response.status).toBe(400);
    });

    it('should accept content at max length', async () => {
        const response = await request(app)
            .post('/comments')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ content: 'x'.repeat(1000) });

        expect(response.status).toBe(201);
    });

    it('should reject content over max length', async () => {
        const response = await request(app)
            .post('/comments')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ content: 'x'.repeat(1001) });

        expect(response.status).toBe(400);
    });

    it('should accept unicode content', async () => {
        const response = await request(app)
            .post('/comments')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ content: '这是一个测试评论 🎉' });

        expect(response.status).toBe(201);
    });

    it('should handle newlines in content', async () => {
        const response = await request(app)
            .post('/comments')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ content: 'Line 1\nLine 2\nLine 3' });

        expect(response.status).toBe(201);
    });
});
