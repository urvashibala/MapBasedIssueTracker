/**
 * Integration Test Setup
 * Creates an Express app instance for testing without starting the server
 */

import express, { type Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Mock environment variables
process.env.JWT_SECRET = 'test-jwt-secret-key-for-testing';
process.env.FRONTEND_URL = 'http://localhost:5173';
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test';

/**
 * Creates a configured Express app for integration testing
 * This is separated from the routes to allow testing without database connections
 */
export function createTestApp(): Express {
    const app = express();

    app.use(cors({
        origin: true,
        credentials: true
    }));
    app.use(cookieParser());
    app.use(express.json());

    app.get('/', (_req, res) => {
        res.send('Public Issues Tracker API');
    });

    return app;
}

/**
 * Creates a mock authenticated request with JWT token
 */
export function createMockToken(payload: {
    userId?: number;
    id?: number;
    role?: string;
    guestTokenId?: number;
}): string {
    const jwt = require('jsonwebtoken');
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

/**
 * Mock user data for testing
 */
export const mockUsers = {
    regularUser: {
        id: 1,
        email: 'user@test.com',
        name: 'Test User',
        role: 'USER',
        credibilityScore: 100,
    },
    adminUser: {
        id: 2,
        email: 'admin@test.com',
        name: 'Admin User',
        role: 'ADMIN',
        credibilityScore: 500,
    },
    guestUser: {
        guestTokenId: 1,
        role: 'GUEST',
    },
};

/**
 * Mock issue data for testing
 */
export const mockIssues = {
    validIssue: {
        title: 'Test Pothole',
        description: 'A dangerous pothole on the main road',
        issueType: 'POTHOLE',
        latitude: 28.6139,
        longitude: 77.2090,
        severity: 5,
    },
    invalidIssue: {
        title: '', // Empty title - invalid
        description: 'Missing required fields',
    },
};

/**
 * Mock comment data for testing
 */
export const mockComments = {
    validComment: {
        content: 'This is a test comment',
    },
    emptyComment: {
        content: '',
    },
};

export default createTestApp;
