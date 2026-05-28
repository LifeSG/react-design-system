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
                placeholder="Placeholder text"
            />
            <Form.MaskedInput
                data-testid="form-masked-input-disabled"
                label={{
                    children: "Disabled state",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Placeholder text"
                disabled
            />
            <Form.MaskedInput
                data-testid="form-masked-input-readonly"
                label={{
                    children: "Readonly state",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Placeholder text"
                readOnly
            />
            <Form.MaskedInput
                data-testid="form-masked-input-error"
                label={{
                    children: "Error state",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Placeholder text"
                errorMessage="Sample error message"
            />
        </div>
    );
}
