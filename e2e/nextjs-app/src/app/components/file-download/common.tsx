type FileItemOverride = {
    ready?: boolean;
    errorMessage?: string;
    thumbnailImageDataUrl?: string;
};

const BASE_FILE_ITEMS = [
    {
        id: "file-1",
        name: "document.pdf",
        mimeType: "application/pdf",
        size: 2621440,
        filePath: "/files/document.pdf",
    },
    {
        id: "file-2",
        name: "report.docx",
        mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        size: 524288,
        filePath: "/files/report.docx",
    },
    {
        id: "file-3",
        name: "spreadsheet.xlsx",
        mimeType:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        size: 102400,
        filePath: "/files/spreadsheet.xlsx",
    },
];

export function generateFileItems(
    overrides?: Array<FileItemOverride | undefined>
) {
    return BASE_FILE_ITEMS.map((item, index) => ({
        ...item,
        ...overrides?.[index],
    }));
}

// Pre-computed 1x1 pixel PNG data URIs
export const THUMBNAIL_BLUE =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==";
export const THUMBNAIL_GREEN =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
export const THUMBNAIL_RED =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwADhQGAWjR9awAAAABJRU5ErkJggg==";
