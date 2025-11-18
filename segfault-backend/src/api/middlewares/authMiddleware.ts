import type { Request, Response, NextFunction } from 'express';
import { redisClient } from '../../data/redisClient';

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
    try {
        let token: string | undefined;

        // Check cookie first
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const anyReq = req as any;
        if (anyReq.cookies && anyReq.cookies.session) {
            token = anyReq.cookies.session;
        }

        // Fallback to Authorization header
        if (!token) {
            const auth = req.headers.authorization;
            if (auth && auth.startsWith('Bearer ')) {
                token = auth.slice(7);
            }
        }

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const data = await redisClient.get(`session:${token}`);
        if (!data) {
            return res.status(401).json({ error: 'Session expired or invalid' });
        }

        let parsed: any = null;
        try {
            parsed = JSON.parse(data);
        } catch (e) {
            parsed = null;
        }

        if (!parsed) {
            return res.status(401).json({ error: 'Invalid session payload' });
        }

        // attach user info
        (req as any).user = parsed;

        return next();
    } catch (err) {
        return res.status(500).json({ error: 'Auth check failed' });
    }
}

export default requireAuth;
