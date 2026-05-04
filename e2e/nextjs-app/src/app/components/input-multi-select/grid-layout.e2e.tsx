"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.MultiSelect
                data-testid="grid-short"
                label="A shorter form input"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                xxsCols={[1, 9]}
                lgCols={[1, 5]}
            />
            <Form.MultiSelect
                data-testid="grid-long"
                label="A longer form input"
                options={OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
