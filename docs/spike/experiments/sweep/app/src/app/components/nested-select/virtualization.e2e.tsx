"use client";

import { Form } from "@lifesg/react-design-system/form";

const LARGE_OPTIONS = Array.from({ length: 1000 }, (_, i) => ({
    key: `${i + 1}`,
    value: `${i + 1}`,
    label: `Option ${i + 1}`,
    subItems: Array.from({ length: 5 }, (_, j) => ({
        key: `${i + 1}-${j + 1}`,
        value: `${i + 1}.${j + 1}`,
        label: `Option ${i + 1}-${j + 1}`,
    })),
}));

export default function Story() {
    return (
        <Form.NestedSelect
            label="Default state"
            data-testid="form-nested-select-default"
            options={LARGE_OPTIONS}
            enableSearch
        />
    );
}
