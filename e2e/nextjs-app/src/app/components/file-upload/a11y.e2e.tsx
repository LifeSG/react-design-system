"use client";

import { FileUpload } from "@lifesg/react-design-system/file-upload";

export default function Story() {
    return (
        <FileUpload
            title="Upload supporting files"
            description="Include receipts and supporting documents."
            fileItems={[
                {
                    id: "uploading",
                    name: "supporting-document.pdf",
                    type: "application/pdf",
                    size: 2048,
                    progress: 0.25,
                },
                {
                    id: "completed",
                    name: "receipt.pdf",
                    type: "application/pdf",
                    size: 1024,
                    progress: 1,
                },
            ]}
        />
    );
}
