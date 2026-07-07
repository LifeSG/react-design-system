"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.Input
                data-testid="form-input-default"
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
                value="Default value"
            />
            <Form.Input
                data-testid="form-input-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                disabled
                value="Disabled value"
            />
            <Form.Input
                data-testid="form-input-readonly"
                label={{
                    children: "Readonly",
                    subtitle: "This is the subtitle",
                }}
                readOnly
                value="Readonly value"
            />
            <Form.Input
                data-testid="form-input-error"
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                errorMessage="This field is required"
                value="Error value"
            />
        </div>
    );
}
