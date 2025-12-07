import type { Request, Response } from "express";
export declare function getComments(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createComment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function removeComment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function upvoteComment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function reportComment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    getComments: typeof getComments;
    createComment: typeof createComment;
    removeComment: typeof removeComment;
    upvoteComment: typeof upvoteComment;
    reportComment: typeof reportComment;
};
export default _default;
//# sourceMappingURL=commentController.d.ts.map