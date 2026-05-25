"use client";

import type { FileItemProps } from "@lifesg/react-design-system/file-upload";
import { FileUpload } from "@lifesg/react-design-system/file-upload";

const READONLY_FILE_ITEMS: FileItemProps[] = [
    {
        id: "readonly-file",
        name: "readonly-image.jpg",
        size: 1024,
        type: "image/jpeg",
        description: "Readonly file description",
    },
];

const DISABLED_FILE_ITEMS: FileItemProps[] = [
    {
        id: "disabled-file",
        name: "disabled-document.pdf",
        size: 2048,
        type: "application/pdf",
    },
];

const ERROR_FILE_ITEMS: FileItemProps[] = [
    {
        id: "error-file",
        name: "failed-upload.pdf",
        size: 3072,
        type: "application/pdf",
        errorMessage: "Upload failed",
    },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <FileUpload
                data-testid="file-upload-readonly"
                title="Readonly state"
                description="File actions are hidden in readonly mode."
                fileItems={READONLY_FILE_ITEMS}
                readOnly
            />

            <FileUpload
                data-testid="file-upload-disabled"
                title="Disabled state"
                description="Upload and item actions are disabled."
                fileItems={DISABLED_FILE_ITEMS}
                disabled
            />

            <FileUpload
                data-testid="file-upload-error"
                title="Error state"
                description="Failed uploads show both item and component errors."
                fileItems={ERROR_FILE_ITEMS}
                errorMessage="Please re-upload your file"
            />
        </div>
    );
}
