/**
 * Unit Tests for Blob Storage Service
 * Tests URL generation and validation logic
 */

const AZURE_STORAGE_ACCOUNT = 'segfaultstorage3103';
const AZURE_CONTAINER_NAME = 'images';
const STORAGE_BASE_URL = `https://${AZURE_STORAGE_ACCOUNT}.blob.core.windows.net/${AZURE_CONTAINER_NAME}`;

// Utility functions for testing
function generateBlobUrl(blobId: string): string {
    return `${STORAGE_BASE_URL}/${blobId}`;
}

function isValidBlobId(blobId: string): boolean {
    if (!blobId || blobId.length === 0) return false;
    // Blob IDs should not contain path traversal or special characters
    if (blobId.includes('..') || blobId.includes('/') || blobId.includes('\\')) return false;
    // Should be alphanumeric with allowed extensions
    return /^[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+$/.test(blobId);
}

function generateBlobId(originalFileName: string): string {
    const extension = originalFileName.split('.').pop()?.toLowerCase() || 'jpg';
    const timestamp = Date.now();
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomPart}.${extension}`;
}

describe('Blob Storage Service', () => {
    describe('generateBlobUrl', () => {
        it('should generate correct URL format', () => {
            const url = generateBlobUrl('image123.jpg');
            expect(url).toBe('https://segfaultstorage3103.blob.core.windows.net/images/image123.jpg');
        });

        it('should preserve the blob ID in URL', () => {
            const blobId = 'test-file-123.png';
            const url = generateBlobUrl(blobId);
            expect(url.endsWith(blobId)).toBe(true);
        });

        it('should use HTTPS protocol', () => {
            const url = generateBlobUrl('anyfile.jpg');
            expect(url.startsWith('https://')).toBe(true);
        });

        it('should include correct storage account', () => {
            const url = generateBlobUrl('anyfile.jpg');
            expect(url).toContain(AZURE_STORAGE_ACCOUNT);
        });

        it('should include correct container', () => {
            const url = generateBlobUrl('anyfile.jpg');
            expect(url).toContain(AZURE_CONTAINER_NAME);
        });
    });

    describe('isValidBlobId', () => {
        it('should accept valid blob IDs', () => {
            expect(isValidBlobId('image123.jpg')).toBe(true);
            expect(isValidBlobId('test-file.png')).toBe(true);
            expect(isValidBlobId('photo_2024.jpeg')).toBe(true);
        });

        it('should reject empty blob IDs', () => {
            expect(isValidBlobId('')).toBe(false);
        });

        it('should reject path traversal attempts', () => {
            expect(isValidBlobId('../etc/passwd')).toBe(false);
            expect(isValidBlobId('..\\windows\\system32')).toBe(false);
        });

        it('should reject forward slashes', () => {
            expect(isValidBlobId('folder/file.jpg')).toBe(false);
        });

        it('should reject backslashes', () => {
            expect(isValidBlobId('folder\\file.jpg')).toBe(false);
        });

        it('should reject files without extension', () => {
            expect(isValidBlobId('noextension')).toBe(false);
        });

        it('should accept alphanumeric IDs with dashes and underscores', () => {
            expect(isValidBlobId('a1b2c3.jpg')).toBe(true);
            expect(isValidBlobId('file-name_123.png')).toBe(true);
        });
    });

    describe('generateBlobId', () => {
        it('should generate unique IDs', () => {
            const id1 = generateBlobId('photo.jpg');
            const id2 = generateBlobId('photo.jpg');
            expect(id1).not.toBe(id2);
        });

        it('should preserve file extension', () => {
            const jpgId = generateBlobId('photo.jpg');
            const pngId = generateBlobId('image.png');
            expect(jpgId.endsWith('.jpg')).toBe(true);
            expect(pngId.endsWith('.png')).toBe(true);
        });

        it('should lowercase the extension', () => {
            const id = generateBlobId('photo.JPG');
            expect(id.endsWith('.jpg')).toBe(true);
        });

        it('should handle files without extension', () => {
            const id = generateBlobId('noext');
            // Files without proper extension get 'noext' as extension from split('.').pop()
            expect(id.endsWith('.noext')).toBe(true);
        });

        it('should include timestamp in ID', () => {
            const before = Date.now();
            const id = generateBlobId('photo.jpg');
            const after = Date.now();
            
            const timestampPart = parseInt(id.split('-')[0]);
            expect(timestampPart).toBeGreaterThanOrEqual(before);
            expect(timestampPart).toBeLessThanOrEqual(after);
        });

        it('should be a valid blob ID format', () => {
            const id = generateBlobId('photo.jpg');
            expect(isValidBlobId(id)).toBe(true);
        });
    });

    describe('URL Security', () => {
        it('should not allow special characters in blob URL', () => {
            const maliciousBlobId = '<script>alert("xss")</script>.jpg';
            expect(isValidBlobId(maliciousBlobId)).toBe(false);
        });

        it('should not allow query parameters in blob ID', () => {
            const blobIdWithQuery = 'file.jpg?sas=token';
            expect(isValidBlobId(blobIdWithQuery)).toBe(false);
        });

        it('should not allow URL encoding attempts', () => {
            const encodedBlobId = 'file%2F..%2Fetc.jpg';
            expect(isValidBlobId(encodedBlobId)).toBe(false);
        });
    });

    describe('Supported File Types', () => {
        const supportedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        
        supportedExtensions.forEach(ext => {
            it(`should generate valid ID for .${ext} files`, () => {
                const id = generateBlobId(`photo.${ext}`);
                expect(id.endsWith(`.${ext}`)).toBe(true);
                expect(isValidBlobId(id)).toBe(true);
            });
        });
    });
});

describe('Storage Configuration', () => {
    it('should have valid storage account name', () => {
        expect(AZURE_STORAGE_ACCOUNT).toBeTruthy();
        expect(AZURE_STORAGE_ACCOUNT.length).toBeGreaterThan(0);
    });

    it('should have valid container name', () => {
        expect(AZURE_CONTAINER_NAME).toBeTruthy();
        expect(AZURE_CONTAINER_NAME.length).toBeGreaterThan(0);
    });

    it('should form valid base URL', () => {
        const urlPattern = /^https:\/\/[a-z0-9]+\.blob\.core\.windows\.net\/[a-z0-9]+$/;
        expect(STORAGE_BASE_URL).toMatch(urlPattern);
    });
});
