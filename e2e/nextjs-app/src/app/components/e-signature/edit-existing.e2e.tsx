"use client";
import { ESignature } from "@lifesg/react-design-system/e-signature";

import { signatureDataURL } from "./doc-elements";

export default function Story() {
    return (
        <div className="story-background">
            <ESignature data-testid="esig" id="esig" value={signatureDataURL} />
        </div>
    );
}
