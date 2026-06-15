"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <Form.NestedSelect
            label="All options are collapsed"
            data-testid="form-nested-select-all-collapsed"
            options={OPTIONS}
            mode="collapse"
        />
    );
}
