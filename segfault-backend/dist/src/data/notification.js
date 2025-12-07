// Notification DB helpers
import { prisma } from "./prisma/prismaClient";
import { NotificationType } from "../generated/prisma/enums";
export async function createNotification(userId, type, message) {
    const notif = await prisma.notification.create({ data: { userId, type, message } });
    return notif;
}
export async function getUserNotifications(userId) {
    const notifs = await prisma.notification.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } });
    return notifs;
}
// Accept one or many notification ids to mark as read
export async function markNotificationAsRead(notificationIds) {
    const ids = Array.isArray(notificationIds) ? notificationIds : [notificationIds];
    const res = await prisma.notification.updateMany({ where: { id: { in: ids } }, data: { read: true } });
    return res.count;
}
export async function markAllNotificationsAsRead(userId) {
    const res = await prisma.notification.updateMany({ where: { userId, read: false }, data: { read: true } });
    return res.count;
}
export default {
    createNotification,
    getUserNotifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
};
//# sourceMappingURL=notification.js.map