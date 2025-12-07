import type { Request, Response } from "express";
export declare function getModerationQueue(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function resolveModeration(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getUsers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function banUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    getModerationQueue: typeof getModerationQueue;
    resolveModeration: typeof resolveModeration;
    getUsers: typeof getUsers;
    banUser: typeof banUser;
};
export default _default;
//# sourceMappingURL=adminController.d.ts.map