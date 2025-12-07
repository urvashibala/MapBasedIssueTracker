import { QueueClient } from "@azure/storage-queue";
const connectionString = process.env.STORAGE_CONNECTION_STRING || "";
const queueName = "issue-queue";
let queueClient = null;
function getQueueClient() {
    if (!connectionString) {
        console.warn("Azure Storage connection string not configured. Queue disabled.");
        return null;
    }
    if (!queueClient) {
        queueClient = new QueueClient(connectionString, queueName);
    }
    return queueClient;
}
export async function sendToModerationQueue(task) {
    const client = getQueueClient();
    if (!client) {
        console.log("Moderation queue not available, skipping...");
        return false;
    }
    try {
        const message = Buffer.from(JSON.stringify(task)).toString("base64");
        await client.sendMessage(message);
        console.log(`Sent issue ${task.issueId} to moderation queue`);
        return true;
    }
    catch (error) {
        console.error("Failed to send to moderation queue:", error);
        return false;
    }
}
export default { sendToModerationQueue };
//# sourceMappingURL=QueueService.js.map