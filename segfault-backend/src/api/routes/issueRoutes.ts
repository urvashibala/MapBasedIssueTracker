import express from "express";
import { getIssues, getIssueTypes, getIssue, createIssue, voteOnIssue } from "../controllers/issueController";
import { authMiddleware, optionalAuth } from "../middleware/auth";

const router = express.Router();

router.get("/", optionalAuth, getIssues);
router.get("/types", getIssueTypes);
router.get("/:id", optionalAuth, getIssue);
router.post("/report", authMiddleware, createIssue);
router.post("/:id/vote", authMiddleware, voteOnIssue);

export default router;
