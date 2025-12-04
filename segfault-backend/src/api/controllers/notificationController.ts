import type { Request, Response } from "express";
import { getUserNotifications, markNotificationAsRead, markAllNotificationsAsRead } from "../../data/notification";

export async function getNotifications(req: Request, res: Response) {
    try {
        if (!req.user || req.user.id === -1) {
            return res.json([]);
        }

        const notifications = await getUserNotifications(req.user.id);

        const formatted = notifications.map((notif) => ({
            id: String(notif.id),
            type: notif.type,
            message: notif.message,
            read: notif.read,
            createdAt: notif.createdAt.toISOString(),
        }));

        return res.json(formatted);
    } catch (err) {
        console.error("Error fetching notifications:", err);
        return res.status(500).json({ error: "Failed to fetch notifications" });
    }
}

export async function markAsRead(req: Request, res: Response) {
    try {
        if (!req.user || req.user.id === -1) {
            return res.status(401).json({ error: "Authentication required" });
        }

        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ error: "Notification ID is required" });
        }
        const notificationId = parseInt(id);

        if (isNaN(notificationId)) {
            return res.status(400).json({ error: "Invalid notification ID" });
        }

        await markNotificationAsRead(notificationId);

        return res.json({ success: true });
    } catch (err) {
        console.error("Error marking notification as read:", err);
        return res.status(500).json({ error: "Failed to mark notification as read" });
    }
}

export async function markAllAsRead(req: Request, res: Response) {
    try {
        if (!req.user || req.user.id === -1) {
            return res.status(401).json({ error: "Authentication required" });
        }

        await markAllNotificationsAsRead(req.user.id);

        return res.json({ success: true });
    } catch (err) {
        console.error("Error marking all notifications as read:", err);
        return res.status(500).json({ error: "Failed to mark notifications as read" });
    }
}

export default { getNotifications, markAsRead, markAllAsRead };
