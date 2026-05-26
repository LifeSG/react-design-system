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
                maskRange={[2, 5]}
            />
            <Form.MaskedInput
                data-testid="form-masked-input-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                value="S1234567D"
                maskRange={[2, 5]}
                disabled
            />
            <Form.MaskedInput
                data-testid="form-masked-input-readonly"
                label={{
                    children: "Readonly",
                    subtitle: "This is the subtitle",
                }}
                value="S1234567D"
                maskRange={[2, 5]}
                readOnly
            />
            <Form.MaskedInput
                data-testid="form-masked-input-error"
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                value="S1234567D"
                maskRange={[2, 5]}
                errorMessage="Sample error message"
            />
            <Form.MaskedInput
                data-testid="form-masked-input-disabled-masking"
                label={{
                    children: "Disabled masking",
                    subtitle: "This is the subtitle",
                }}
                disableMask
                value="S1234567D"
            />
        </div>
    );
}
