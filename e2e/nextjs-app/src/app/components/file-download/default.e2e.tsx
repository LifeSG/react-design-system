"use client";

import { FileDownload } from "@lifesg/react-design-system/file-download";
import { generateFileItems } from "./common";

export default function Story() {
    return (
        <div className="story-background">
            <FileDownload
                data-testid="file-download"
                title="Default"
                description="Download description goes here."
                fileItems={generateFileItems()}
                onDownload={() => {}}
            />
        </div>
    );
}
