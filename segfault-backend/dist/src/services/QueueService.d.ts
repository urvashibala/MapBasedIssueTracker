interface ModerationTask {
    issueId: number;
    blobUrl: string;
    latitude: number;
    longitude: number;
    issueType: string;
}
export declare function sendToModerationQueue(task: ModerationTask): Promise<boolean>;
declare const _default: {
    sendToModerationQueue: typeof sendToModerationQueue;
};
export default _default;
//# sourceMappingURL=QueueService.d.ts.map