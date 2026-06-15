"use client";
import { ESignature } from "@lifesg/react-design-system/e-signature";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <ESignature
                data-testid="esig-loading"
                loadingProgress={0.45}
                loadingLabel="Uploading..."
            />
            <ESignature
                data-testid="esig-loading-complete"
                loadingProgress={1}
                loadingLabel="Upload complete"
            />
        </div>
    );
}
