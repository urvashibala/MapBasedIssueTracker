import express from "express";
import { getComments, createComment, removeComment, upvoteComment, reportComment } from "../controllers/commentController";
import { authMiddleware, optionalAuth } from "../middleware/auth";

const router = express.Router();

router.get("/issues/:id/comments", optionalAuth, getComments);
router.post("/issues/:id/comments", authMiddleware, createComment);
router.delete("/comments/:id", authMiddleware, removeComment);
router.post("/comments/:id/upvote", authMiddleware, upvoteComment);
router.post("/comments/:id/flag", authMiddleware, reportComment);

export default router;
