"use client";

import type { FileItemProps } from "@lifesg/react-design-system/file-upload";
import { FileUpload } from "@lifesg/react-design-system/file-upload";
import { useState } from "react";

const INITIAL_ITEMS: FileItemProps[] = [
    {
        id: "editable-image",
        name: "editable-image.jpg",
        size: 5120,
        type: "image/jpeg",
        thumbnailImageDataUrl: "/sample.jpg",
    },
];

export default function Story() {
    const [fileItems, setFileItems] = useState<FileItemProps[]>(INITIAL_ITEMS);

    const handleEdit = (updatedItem: FileItemProps) => {
        setFileItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === updatedItem.id) {
                    return updatedItem;
                }

                return item;
            });
        });
    };

    const handleDelete = (deletedItem: FileItemProps) => {
        setFileItems((prevItems) => {
            return prevItems.filter((item) => item.id !== deletedItem.id);
        });
    };

    return (
        <FileUpload
            data-testid="file-upload"
            title="Editable file items (optional)"
            fileItems={fileItems}
            editableFileItems
            descriptionRequired={false}
            fileDescriptionMaxLength={200}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
}
