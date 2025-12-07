// Database access for issue related operations
import { prisma } from "./prisma/prismaClient";
import { IssueStatus, IssueType, IssueAuthorized, IssueError } from "../generated/prisma/enums";
// Issue Creation and Management
export async function createAuthenticatedIssue(title, description, latitude, longitude, issueType, userId, imageBlobId) {
    const issue = await prisma.issue.create({
        data: {
            title,
            description,
            latitude,
            longitude,
            issueType,
            userId,
            imageBlobId: imageBlobId ?? null,
            // Production: issues require moderation queue before becoming visible
            authorized: IssueAuthorized.FALSE,
            error: IssueError.PENDING,
        },
    });
    return issue;
}
export async function createGuestIssue(title, description, latitude, longitude, issueType, guestTokenId, imageBlobId) {
    const issue = await prisma.issue.create({
        data: {
            title,
            description,
            latitude,
            longitude,
            issueType,
            guestTokenId,
            userId: -1,
            imageBlobId: imageBlobId ?? null,
            // Production: issues require moderation queue before becoming visible
            authorized: IssueAuthorized.FALSE,
            error: IssueError.PENDING,
        },
    });
    return issue;
}
export async function updateIssueImage(issueId, imageBlobId) {
    const issue = await prisma.issue.update({ where: { id: issueId }, data: { imageBlobId } });
    return issue;
}
export async function updateIssueStatus(issueId, status) {
    const issue = await prisma.issue.update({ where: { id: issueId }, data: { status } });
    return issue;
}
export async function authorizeIssue(issueId) {
    const issue = await prisma.issue.update({ where: { id: issueId }, data: { authorized: IssueAuthorized.TRUE } });
    return issue;
}
export async function flagIssueError(issueId, error) {
    const issue = await prisma.issue.update({ where: { id: issueId }, data: { error } });
    return issue;
}
export async function deleteIssue(issueId) {
    const existing = await prisma.issue.findUnique({ where: { id: issueId } });
    if (!existing)
        return null;
    // collect related comment ids so we can delete comment upvotes first
    const comments = await prisma.comment.findMany({ where: { issueId }, select: { id: true } });
    const commentIds = comments.map((c) => c.id);
    await prisma.$transaction([
        prisma.commentUpvote.deleteMany({ where: { commentId: { in: commentIds } } }),
        prisma.comment.deleteMany({ where: { issueId } }),
        prisma.issueUpvote.deleteMany({ where: { issueId } }),
        prisma.issueResolutionVote.deleteMany({ where: { issueId } }),
        prisma.issue.delete({ where: { id: issueId } }),
    ]);
    return existing;
}
// Issue Retrieval (Filtering and Map)
export async function getIssueById(issueId) {
    const issue = await prisma.issue.findUnique({
        where: { id: issueId },
        include: {
            user: { select: { id: true, name: true, email: true } },
            guestToken: { select: { id: true, token: true } },
            _count: { select: { upvotes: true, comments: true } },
        },
    });
    return issue;
}
// TODO: Change this to use postGIS (done)
export async function getIssuesByLocationBox(minLat, maxLat, minLng, maxLng, filters) {
    return await prisma.issue.findMany({
        where: {
            latitude: { gte: minLat, lte: maxLat },
            longitude: { gte: minLng, lte: maxLng },
            ...(filters?.type && { issueType: filters.type }),
            ...(filters?.status && { status: filters.status }),
        },
        include: {
            _count: { select: { upvotes: true, comments: true } },
        },
        orderBy: { createdAt: "desc" },
    });
}
export async function getIssuesByStatus(status) {
    const issues = await prisma.issue.findMany({ where: { status }, orderBy: { createdAt: 'desc' } });
    return issues;
}
export async function getIssuesByUser(userId) {
    const issues = await prisma.issue.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } });
    return issues;
}
export async function getIssuesByGuestToken(guestTokenId) {
    const issues = await prisma.issue.findMany({ where: { guestTokenId }, orderBy: { createdAt: 'desc' } });
    return issues;
}
// Issue Interaction (Upvotes and Resolution)
export async function addIssueUpvote(userId, issueId) {
    const upvote = await prisma.issueUpvote.create({ data: { userId, issueId } });
    return upvote;
}
export async function removeIssueUpvote(userId, issueId) {
    const res = await prisma.issueUpvote.deleteMany({ where: { userId, issueId } });
    return res.count > 0;
}
export async function getIssueUpvoteCount(issueId) {
    const count = await prisma.issueUpvote.count({ where: { issueId } });
    return count;
}
export async function hasUserUpvotedIssue(userId, issueId) {
    const count = await prisma.issueUpvote.count({ where: { userId, issueId } });
    return count > 0;
}
export async function submitResolutionVote(userId, issueId, isResolved) {
    const vote = await prisma.issueResolutionVote.upsert({
        where: { issueId_userId: { issueId, userId } },
        create: { issueId, userId, isResolved },
        update: { isResolved },
    });
    return vote;
}
export async function getResolutionVoteTally(issueId) {
    const [trueCount, falseCount] = await prisma.$transaction([
        prisma.issueResolutionVote.count({ where: { issueId, isResolved: true } }),
        prisma.issueResolutionVote.count({ where: { issueId, isResolved: false } }),
    ]);
    return { trueCount, falseCount };
}
// Comments
export async function addComment(userId, issueId, content) {
    const comment = await prisma.comment.create({ data: { userId, issueId, content } });
    return comment;
}
export async function getCommentsForIssue(issueId) {
    const comments = await prisma.comment.findMany({
        where: { issueId },
        orderBy: { createdAt: 'asc' },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    credibility: true,
                    badges: { select: { name: true }, orderBy: { awardedAt: 'asc' } },
                },
            },
            upvotes: { select: { id: true, userId: true } },
        },
    });
    return comments;
}
export async function deleteComment(commentId) {
    const existing = await prisma.comment.findUnique({ where: { id: commentId } });
    if (!existing)
        return null;
    await prisma.$transaction([
        prisma.commentUpvote.deleteMany({ where: { commentId } }),
        prisma.comment.delete({ where: { id: commentId } }),
    ]);
    return existing;
}
export async function flagComment(commentId, reason) {
    const comment = await prisma.comment.update({ where: { id: commentId }, data: { isFlagged: true, flaggedReason: reason ?? null } });
    return comment;
}
export async function addCommentUpvote(userId, commentId) {
    const upvote = await prisma.commentUpvote.create({ data: { userId, commentId } });
    return upvote;
}
export async function removeCommentUpvote(userId, commentId) {
    const res = await prisma.commentUpvote.deleteMany({ where: { userId, commentId } });
    return res.count > 0;
}
export default {
    createAuthenticatedIssue,
    createGuestIssue,
    updateIssueImage,
    updateIssueStatus,
    authorizeIssue,
    flagIssueError,
    deleteIssue,
    getIssueById,
    getIssuesByLocationBox,
    getIssuesByStatus,
    getIssuesByUser,
    getIssuesByGuestToken,
    addIssueUpvote,
    removeIssueUpvote,
    getIssueUpvoteCount,
    hasUserUpvotedIssue,
    submitResolutionVote,
    getResolutionVoteTally,
    addComment,
    getCommentsForIssue,
    deleteComment,
    flagComment,
    addCommentUpvote,
    removeCommentUpvote,
};
//# sourceMappingURL=issue.js.map