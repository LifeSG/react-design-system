"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.DateRangeInput label="Short range" xxsCols={[1, 5]} />
            <Form.DateRangeInput label="Long range" xxsCols={[1, 9]} />
        </Layout.Content>
    );
}
