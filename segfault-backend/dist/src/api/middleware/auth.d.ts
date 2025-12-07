import type { Request, Response, NextFunction } from "express";
export interface AuthUser {
    id: number;
    role: "USER" | "ADMIN" | "GUEST";
    email?: string;
    guestTokenId?: number;
}
declare global {
    namespace Express {
        interface Request {
            user?: AuthUser;
        }
    }
}
export declare function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function optionalAuth(req: Request, _res: Response, next: NextFunction): Promise<void>;
declare const _default: {
    authMiddleware: typeof authMiddleware;
    optionalAuth: typeof optionalAuth;
};
export default _default;
//# sourceMappingURL=auth.d.ts.map