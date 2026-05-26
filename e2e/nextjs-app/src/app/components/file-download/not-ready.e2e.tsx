"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";
import { generateFileItems } from "./common";

const FILE_ITEMS = generateFileItems([
    { ready: false },
    { ready: false },
    { ready: true },
]);

export default function Story() {
    return (
        <FileDownload
            data-testid="file-download"
            title="Not-ready"
            description="Some files are still processing"
            fileItems={FILE_ITEMS}
            onDownload={() => {}}
        />
    );
}
