"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.DateInput
                data-testid="form-date-input-short"
                label="Short date input"
                xxsCols={[1, 5]}
            />
            <Form.DateInput
                data-testid="form-date-input-long"
                label="Long date input"
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
