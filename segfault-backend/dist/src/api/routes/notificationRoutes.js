import express from "express";
import { getNotifications, markAsRead, markAllAsRead } from "../controllers/notificationController";
import { authMiddleware } from "../middleware/auth";
const router = express.Router();
router.get("/", authMiddleware, getNotifications);
router.patch("/:id/read", authMiddleware, markAsRead);
router.patch("/read-all", authMiddleware, markAllAsRead);
export default router;
//# sourceMappingURL=notificationRoutes.js.map