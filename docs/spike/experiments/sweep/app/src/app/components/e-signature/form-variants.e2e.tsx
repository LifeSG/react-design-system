"use client";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.ESignature
                data-testid="form-esig-default"
                label={{
                    children: "Signature",
                    subtitle: "This is the subtitle",
                }}
            />
            <Form.ESignature
                data-testid="form-esig-disabled"
                label={{
                    children: "Signature",
                    subtitle: "This is the subtitle",
                }}
                disabled
            />
            <Form.ESignature
                data-testid="form-esig-error"
                label={{
                    children: "Signature",
                    subtitle: "This is the subtitle",
                }}
                errorMessage="Please provide your signature."
            />
        </div>
    );
}
