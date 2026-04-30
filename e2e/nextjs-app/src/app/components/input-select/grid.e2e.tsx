"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

const OPTIONS = [
    { value: "A", label: "Option A" },
    { value: "B", label: "Option B" },
    { value: "C", label: "Option C" },
    { value: "D", label: "Option D" },
];

export default function Story() {
    return (
        <Layout.Content data-testid="input-select-grid-layout" type="grid">
            <Form.Select
                data-testid="form-select-grid-short"
                label="A shorter form input"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                xxsCols={[1, 9]}
                lgCols={[1, 5]}
            />
            <Form.Select
                data-testid="form-select-grid-long"
                label="A longer form input"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
