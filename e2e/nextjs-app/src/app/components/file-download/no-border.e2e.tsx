"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";
import { generateFileItems } from "./common";

const FILE_ITEMS = generateFileItems();

export default function Story() {
    return (
        <FileDownload
            data-testid="file-download-no-border"
            title="No border"
            description="This variant uses no-border style"
            styleType="no-border"
            fileItems={FILE_ITEMS}
            onDownload={() => {}}
        />
    );
}
