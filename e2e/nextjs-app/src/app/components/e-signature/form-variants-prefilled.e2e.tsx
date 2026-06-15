"use client";
import { Form } from "@lifesg/react-design-system/form";

import { signatureDataURL } from "./doc-elements";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.ESignature
                data-testid="form-esig-prefilled"
                label={{
                    children: "Signature",
                    subtitle: "This is the subtitle",
                }}
                value={signatureDataURL}
            />
            <Form.ESignature
                data-testid="form-esig-disabled-prefilled"
                label={{
                    children: "Signature",
                    subtitle: "This is the subtitle",
                }}
                disabled
                value={signatureDataURL}
            />
        </div>
    );
}
