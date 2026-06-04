"use client";
import { ESignature } from "@lifesg/react-design-system/e-signature";

import { signatureDataURL } from "./doc-elements";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <ESignature
                data-testid="esig-with-signature"
                value={signatureDataURL}
            />
            <ESignature
                data-testid="esig-disabled-with-signature"
                disabled
                value={signatureDataURL}
            />
        </div>
    );
}
