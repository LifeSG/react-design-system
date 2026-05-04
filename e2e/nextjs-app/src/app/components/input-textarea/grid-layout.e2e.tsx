"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.Textarea
                label="Short textarea"
                xxsCols={[1, 5]}
                placeholder="Enter here..."
            />
            <Form.Textarea
                label="Long textarea"
                xxsCols={[1, 9]}
                placeholder="Enter here..."
            />
        </Layout.Content>
    );
}
