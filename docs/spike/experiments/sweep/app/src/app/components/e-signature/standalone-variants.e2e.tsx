"use client";
import { ESignature } from "@lifesg/react-design-system/e-signature";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <ESignature data-testid="esig-default" />
            <ESignature data-testid="esig-disabled" disabled />
        </div>
    );
}
