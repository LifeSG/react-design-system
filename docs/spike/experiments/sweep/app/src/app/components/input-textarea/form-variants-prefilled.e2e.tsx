"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.Textarea
                data-testid="form-textarea-default"
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
                value="Default value"
            />
            <Form.Textarea
                data-testid="form-textarea-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                value="Disabled value"
                disabled
            />
            <Form.Textarea
                data-testid="form-textarea-readonly"
                label={{
                    children: "Readonly",
                    subtitle: "This is the subtitle",
                }}
                value="Readonly value"
                readOnly
            />
            <Form.Textarea
                data-testid="form-textarea-error"
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                value="Error value"
                errorMessage="This field is required"
            />
        </div>
    );
}
