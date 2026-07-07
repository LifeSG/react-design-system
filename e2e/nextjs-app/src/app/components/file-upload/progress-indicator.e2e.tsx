"use client";

import type { FileItemProps } from "@lifesg/react-design-system/file-upload";
import { FileUpload } from "@lifesg/react-design-system/file-upload";

const FILE_ITEMS: FileItemProps[] = [
    {
        id: "progress-1",
        name: "uploading-image.jpg",
        size: 5000,
        type: "image/jpeg",
        progress: 0.5,
    },
];

export default function Story() {
    return (
        <div className="story-background">
            <FileUpload
                data-testid="file-upload"
                title="Progress indicator"
                description="Static example of an in-progress file upload."
                warning={
                    <>
                        Maximum size per file: 2 MB
                        <br />
                        Supported file types: .JPG, .JPEG, .PNG
                    </>
                }
                fileItems={FILE_ITEMS}
            />
        </div>
    );
}
