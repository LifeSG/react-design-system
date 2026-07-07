"use client";
import { ESignature } from "@lifesg/react-design-system/e-signature";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <button data-testid="focus-start">Focus start</button>
            <ESignature data-testid="esig" />
        </div>
    );
}
