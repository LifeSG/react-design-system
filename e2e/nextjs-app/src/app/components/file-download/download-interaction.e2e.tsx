"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";
import { generateFileItems } from "./common";

export default function Story() {
    const handleDownload = () => new Promise<void>(() => {});

    return (
        <FileDownload
            data-testid="file-download"
            title="Download interaction"
            fileItems={generateFileItems()}
            onDownload={handleDownload}
        />
    );
}
