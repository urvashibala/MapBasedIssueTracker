import type { Request, Response } from "express";
export declare function castResolutionVote(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getResolutionVotes(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    castResolutionVote: typeof castResolutionVote;
    getResolutionVotes: typeof getResolutionVotes;
};
export default _default;
//# sourceMappingURL=resolutionController.d.ts.map