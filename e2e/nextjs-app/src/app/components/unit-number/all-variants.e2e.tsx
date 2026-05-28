"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.UnitNumberInput
                data-testid="unit-number-default"
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
            />
            <Form.UnitNumberInput
                data-testid="unit-number-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                disabled
            />
            <Form.UnitNumberInput
                data-testid="unit-number-readonly"
                label={{
                    children: "Readonly",
                    subtitle: "This is the subtitle",
                }}
                readOnly
            />
            <Form.UnitNumberInput
                data-testid="unit-number-error"
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                errorMessage="Sample error message"
            />
        </div>
    );
}
