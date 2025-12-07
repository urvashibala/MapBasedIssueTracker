export declare const UserRole: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
    readonly GUEST: "GUEST";
    readonly PIGS: "PIGS";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const IssueStatus: {
    readonly PENDING: "PENDING";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly RESOLVED: "RESOLVED";
};
export type IssueStatus = (typeof IssueStatus)[keyof typeof IssueStatus];
export declare const IssueAuthorized: {
    readonly TRUE: "TRUE";
    readonly FALSE: "FALSE";
};
export type IssueAuthorized = (typeof IssueAuthorized)[keyof typeof IssueAuthorized];
export declare const IssueError: {
    readonly NONE: "NONE";
    readonly INVALID_LOCATION: "INVALID_LOCATION";
    readonly INAPPROPRIATE_CONTENT: "INAPPROPRIATE_CONTENT";
    readonly PENDING: "PENDING";
};
export type IssueError = (typeof IssueError)[keyof typeof IssueError];
export declare const IssueType: {
    readonly POTHOLE: "POTHOLE";
    readonly ROAD_DAMAGE: "ROAD_DAMAGE";
    readonly STREETLIGHT_FAULT: "STREETLIGHT_FAULT";
    readonly GARBAGE_UNCOLLECTED: "GARBAGE_UNCOLLECTED";
    readonly ILLEGAL_DUMPING: "ILLEGAL_DUMPING";
    readonly DRAINAGE_BLOCKED: "DRAINAGE_BLOCKED";
    readonly SEWAGE_OVERFLOW: "SEWAGE_OVERFLOW";
    readonly WATER_SUPPLY_ISSUE: "WATER_SUPPLY_ISSUE";
    readonly LOW_WATER_PRESSURE: "LOW_WATER_PRESSURE";
    readonly OPEN_MANHOLE: "OPEN_MANHOLE";
    readonly BROKEN_FOOTPATH: "BROKEN_FOOTPATH";
    readonly ILLEGAL_ENCROACHMENT: "ILLEGAL_ENCROACHMENT";
    readonly STRAY_CATTLE: "STRAY_CATTLE";
    readonly TREE_FALL: "TREE_FALL";
    readonly TRAFFIC_LIGHT_FAULT: "TRAFFIC_LIGHT_FAULT";
    readonly MOSQUITO_BREEDING: "MOSQUITO_BREEDING";
    readonly NOISE_COMPLAINT: "NOISE_COMPLAINT";
    readonly BUILDING_SAFETY: "BUILDING_SAFETY";
};
export type IssueType = (typeof IssueType)[keyof typeof IssueType];
export declare const NotificationType: {
    readonly ISSUE_STATUS_UPDATE: "ISSUE_STATUS_UPDATE";
    readonly NEW_COMMENT: "NEW_COMMENT";
    readonly GENERAL: "GENERAL";
    readonly BAN_NOTICE: "BAN_NOTICE";
    readonly REMOVAL_NOTICE: "REMOVAL_NOTICE";
    readonly UPVOTE_RECEIVED: "UPVOTE_RECEIVED";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
//# sourceMappingURL=enums.d.ts.map