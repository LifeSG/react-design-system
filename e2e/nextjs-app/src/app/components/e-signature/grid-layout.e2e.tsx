"use client";
import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.ESignature label="Short column" xxsCols={[1, 5]} />
            <Form.ESignature label="Long column" xxsCols={[1, 9]} />
        </Layout.Content>
    );
}
