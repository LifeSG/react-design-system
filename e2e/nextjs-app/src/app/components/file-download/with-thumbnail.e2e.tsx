"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";
import {
    THUMBNAIL_BLUE,
    THUMBNAIL_GREEN,
    THUMBNAIL_RED,
    generateFileItems,
} from "./common";

const FILE_ITEMS = generateFileItems([
    { thumbnailImageDataUrl: THUMBNAIL_BLUE },
    { thumbnailImageDataUrl: THUMBNAIL_GREEN },
    { thumbnailImageDataUrl: THUMBNAIL_RED },
]);

export default function Story() {
    return (
        <FileDownload
            data-testid="file-download"
            title="With thumbnails"
            description="Download the images below"
            fileItems={FILE_ITEMS}
            onDownload={() => {}}
        />
    );
}
