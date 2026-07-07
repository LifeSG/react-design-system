"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.PhoneNumberInput
                data-testid="phone-number-input-default"
                label="Default"
                placeholder="Enter phone number"
                xxsCols={[1, 5]}
            />
            <Form.PhoneNumberInput
                data-testid="phone-number-input-default"
                label="Default"
                placeholder="Enter phone number"
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
