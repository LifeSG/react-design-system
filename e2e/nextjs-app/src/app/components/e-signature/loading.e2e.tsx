"use client";
import { ESignature } from "@lifesg/react-design-system/e-signature";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <ESignature
                data-testid="esig-loading"
                id="esig-loading"
                loadingProgress={45}
                loadingLabel="Uploading..."
            />
            <ESignature
                data-testid="esig-loading-complete"
                id="esig-loading-complete"
                loadingProgress={100}
                loadingLabel="Upload complete"
            />
        </div>
    );
}
