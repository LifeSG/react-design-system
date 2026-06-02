"use client";
import { ESignature } from "@lifesg/react-design-system/e-signature";

import { signatureDataURL } from "./doc-elements";

export default function Story() {
    return (
        <div className="story-column-containerstory-background">
            <ESignature data-testid="esig-default" id="esig-default" />
            <ESignature
                data-testid="esig-with-signature"
                id="esig-with-signature"
                value={signatureDataURL}
            />
            <ESignature
                data-testid="esig-disabled"
                id="esig-disabled"
                disabled
            />
            <ESignature
                data-testid="esig-disabled-with-signature"
                id="esig-disabled-with-signature"
                disabled
                value={signatureDataURL}
            />
            <ESignature
                data-testid="esig-with-description"
                id="esig-with-description"
                description="Please sign above to confirm your agreement."
            />
        </div>
    );
}
