"use client";

import type { FileItemProps } from "@lifesg/react-design-system/file-upload";
import { FileUpload } from "@lifesg/react-design-system/file-upload";
import { useMemo, useState } from "react";

const INITIAL_ITEMS: FileItemProps[] = [
    {
        id: "sort-1",
        name: "first-file.jpg",
        size: 1024,
        type: "image/jpeg",
        thumbnailImageDataUrl:
            "https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",
    },
    {
        id: "sort-2",
        name: "second-file.jpg",
        size: 2048,
        type: "image/jpeg",
        thumbnailImageDataUrl:
            "https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",
    },
    {
        id: "sort-3",
        name: "third-file.jpg",
        size: 3072,
        type: "image/jpeg",
        thumbnailImageDataUrl:
            "https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",
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
