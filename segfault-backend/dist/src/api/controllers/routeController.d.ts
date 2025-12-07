import type { Request, Response } from "express";
/**
 * POST /api/route
 * Find optimal path between two points, avoiding high-penalty areas
 */
export declare function calculateRoute(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    calculateRoute: typeof calculateRoute;
};
export default _default;
//# sourceMappingURL=routeController.d.ts.map