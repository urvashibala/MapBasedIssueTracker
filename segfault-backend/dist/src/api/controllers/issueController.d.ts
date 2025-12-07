import type { Request, Response } from "express";
export declare function getIssues(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getIssueTypes(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getIssue(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createIssue(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function voteOnIssue(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getIssuesInBounds(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateIssueStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    getIssues: typeof getIssues;
    getIssueTypes: typeof getIssueTypes;
    getIssue: typeof getIssue;
    createIssue: typeof createIssue;
    voteOnIssue: typeof voteOnIssue;
    getIssuesInBounds: typeof getIssuesInBounds;
    updateIssueStatus: typeof updateIssueStatus;
};
export default _default;
//# sourceMappingURL=issueController.d.ts.map