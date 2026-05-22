"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.MaskedInput
                data-testid="form-masked-input-default"
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
                value="S1234567D"
            />
            <Form.MaskedInput
                data-testid="form-masked-input-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                value="S1234567D"
                disabled
            />
            <Form.MaskedInput
                data-testid="form-masked-input-readonly"
                label={{
                    children: "Readonly",
                    subtitle: "This is the subtitle",
                }}
                value="S1234567D"
                readOnly
            />
            <Form.MaskedInput
                data-testid="form-masked-input-error"
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                value="S1234567D"
                errorMessage="Sample error message"
            />
        </div>
    );
}
