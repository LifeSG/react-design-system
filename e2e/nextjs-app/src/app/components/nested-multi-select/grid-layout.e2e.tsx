"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.NestedMultiSelect
                data-testid="grid-short"
                label="A shorter form input"
                options={OPTIONS}
                lgCols={[1, 5]}
            />
            <Form.NestedMultiSelect
                data-testid="grid-long"
                label="A longer form input"
                options={OPTIONS}
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
