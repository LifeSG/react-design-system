"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.MaskedInput
                data-testid="form-masked-input-default"
                label={{
                    children: "Default state",
                    subtitle: "This is the subtitle",
                }}
            />
            <Form.MaskedInput
                data-testid="form-masked-input-disabled"
                label={{
                    children: "Disabled state",
                    subtitle: "This is the subtitle",
                }}
                disabled
            />
            <Form.MaskedInput
                data-testid="form-masked-input-readonly"
                label={{
                    children: "Readonly state",
                    subtitle: "This is the subtitle",
                }}
                readOnly
            />
            <Form.MaskedInput
                data-testid="form-masked-input-error"
                label={{
                    children: "Error state",
                    subtitle: "This is the subtitle",
                }}
                errorMessage="Sample error message"
            />
        </div>
    );
}
