"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";

import { generateFileItems, THUMBNAIL_BLUE } from "./common";

const FILE_ITEMS = generateFileItems([
    {
        thumbnailImageDataUrl: THUMBNAIL_BLUE,
        description: "Signed tenancy agreement for the unit.",
    },
    { description: "Quarterly report." },
]).slice(0, 2);

export default function Story() {
    const handleDownload = async () => {
        throw new Error("Download failed");
    };

    return (
        <FileDownload
            data-testid="file-download"
            title="With description error"
            description="Download the files below"
            fileItems={FILE_ITEMS}
            onDownload={handleDownload}
        />
    );
}
