"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";

const FILE_ITEMS = [
    {
        id: "file-1",
        name: "pdf-no-thumbnail.pdf",
        mimeType: "application/pdf",
        size: 2621440,
        filePath: "/files/pdf-no-thumbnail.pdf",
    },
    {
        id: "file-2",
        name: "image-no-thumbnail.png",
        mimeType: "image/png",
        size: 524288,
        filePath: "/files/image-no-thumbnail.png",
    },
    {
        id: "file-3",
        name: "document.doc",
        mimeType: "application/msword",
        size: 102400,
        filePath: "/files/document.doc",
    },
];

export default function Story() {
    return (
        <FileDownload
            data-testid="file-download"
            title="Thumbnail fallbacks"
            description="PDF badge, then no preview for an image and a doc without thumbnails"
            fileItems={FILE_ITEMS}
            onDownload={() => {}}
        />
    );
}
