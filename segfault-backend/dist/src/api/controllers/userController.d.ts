import type { Request, Response } from "express";
export declare function getMe(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getMyIssues(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getMyComments(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    getMe: typeof getMe;
    getMyIssues: typeof getMyIssues;
    getMyComments: typeof getMyComments;
};
export default _default;
//# sourceMappingURL=userController.d.ts.map