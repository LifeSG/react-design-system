"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.UnitNumberInput
                data-testid="unit-number-default"
                label="Default state"
                value="11-1111"
            />
            <Form.UnitNumberInput
                data-testid="unit-number-disabled"
                label="Disabled state"
                value="11-1111"
                disabled
            />
            <Form.UnitNumberInput
                data-testid="unit-number-readonly"
                label="Readonly state"
                value="11-1111"
                readOnly
            />
            <Form.UnitNumberInput
                data-testid="unit-number-error"
                label="Error state"
                value="11-1111"
                errorMessage="Sample error message"
            />
        </div>
    );
}
