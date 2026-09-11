"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";

import { generateFileItems } from "./common";

const FILE_ITEMS = generateFileItems([
    {
        ariaLabel: "View document.pdf",
    },
]);

/*
 * The focus ring is the reason this story exists, and no-border is the variant
 * where it is at risk. FileDownload renders its cards inside DashedBorder, whose
 * root clips overflow unconditionally; the padding that would keep an outline
 * drawn outside the card's border edge inside that clip box belongs to the
 * bordered container only. So an outline-offset of 0 is visible in the bordered
 * story and clipped here. Custom click covers the bordered case — this covers
 * the one that can regress silently.
 */
export default function Story() {
    return (
        <FileDownload
            data-testid="file-download"
            title="No border, separate preview and download"
            description="The card is clickable and the container has no padding"
            styleType="no-border"
            fileItems={FILE_ITEMS}
            onDownload={() => {}}
            onClick={() => {}}
        />
    );
}
