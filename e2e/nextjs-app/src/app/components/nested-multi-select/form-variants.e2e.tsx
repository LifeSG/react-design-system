"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.NestedMultiSelect
                data-testid="nested-multi-select-default"
                label="Default"
                options={OPTIONS}
            />

            <Form.NestedMultiSelect
                data-testid="nested-multi-select-selected"
                label="Selected"
                options={OPTIONS}
                selectedKeyPaths={[
                    ["1", "11"],
                    ["2", "21"],
                ]}
            />

            <Form.NestedMultiSelect
                data-testid="nested-multi-select-readonly"
                label="Read only"
                options={OPTIONS}
                readOnly
            />

            <Form.NestedMultiSelect
                data-testid="nested-multi-select-disabled"
                label="Disabled"
                options={OPTIONS}
                disabled
            />

            <Form.NestedMultiSelect
                data-testid="nested-multi-select-error"
                label="Error"
                options={OPTIONS}
                errorMessage="Selection is required"
            />
        </div>
    );
}
