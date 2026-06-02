"use client";

import type { FileItemProps } from "@lifesg/react-design-system/file-upload";
import { FileUpload } from "@lifesg/react-design-system/file-upload";
import { useState } from "react";

const THUMBNAIL_URL =
    "https://fastly.picsum.photos/id/445/300/300.jpg?hmac=5O-DNt4KzxZfuV5dgp9fNb7_sc3Tg6ZKtH6Bv6oktOQ";

const INITIAL_ITEMS: FileItemProps[] = [
    {
        id: "sort-1",
        name: "first-file.jpg",
        size: 1024,
        type: "image/jpeg",
        thumbnailImageDataUrl: THUMBNAIL_URL,
    },
    {
        id: "sort-2",
        name: "second-file.jpg",
        size: 2048,
        type: "image/jpeg",
        thumbnailImageDataUrl: THUMBNAIL_URL,
    },
    {
        id: "sort-3",
        name: "third-file.jpg",
        size: 3072,
        type: "image/jpeg",
        thumbnailImageDataUrl: THUMBNAIL_URL,
    },
];

export default function Story() {
    const [fileItems, setFileItems] = useState<FileItemProps[]>(INITIAL_ITEMS);

    return (
        <FileUpload
            data-testid="file-upload"
            title="Sortable file items"
            description="Drag and drop to reorder files."
            fileItems={fileItems}
            sortable
            onSort={setFileItems}
        />
    );
}
