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
export declare function uploadToBlob(buffer: Buffer, originalName: string): Promise<UploadResult | null>;
/**
 * Delete a blob from Azure Blob Storage
 * @param blobName - The name of the blob to delete
 */
export declare function deleteBlob(blobName: string): Promise<boolean>;
declare const _default: {
    uploadToBlob: typeof uploadToBlob;
    deleteBlob: typeof deleteBlob;
};
export default _default;
//# sourceMappingURL=BlobStorageService.d.ts.map