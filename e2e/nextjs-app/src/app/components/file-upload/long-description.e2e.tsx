"use client";

import type { FileItemProps } from "@lifesg/react-design-system/file-upload";
import { FileUpload } from "@lifesg/react-design-system/file-upload";

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
    return (
        <FileUpload
            data-testid="file-upload"
            title="Long description text"
            description="File item with a very long unbreakable description string."
            fileItems={INITIAL_ITEMS}
            editableFileItems
            fileDescriptionMaxLength={200}
        />
    );
}
