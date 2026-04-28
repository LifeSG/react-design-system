"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

export default function Story() {
    return (
        <Layout.Content type="grid">
            <Form.Textarea
                data-testid="textarea-default"
                label="Default textarea"
                layoutType="grid"
                xxsCols={1}
                placeholder="Default textarea placeholder"
                defaultValue="Default value"
            />
            <Form.Textarea
                data-testid="textarea-readonly"
                label="Readonly textarea"
                layoutType="grid"
                xxsCols={3}
                placeholder="Readonly textarea placeholder"
                value="Readonly value"
                readOnly
            />
            <Form.Textarea
                data-testid="textarea-disabled"
                label="Disabled textarea"
                layoutType="grid"
                xxsCols={5}
                placeholder="Disabled textarea placeholder"
                value="Disabled value"
                disabled
            />
            <Form.Textarea
                data-testid="textarea-error"
                label="Error textarea"
                layoutType="grid"
                xxsCols={7}
                placeholder="Error textarea placeholder"
                defaultValue="Error value"
                errorMessage="This field has an error"
            />
        </Layout.Content>
    );
}
