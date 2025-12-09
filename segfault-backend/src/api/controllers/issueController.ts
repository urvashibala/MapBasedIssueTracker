import type { Request, Response } from "express";
import {
    createAuthenticatedIssue,
    createGuestIssue,
    getIssueById,
    getIssuesByStatus,
    addIssueUpvote,
    removeIssueUpvote,
    getIssueUpvoteCount,
    hasUserUpvotedIssue,
} from "../../data/issue";
import { prisma } from "../../data/prisma/prismaClient";
import { IssueStatus, IssueType } from "../../data/src/generated/prisma/enums";

const ISSUE_TYPE_INFO: Record<string, { name: string; department: string }> = {
    POTHOLE: { name: "Pothole", department: "Public Works Department" },
    ROAD_DAMAGE: { name: "Road Damage", department: "Public Works Department" },
    STREETLIGHT_FAULT: { name: "Streetlight Fault", department: "Electrical Department" },
    GARBAGE_UNCOLLECTED: { name: "Garbage Uncollected", department: "Sanitation Department" },
    ILLEGAL_DUMPING: { name: "Illegal Dumping", department: "Sanitation Department" },
    DRAINAGE_BLOCKED: { name: "Drainage Blocked", department: "Water Department" },
    SEWAGE_OVERFLOW: { name: "Sewage Overflow", department: "Water Department" },
    WATER_SUPPLY_ISSUE: { name: "Water Supply Issue", department: "Water Department" },
    LOW_WATER_PRESSURE: { name: "Low Water Pressure", department: "Water Department" },
    OPEN_MANHOLE: { name: "Open Manhole", department: "Public Works Department" },
    BROKEN_FOOTPATH: { name: "Broken Footpath", department: "Public Works Department" },
    ILLEGAL_ENCROACHMENT: { name: "Illegal Encroachment", department: "Municipal Corporation" },
    STRAY_CATTLE: { name: "Stray Cattle", department: "Animal Control" },
    TREE_FALL: { name: "Tree Fall", department: "Parks Department" },
    TRAFFIC_LIGHT_FAULT: { name: "Traffic Light Fault", department: "Traffic Department" },
    MOSQUITO_BREEDING: { name: "Mosquito Breeding", department: "Health Department" },
    NOISE_COMPLAINT: { name: "Noise Complaint", department: "Municipal Corporation" },
    BUILDING_SAFETY: { name: "Building Safety", department: "Building Department" },
};

export async function getIssues(req: Request, res: Response) {
    try {
        const { type, status, showResolved } = req.query;

        const where: Record<string, unknown> = {};

        if (type && typeof type === "string") {
            where.issueType = type as IssueType;
        }

        if (status && typeof status === "string") {
            where.status = status as IssueStatus;
        } else if (showResolved !== "true") {
            where.status = { not: IssueStatus.RESOLVED };
        }

        const issues = await prisma.issue.findMany({
            where,
            orderBy: { createdAt: "desc" },
            include: {
                user: { select: { id: true, name: true } },
                _count: { select: { upvotes: true, comments: true } },
            },
            take: 100,
        });

        const formatted = issues.map((issue) => ({
            id: String(issue.id),
            title: issue.title,
            type: issue.issueType,
            status: issue.status,
            description: issue.description,
            location: `${issue.latitude}, ${issue.longitude}`,
            lat: issue.latitude,
            lng: issue.longitude,
            voteCount: issue._count.upvotes,
            commentCount: issue._count.comments,
            reportedAt: issue.createdAt.toISOString(),
            reporterId: issue.guestTokenId ? undefined : String(issue.userId),
        }));

        return res.json(formatted);
    } catch (err) {
        console.error("Error fetching issues:", err);
        return res.status(500).json({ error: "Failed to fetch issues" });
    }
}

export async function getIssueTypes(_req: Request, res: Response) {
    try {
        const types = Object.entries(ISSUE_TYPE_INFO).map(([id, info]) => ({
            id,
            name: info.name,
            department: info.department,
            description: `Report ${info.name.toLowerCase()} issues`,
        }));

        return res.json(types);
    } catch (err) {
        console.error("Error fetching issue types:", err);
        return res.status(500).json({ error: "Failed to fetch issue types" });
    }
}

export async function getIssue(req: Request, res: Response) {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ error: "Issue ID is required" });
        }
        const issueId = parseInt(id);

        if (isNaN(issueId)) {
            return res.status(400).json({ error: "Invalid issue ID" });
        }

        const issue = await getIssueById(issueId);
        if (!issue) {
            return res.status(404).json({ error: "Issue not found" });
        }

        let hasVoted = false;
        if (req.user && req.user.id !== -1) {
            hasVoted = await hasUserUpvotedIssue(req.user.id, issueId);
        }

        const formatted = {
            id: String(issue.id),
            title: issue.title,
            type: issue.issueType,
            status: issue.status,
            description: issue.description,
            location: `${issue.latitude}, ${issue.longitude}`,
            lat: issue.latitude,
            lng: issue.longitude,
            voteCount: issue._count.upvotes,
            commentCount: issue._count.comments,
            hasVoted,
            reportedAt: issue.createdAt.toISOString(),
            reporter: issue.guestTokenId
                ? { name: "Anonymous", isGuest: true }
                : { id: String(issue.user.id), name: issue.user.name, email: issue.user.email },
        };

        return res.json(formatted);
    } catch (err) {
        console.error("Error fetching issue:", err);
        return res.status(500).json({ error: "Failed to fetch issue" });
    }
}

export async function createIssue(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication required" });
    }

    // Support JSON and multipart/form-data (multer populates req.body as strings)
    const body = req.body ?? {};
    const typeRaw = body.type;
    const description = typeof body.description === "string" ? body.description.trim() : undefined;
    const latRaw = body.lat;
    const lngRaw = body.lng;

    if (!typeRaw || !description) {
      return res.status(400).json({ error: "Type and description are required" });
    }

    const issueType = String(typeRaw) as IssueType;
    if (!Object.values(IssueType).includes(issueType)) {
      return res.status(400).json({ error: "Invalid issue type" });
    }

    // Accept both numbers and strings; fail if not parsable
    const latitude = typeof latRaw === "number" ? latRaw : parseFloat(String(latRaw));
    const longitude = typeof lngRaw === "number" ? lngRaw : parseFloat(String(lngRaw));

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      return res.status(400).json({ error: "Invalid latitude/longitude" });
    }

    const title = `${ISSUE_TYPE_INFO[issueType]?.name || issueType} Report`;

    let issue;
    if (req.user.role === "GUEST" && req.user.guestTokenId) {
      issue = await createGuestIssue(title, description, latitude, longitude, issueType, req.user.guestTokenId);
    } else if (req.user.id !== -1) {
      issue = await createAuthenticatedIssue(title, description, latitude, longitude, issueType, req.user.id);
    } else {
      return res.status(401).json({ error: "Authenticated user required" });
    }

    return res.status(201).json({
      id: String(issue.id),
      title: issue.title,
      type: issue.issueType,
      status: issue.status,
      description: issue.description,
      location: `${issue.latitude}, ${issue.longitude}`,
      lat: issue.latitude,
      lng: issue.longitude,
      reportedAt: issue.createdAt.toISOString(),
      reporterId: issue.guestTokenId ? undefined : String(issue.userId),
    });
  } catch (err) {
    console.error("Error creating issue:", err);
    return res.status(500).json({ error: "Failed to create issue" });
  }
}

export async function voteOnIssue(req: Request, res: Response) {
    try {
        if (!req.user || req.user.id === -1) {
            return res.status(401).json({ error: "Authenticated user required to vote" });
        }

        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ error: "Issue ID is required" });
        }
        const issueId = parseInt(id);

        if (isNaN(issueId)) {
            return res.status(400).json({ error: "Invalid issue ID" });
        }

        const issue = await getIssueById(issueId);
        if (!issue) {
            return res.status(404).json({ error: "Issue not found" });
        }

        const hasVoted = await hasUserUpvotedIssue(req.user.id, issueId);

        if (hasVoted) {
            await removeIssueUpvote(req.user.id, issueId);
        } else {
            await addIssueUpvote(req.user.id, issueId);
        }

        const voteCount = await getIssueUpvoteCount(issueId);

        return res.json({ voteCount, hasVoted: !hasVoted });
    } catch (err) {
        console.error("Error voting on issue:", err);
        return res.status(500).json({ error: "Failed to vote on issue" });
    }
}

export default { getIssues, getIssueTypes, getIssue, createIssue, voteOnIssue };
