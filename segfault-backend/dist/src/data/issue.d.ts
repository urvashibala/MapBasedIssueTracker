import { IssueStatus, IssueType, IssueAuthorized, IssueError } from "../generated/prisma/enums";
export declare function createAuthenticatedIssue(title: string, description: string, latitude: number, longitude: number, issueType: IssueType, userId: number, imageBlobId?: string): Promise<{
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
}>;
export declare function createGuestIssue(title: string, description: string, latitude: number, longitude: number, issueType: IssueType, guestTokenId: number, imageBlobId?: string): Promise<{
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
}>;
export declare function updateIssueImage(issueId: number, imageBlobId: string): Promise<{
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
}>;
export declare function updateIssueStatus(issueId: number, status: IssueStatus): Promise<{
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
}>;
export declare function authorizeIssue(issueId: number): Promise<{
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
}>;
export declare function flagIssueError(issueId: number, error: IssueError): Promise<{
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
}>;
export declare function deleteIssue(issueId: number): Promise<{
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
} | null>;
export declare function getIssueById(issueId: number): Promise<({
    user: {
        id: number;
        name: string | null;
        email: string;
    };
    guestToken: {
        id: number;
        token: string;
    } | null;
    _count: {
        comments: number;
        upvotes: number;
    };
} & {
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
}) | null>;
export declare function getIssuesByLocationBox(minLat: number, maxLat: number, minLng: number, maxLng: number, filters?: {
    type?: IssueType;
    status?: IssueStatus;
}): Promise<({
    _count: {
        comments: number;
        upvotes: number;
    };
} & {
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
})[]>;
export declare function getIssuesByStatus(status: IssueStatus): Promise<{
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
}[]>;
export declare function getIssuesByUser(userId: number): Promise<{
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
}[]>;
export declare function getIssuesByGuestToken(guestTokenId: number): Promise<{
    error: IssueError;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: IssueStatus;
    authorized: IssueAuthorized;
    createdAt: Date;
    updatedAt: Date;
    severity: number | null;
    imageBlobId: string | null;
    issueType: IssueType;
    id: number;
    userId: number;
    guestTokenId: number | null;
}[]>;
export declare function addIssueUpvote(userId: number, issueId: number): Promise<{
    createdAt: Date;
    id: number;
    userId: number;
    issueId: number;
}>;
export declare function removeIssueUpvote(userId: number, issueId: number): Promise<boolean>;
export declare function getIssueUpvoteCount(issueId: number): Promise<number>;
export declare function hasUserUpvotedIssue(userId: number, issueId: number): Promise<boolean>;
export declare function submitResolutionVote(userId: number, issueId: number, isResolved: boolean): Promise<{
    createdAt: Date;
    id: number;
    userId: number;
    issueId: number;
    isResolved: boolean;
}>;
export declare function getResolutionVoteTally(issueId: number): Promise<{
    trueCount: number;
    falseCount: number;
}>;
export declare function addComment(userId: number, issueId: number, content: string): Promise<{
    createdAt: Date;
    id: number;
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
    createdAt: Date;
    id: number;
    userId: number;
    content: string;
    issueId: number;
    isFlagged: boolean;
    flaggedReason: string | null;
    isSystemGenerated: boolean;
})[]>;
export declare function deleteComment(commentId: number): Promise<{
    createdAt: Date;
    id: number;
    userId: number;
    content: string;
    issueId: number;
    isFlagged: boolean;
    flaggedReason: string | null;
    isSystemGenerated: boolean;
} | null>;
export declare function flagComment(commentId: number, reason: string | null): Promise<{
    createdAt: Date;
    id: number;
    userId: number;
    content: string;
    issueId: number;
    isFlagged: boolean;
    flaggedReason: string | null;
    isSystemGenerated: boolean;
}>;
export declare function addCommentUpvote(userId: number, commentId: number): Promise<{
    createdAt: Date;
    id: number;
    userId: number;
    commentId: number;
}>;
export declare function removeCommentUpvote(userId: number, commentId: number): Promise<boolean>;
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