"use client";

import type { FileItemProps } from "@lifesg/react-design-system/file-upload";
import { FileUpload } from "@lifesg/react-design-system/file-upload";
import { useState } from "react";

const LONG_DESCRIPTION =
    "Thisisaverylongwordwithnospacesthatshouldbewrappedcorrectlywithinthecontainerwithoutverhangingorbreakinglayout";

const NORMAL_DESCRIPTION =
    "A person walking persuasively beside a tree on a sunny afternoon";

const INITIAL_ITEMS: FileItemProps[] = [
    {
        id: "editable-image",
        name: "editable-image.jpg",
        size: 5120,
        type: "image/jpeg",
        thumbnailImageDataUrl: "/sample.jpg",
        description: LONG_DESCRIPTION,
    },
    {
        id: "editable-image-2",
        name: "editable-image-2.jpg",
        size: 5120,
        type: "image/jpeg",
        thumbnailImageDataUrl: "/sample.jpg",
        description: NORMAL_DESCRIPTION,
    },
];

export default function Story() {
    const [fileItems, setFileItems] = useState<FileItemProps[]>(INITIAL_ITEMS);

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
            title="Long description text"
            description="File item with a very long unbreakable description string."
            fileItems={fileItems}
            editableFileItems
            fileDescriptionMaxLength={200}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
}
