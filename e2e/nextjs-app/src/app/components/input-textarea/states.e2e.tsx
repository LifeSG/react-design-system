"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Textarea
                data-testid="textarea-default"
                label="Default textarea"
                placeholder="Default textarea"
                defaultValue="Default value"
            />
            <Form.Textarea
                data-testid="textarea-readonly"
                label="Readonly textarea"
                placeholder="Readonly textarea"
                value="Readonly value"
                readOnly
            />
            <Form.Textarea
                data-testid="textarea-disabled"
                label="Disabled textarea"
                placeholder="Disabled textarea"
                value="Disabled value"
                disabled
            />
            <Form.Textarea
                data-testid="textarea-error"
                label="Error textarea"
                placeholder="Error textarea"
                defaultValue="Error value"
                errorMessage="This field has an error"
            />
        </div>
    );
}
