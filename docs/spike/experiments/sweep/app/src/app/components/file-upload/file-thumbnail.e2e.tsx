"use client";

import type { FileItemProps } from "@lifesg/react-design-system/file-upload";
import { FileUpload } from "@lifesg/react-design-system/file-upload";

const THUMBNAIL_URL = "/sample.jpg";

const FILE_ITEMS: FileItemProps[] = [
    {
        id: "pdf-icon",
        name: "document-icon.pdf",
        size: 2048,
        type: "application/pdf",
    },
    {
        id: "pdf-thumbnail",
        name: "document-thumbnail.pdf",
        size: 4096,
        type: "application/pdf",
        thumbnailImageDataUrl: THUMBNAIL_URL,
    },
    {
        id: "image-thumbnail",
        name: "photo-thumbnail.jpg",
        size: 5120,
        type: "image/jpeg",
        thumbnailImageDataUrl: THUMBNAIL_URL,
    },
];

export default function Story() {
    return (
        <FileUpload
            data-testid="file-upload"
            title="PDF and thumbnail"
            description="PDF files show icon fallback while provided thumbnails are used."
            fileItems={FILE_ITEMS}
        />
    );
}
