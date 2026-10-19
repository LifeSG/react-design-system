"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";

import { generateFileItems, THUMBNAIL_BLUE } from "./common";

const FILE_ITEMS = generateFileItems([
    {
        thumbnailImageDataUrl: THUMBNAIL_BLUE,
        description: "Signed tenancy agreement for the unit.",
    },
    {
        description:
            "Quarterly report covering revenue, expenses and headcount across all departments, including notes on the variance against the forecast submitted at the start of the year.",
    },
    undefined,
]);

export default function Story() {
    return (
        <div className="story-background">
            <FileDownload
                data-testid="file-download"
                title="With description"
                description="Download the files below"
                descriptionLabel="File description"
                fileItems={FILE_ITEMS}
                onDownload={() => {}}
            />
        </div>
    );
}
