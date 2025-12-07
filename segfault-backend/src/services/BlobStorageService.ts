import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";

const connectionString = process.env.STORAGE_CONNECTION_STRING || "";
const containerName = "images";

let containerClient: ContainerClient | null = null;

async function getContainerClient(): Promise<ContainerClient | null> {
    if (!connectionString) {
        console.warn("Azure Blob Storage connection string not configured.");
        return null;
    }

    if (!containerClient) {
        const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
        containerClient = blobServiceClient.getContainerClient(containerName);

        // Create container if it doesn't exist
        await containerClient.createIfNotExists({ access: "blob" });
    }

    return containerClient;
}

export interface UploadResult {
    blobUrl: string;
    blobName: string;
}

/**
 * Upload a file buffer to Azure Blob Storage
 * @param buffer - The file buffer to upload
 * @param originalName - Original filename (used for extension)
 * @returns The blob URL and blob name, or null if upload fails
 */
export async function uploadToBlob(buffer: Buffer, originalName: string): Promise<UploadResult | null> {
    const container = await getContainerClient();
    if (!container) {
        console.log("Blob storage not available, skipping upload...");
        return null;
    }

    try {
        // Generate unique blob name
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const extension = originalName.split(".").pop() || "jpg";
        const blobName = `${uniqueSuffix}.${extension}`;

        const blockBlobClient = container.getBlockBlobClient(blobName);

        // Upload buffer with content type
        await blockBlobClient.uploadData(buffer, {
            blobHTTPHeaders: {
                blobContentType: `image/${extension === "jpg" ? "jpeg" : extension}`,
            },
        });

        console.log(`Uploaded blob: ${blobName}`);

        return {
            blobUrl: blockBlobClient.url,
            blobName,
        };
    } catch (error) {
        console.error("Failed to upload to blob storage:", error);
        return null;
    }
}

/**
 * Delete a blob from Azure Blob Storage
 * @param blobName - The name of the blob to delete
 */
export async function deleteBlob(blobName: string): Promise<boolean> {
    const container = await getContainerClient();
    if (!container) return false;

    try {
        const blockBlobClient = container.getBlockBlobClient(blobName);
        await blockBlobClient.deleteIfExists();
        return true;
    } catch (error) {
        console.error("Failed to delete blob:", error);
        return false;
    }
}

export default { uploadToBlob, deleteBlob };
