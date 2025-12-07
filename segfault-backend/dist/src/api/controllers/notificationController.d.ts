import type { Request, Response } from "express";
export declare function getNotifications(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function markAsRead(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function markAllAsRead(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    getNotifications: typeof getNotifications;
    markAsRead: typeof markAsRead;
    markAllAsRead: typeof markAllAsRead;
};
export default _default;
//# sourceMappingURL=notificationController.d.ts.map