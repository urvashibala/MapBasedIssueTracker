import { IssueStatus, IssueType, IssueAuthorized, IssueError } from "../generated/prisma/enums";
export declare function createAuthenticatedIssue(title: string, description: string, latitude: number, longitude: number, issueType: IssueType, userId: number, imageBlobId?: string): Promise<{
    _count: {
        upvotes: number;
        comments: number;
    };
    user: {
        id: number;
        name: string | null;
        email: string | null;
    } | null;
    guestToken: {
        id: number;
        token: string;
    } | null;
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: string;
    authorized: string;
    error: string;
    createdAt: Date;
    updatedAt: Date;
    imageBlobId: string | null;
    severity: number | null;
    userId: number;
    guestTokenId: number | null;
    issueType: string;
    user_id: number | null;
    user_name: string | null;
    user_email: string | null;
    upvote_count: number;
    comment_count: number;
} | null>;
export declare function createGuestIssue(title: string, description: string, latitude: number, longitude: number, issueType: IssueType, guestTokenId: number, imageBlobId?: string): Promise<{
    _count: {
        upvotes: number;
        comments: number;
    };
    user: {
        id: number;
        name: string | null;
        email: string | null;
    } | null;
    guestToken: {
        id: number;
        token: string;
    } | null;
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: string;
    authorized: string;
    error: string;
    createdAt: Date;
    updatedAt: Date;
    imageBlobId: string | null;
    severity: number | null;
    userId: number;
    guestTokenId: number | null;
    issueType: string;
    user_id: number | null;
    user_name: string | null;
    user_email: string | null;
    upvote_count: number;
    comment_count: number;
} | null>;
export declare function updateIssueImage(issueId: number, imageBlobId: string): Promise<{
    error: IssueError;
    guestTokenId: number | null;
    id: number;
    title: string;
    description: string;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    userId: number;
    issueType: IssueType;
}>;
export declare function updateIssueStatus(issueId: number, status: IssueStatus): Promise<{
    error: IssueError;
    guestTokenId: number | null;
    id: number;
    title: string;
    description: string;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    userId: number;
    issueType: IssueType;
}>;
export declare function authorizeIssue(issueId: number): Promise<{
    error: IssueError;
    guestTokenId: number | null;
    id: number;
    title: string;
    description: string;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    userId: number;
    issueType: IssueType;
}>;
export declare function flagIssueError(issueId: number, error: IssueError): Promise<{
    error: IssueError;
    guestTokenId: number | null;
    id: number;
    title: string;
    description: string;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    userId: number;
    issueType: IssueType;
}>;
export declare function deleteIssue(issueId: number): Promise<{
    error: IssueError;
    guestTokenId: number | null;
    id: number;
    title: string;
    description: string;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    userId: number;
    issueType: IssueType;
} | null>;
export declare function getIssueById(issueId: number): Promise<{
    _count: {
        upvotes: number;
        comments: number;
    };
    user: {
        id: number;
        name: string | null;
        email: string | null;
    } | null;
    guestToken: {
        id: number;
        token: string;
    } | null;
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: string;
    authorized: string;
    error: string;
    createdAt: Date;
    updatedAt: Date;
    imageBlobId: string | null;
    severity: number | null;
    userId: number;
    guestTokenId: number | null;
    issueType: string;
    user_id: number | null;
    user_name: string | null;
    user_email: string | null;
    upvote_count: number;
    comment_count: number;
} | null>;
export declare function getIssuesByLocationBox(minLat: number, maxLat: number, minLng: number, maxLng: number, filters?: {
    type?: IssueType;
    status?: IssueStatus;
}): Promise<{
    _count: {
        upvotes: number;
        comments: number;
    };
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: string;
    issueType: string;
    createdAt: Date;
    upvote_count: number;
    comment_count: number;
}[]>;
export declare function getIssuesWithinDistance(centerLat: number, centerLng: number, distanceMeters: number, filters?: {
    type?: IssueType;
    status?: IssueStatus;
}): Promise<{
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    distance_meters: number;
    status: string;
    issueType: string;
    createdAt: Date;
}[]>;
export declare function addIssueUpvote(userId: number, issueId: number): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    issueId: number;
}>;
export declare function removeIssueUpvote(userId: number, issueId: number): Promise<boolean>;
export declare function getIssueUpvoteCount(issueId: number): Promise<number>;
export declare function hasUserUpvotedIssue(userId: number, issueId: number): Promise<boolean>;
export declare function submitResolutionVote(userId: number, issueId: number, isResolved: boolean): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    issueId: number;
    isResolved: boolean;
}>;
export declare function getResolutionVoteTally(issueId: number): Promise<{
    trueCount: number;
    falseCount: number;
}>;
export declare function addComment(userId: number, issueId: number, content: string): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    content: string;
    issueId: number;
    isFlagged: boolean;
    flaggedReason: string | null;
    isSystemGenerated: boolean;
}>;
export declare function getCommentsForIssue(issueId: number): Promise<({
    user: {
        id: number;
        name: string | null;
        credibility: number;
        badges: {
            name: string;
        }[];
    };
    upvotes: {
        id: number;
        userId: number;
    }[];
} & {
    id: number;
    createdAt: Date;
    userId: number;
    content: string;
    issueId: number;
    isFlagged: boolean;
    flaggedReason: string | null;
    isSystemGenerated: boolean;
})[]>;
export declare function deleteComment(commentId: number): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    content: string;
    issueId: number;
    isFlagged: boolean;
    flaggedReason: string | null;
    isSystemGenerated: boolean;
} | null>;
export declare function flagComment(commentId: number, reason: string | null): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    content: string;
    issueId: number;
    isFlagged: boolean;
    flaggedReason: string | null;
    isSystemGenerated: boolean;
}>;
export declare function addCommentUpvote(userId: number, commentId: number): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    commentId: number;
}>;
export declare function removeCommentUpvote(userId: number, commentId: number): Promise<boolean>;
export declare function getIssuesByUser(userId: number): Promise<{
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: string;
    issueType: string;
    createdAt: Date;
    imageBlobId: string | null;
}[]>;
export declare function getIssuesByStatus(status: IssueStatus): Promise<{
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: string;
    issueType: string;
    createdAt: Date;
    imageBlobId: string | null;
}[]>;
export declare function getIssuesByGuestToken(guestTokenId: number): Promise<{
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: string;
    issueType: string;
    createdAt: Date;
    imageBlobId: string | null;
}[]>;
declare const _default: {
    createAuthenticatedIssue: typeof createAuthenticatedIssue;
    createGuestIssue: typeof createGuestIssue;
    updateIssueImage: typeof updateIssueImage;
    updateIssueStatus: typeof updateIssueStatus;
    authorizeIssue: typeof authorizeIssue;
    flagIssueError: typeof flagIssueError;
    deleteIssue: typeof deleteIssue;
    getIssueById: typeof getIssueById;
    getIssuesByLocationBox: typeof getIssuesByLocationBox;
    getIssuesWithinDistance: typeof getIssuesWithinDistance;
    getIssuesByStatus: typeof getIssuesByStatus;
    getIssuesByUser: typeof getIssuesByUser;
    getIssuesByGuestToken: typeof getIssuesByGuestToken;
    addIssueUpvote: typeof addIssueUpvote;
    removeIssueUpvote: typeof removeIssueUpvote;
    getIssueUpvoteCount: typeof getIssueUpvoteCount;
    hasUserUpvotedIssue: typeof hasUserUpvotedIssue;
    submitResolutionVote: typeof submitResolutionVote;
    getResolutionVoteTally: typeof getResolutionVoteTally;
    addComment: typeof addComment;
    getCommentsForIssue: typeof getCommentsForIssue;
    deleteComment: typeof deleteComment;
    flagComment: typeof flagComment;
    addCommentUpvote: typeof addCommentUpvote;
    removeCommentUpvote: typeof removeCommentUpvote;
};
export default _default;
//# sourceMappingURL=issue.d.ts.map