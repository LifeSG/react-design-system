"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <Form.NestedSelect
            label="All options are expanded"
            data-testid="form-nested-select-all-expanded"
            options={OPTIONS}
            mode="expand"
        />
    );
}
