"use client";

import { Form } from "@lifesg/react-design-system/form";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <Form.NestedSelect
            data-testid="form-nested-select-default"
            options={OPTIONS}
            selectedKeyPath={["1", "11"]}
        />
    );
}
