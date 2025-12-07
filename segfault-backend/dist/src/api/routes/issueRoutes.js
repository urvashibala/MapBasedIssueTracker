import express from "express";
import multer from "multer";
import path from "path";
import { getIssues, getIssueTypes, getIssue, createIssue, voteOnIssue, getIssuesInBounds, updateIssueStatus } from "../controllers/issueController";
import { castResolutionVote, getResolutionVotes } from "../controllers/resolutionController";
import { authMiddleware, optionalAuth } from "../middleware/auth";
const router = express.Router();
// Use memory storage for Azure Blob upload (buffer available in req.file.buffer)
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif|webp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (extname && mimetype) {
            cb(null, true);
        }
        else {
            cb(new Error("Only image files are allowed"));
        }
    },
});
router.get("/", optionalAuth, getIssues);
router.get("/types", getIssueTypes);
router.get("/map", optionalAuth, getIssuesInBounds);
router.get("/:id", optionalAuth, getIssue);
router.post("/report", authMiddleware, upload.single("file"), createIssue);
router.post("/:id/vote", authMiddleware, voteOnIssue);
router.patch("/:id/status", authMiddleware, updateIssueStatus);
router.get("/:id/verify", optionalAuth, getResolutionVotes);
router.post("/:id/verify", authMiddleware, castResolutionVote);
export default router;
//# sourceMappingURL=issueRoutes.js.map