"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";
import { generateFileItems } from "./common";

export default function Story() {
    const handleDownload = async () => {
        throw new Error("Download failed");
    };

    return (
        <FileDownload
            data-testid="file-download"
            title="Download error"
            description="Download the files below"
            fileItems={generateFileItems()}
            onDownload={handleDownload}
        />
    );
}
