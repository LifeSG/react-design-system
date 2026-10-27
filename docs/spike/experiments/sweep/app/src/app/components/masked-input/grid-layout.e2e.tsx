"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.MaskedInput label="Short input field" xxsCols={[1, 5]} />
            <Form.MaskedInput label="Long input field" xxsCols={[1, 9]} />
        </Layout.Content>
    );
}
