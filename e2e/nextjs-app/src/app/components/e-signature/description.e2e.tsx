"use client";
import { ESignature } from "@lifesg/react-design-system/e-signature";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <ESignature
                data-testid="esig-with-description"
                description="Please sign above to confirm your agreement."
            />
        </div>
    );
}
