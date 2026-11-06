"use client";

import { Form } from "@lifesg/react-design-system/form";

import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <Form.MultiSelect
            data-testid="tag-small"
            displayVariant="tag"
            variant="small"
            label="Small"
            options={OPTIONS}
            selectedOptions={[OPTIONS[0], OPTIONS[1]]}
            valueExtractor={(item) => item.value}
            listExtractor={(item) => item.label}
        />
    );
}
