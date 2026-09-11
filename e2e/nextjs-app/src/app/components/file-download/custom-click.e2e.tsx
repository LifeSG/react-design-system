"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";

import { generateFileItems, THUMBNAIL_BLUE } from "./common";

const FILE_ITEMS = generateFileItems([
    {
        thumbnailImageDataUrl: THUMBNAIL_BLUE,
        ariaLabel: "View document.pdf",
    },
]);

export default function Story() {
    return (
        <FileDownload
            data-testid="file-download"
            title="Separate preview and download"
            description="The card and the button are two controls"
            fileItems={FILE_ITEMS}
            onDownload={() => {}}
            onClick={() => {}}
        />
    );
}
