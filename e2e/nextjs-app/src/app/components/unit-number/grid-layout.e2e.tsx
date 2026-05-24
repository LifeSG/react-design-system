"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.UnitNumberInput
                label="Short unit number field"
                xxsCols={[1, 5]}
            />
            <Form.UnitNumberInput
                label="Long unit number field"
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
