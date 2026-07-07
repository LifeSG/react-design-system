"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.NestedSelect
                label="Default state"
                data-testid="form-nested-select-default"
                options={OPTIONS}
            />

            <Form.NestedSelect
                label="Disabled state"
                data-testid="form-nested-select-disabled"
                options={OPTIONS}
                disabled
            />

            <Form.NestedSelect
                label="Readonly state"
                data-testid="form-nested-select-readonly"
                options={OPTIONS}
                readOnly
            />

            <Form.NestedSelect
                label="Error state"
                data-testid="form-nested-select-error"
                options={OPTIONS}
                errorMessage="Sample error message"
            />
        </div>
    );
}
