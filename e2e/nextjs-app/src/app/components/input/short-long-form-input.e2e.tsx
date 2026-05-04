"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.Input
                data-testid="form-input-short-cols"
                label="Short input field"
                xxsCols={[1, 9]}
                lgCols={[1, 5]}
            />
            <Form.Input
                data-testid="form-input-long-cols"
                label="Long input field"
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
