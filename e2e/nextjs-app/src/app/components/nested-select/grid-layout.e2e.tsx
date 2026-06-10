"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";
import { OPTIONS } from "./mock";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.NestedSelect
                label="Short input field"
                options={OPTIONS}
                xxsCols={[1, 5]}
            />

            <Form.NestedSelect
                label="Long input field"
                options={OPTIONS}
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
