"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";
import { OPTIONS } from "./input-range-select.shared";

export default function Story() {
    return (
        <Layout.Content
            data-testid="input-range-select-grid-layout"
            type="grid"
        >
            <Form.RangeSelect
                data-testid="input-range-select-grid-short"
                label="A shorter form input"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                xxsCols={[1, 9]}
                lgCols={[1, 5]}
            />
            <Form.RangeSelect
                data-testid="input-range-select-grid-long"
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
