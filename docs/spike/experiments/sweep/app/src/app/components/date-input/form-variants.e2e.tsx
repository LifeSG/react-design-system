"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.DateInput
                data-testid="form-date-input-default"
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
            />
            <Form.DateInput
                data-testid="form-date-input-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                disabled
            />
            <Form.DateInput
                data-testid="form-date-input-readonly"
                label={{
                    children: "Readonly",
                    subtitle: "This is the subtitle",
                }}
                readOnly
            />
            <Form.DateInput
                data-testid="form-date-input-error"
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                errorMessage="This field is required"
            />
        </div>
    );
}
