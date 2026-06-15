"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div>
            <Form.NestedSelect
                label="Default state"
                data-testid="form-nested-select"
                options={OPTIONS}
                selectedKeyPath={["1", "11"]}
            />

            <Form.NestedSelect
                label="Disabled state"
                data-testid="form-nested-select"
                options={OPTIONS}
                disabled
                selectedKeyPath={["1", "11"]}
            />

            <Form.NestedSelect
                label="Readonly state"
                data-testid="form-nested-select"
                options={OPTIONS}
                readOnly
                selectedKeyPath={["1", "11"]}
            />

            <Form.NestedSelect
                label="Error state"
                data-testid="form-nested-select"
                options={OPTIONS}
                errorMessage="Sample error message"
                selectedKeyPath={["1", "11"]}
            />
        </div>
    );
}
