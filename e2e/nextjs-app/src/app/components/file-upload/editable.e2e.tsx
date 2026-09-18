"use client";

import type { FileItemProps } from "@lifesg/react-design-system/file-upload";
import { FileUpload } from "@lifesg/react-design-system/file-upload";
import { useRef, useState } from "react";

const THUMBNAIL_URL = "/sample.jpg";

const INITIAL_ITEMS: FileItemProps[] = [
    {
        id: "editable-image",
        name: "editable-image.jpg",
        size: 5120,
        type: "image/jpeg",
        thumbnailImageDataUrl: THUMBNAIL_URL,
    },
    {
        id: "described-image",
        name: "described-image.jpg",
        size: 3072,
        type: "image/jpeg",
        thumbnailImageDataUrl: THUMBNAIL_URL,
        description: "Already has a description",
    },
    {
        id: "another-image",
        name: "another-image.jpg",
        size: 2048,
        type: "image/jpeg",
        thumbnailImageDataUrl: THUMBNAIL_URL,
        description: "Another described image",
    },
];

export default function Story() {
    const nextId = useRef(0);
    const [fileItems, setFileItems] = useState<FileItemProps[]>(INITIAL_ITEMS);

    const handleChange = (files: File[]) => {
        const newItems = files.map((file) => {
            nextId.current += 1;
            return {
                id: `upload-file-${nextId.current}`,
                name: file.name,
                size: file.size,
                type: file.type,
            };
        });
        setFileItems((prev) => prev.concat(newItems));
    };

    const handleEdit = (updatedItem: FileItemProps) => {
        setFileItems((prevItems) =>
            prevItems.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            )
        );
    };

    const handleDelete = (deletedItem: FileItemProps) => {
        setFileItems((prevItems) =>
            prevItems.filter((item) => item.id !== deletedItem.id)
        );
    };

    return (
        <FileUpload
            data-testid="file-upload"
            title="Editable and sortable file items"
            description="Add a description, save it, and reopen edit mode. Sort is disabled while any item is in edit mode."
            fileItems={fileItems}
            editableFileItems
            sortable
            fileDescriptionMaxLength={200}
            onChange={handleChange}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onSort={setFileItems}
        />
    );
}
