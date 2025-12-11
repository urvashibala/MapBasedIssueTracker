import { NotificationType } from "../generated/prisma/enums";
export declare function createNotification(userId: number, type: NotificationType, message: string): Promise<{
    id: number;
    createdAt: Date;
    userId: number | null;
    type: NotificationType;
    message: string;
    read: boolean;
}>;
export declare function getUserNotifications(userId: number): Promise<{
    id: number;
    createdAt: Date;
    userId: number | null;
    type: NotificationType;
    message: string;
    read: boolean;
}[]>;
export declare function markNotificationAsRead(notificationIds: number[] | number): Promise<number>;
export declare function markAllNotificationsAsRead(userId: number): Promise<number>;
declare const _default: {
    createNotification: typeof createNotification;
    getUserNotifications: typeof getUserNotifications;
    markNotificationAsRead: typeof markNotificationAsRead;
    markAllNotificationsAsRead: typeof markAllNotificationsAsRead;
};
export default _default;
//# sourceMappingURL=notification.d.ts.map