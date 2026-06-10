"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <Form.NestedSelect
            label="Default state"
            data-testid="form-nested-select-default"
            options={OPTIONS}
            dropdownWidth="200px"
        />
    );
}
