import express from "express";
import multer from "multer";
import { getIssues, getIssueTypes, getIssue, createIssue, voteOnIssue } from "../controllers/issueController";
import { authMiddleware, optionalAuth } from "../middleware/auth";

const router = express.Router();
const upload = multer(); // memory storage; parses multipart/form-data

// List issues (guest or authenticated)
router.get("/", optionalAuth, getIssues);

// Issue types
router.get("/types", getIssueTypes);

// Get a single issue (guest or authenticated)
router.get("/:id", optionalAuth, getIssue);

// Report a new issue:
// - If the frontend sends FormData without files: use upload.none() to populate req.body
// - If the frontend may include an image: switch to upload.single("image") instead
router.post("/report", optionalAuth, upload.none(), createIssue);

// Vote on an issue (requires authentication)
router.post("/:id/vote", authMiddleware, voteOnIssue);

export default router;