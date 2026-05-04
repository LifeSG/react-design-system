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
                placeholder="Default state"
            />
            <Form.Input
                data-testid="form-input-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Disabled state"
                disabled
            />
            <Form.Input
                data-testid="form-input-readonly"
                label={{
                    children: "Readonly",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Readonly state"
                readOnly
            />
            <Form.Input
                data-testid="form-input-error"
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Error state"
                errorMessage="This field is required"
            />
        </div>
    );
}
