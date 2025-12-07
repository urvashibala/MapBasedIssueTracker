import type { Request, Response } from "express";
export declare function getSummary(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getHeatmap(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function exportData(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    getSummary: typeof getSummary;
    getHeatmap: typeof getHeatmap;
    exportData: typeof exportData;
};
export default _default;
//# sourceMappingURL=analyticsController.d.ts.map