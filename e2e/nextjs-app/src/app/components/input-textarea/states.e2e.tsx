"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-row-container story-background">
            <div className="story-column-container">
                <Form.Textarea
                    data-testid="textarea-default"
                    label="Default textarea"
                    placeholder="Default textarea placeholder"
                />
                <Form.Textarea
                    data-testid="textarea-readonly"
                    label="Readonly textarea"
                    placeholder="Readonly textarea placeholder"
                    readOnly
                />
                <Form.Textarea
                    data-testid="textarea-disabled"
                    label="Disabled textarea"
                    placeholder="Disabled textarea placeholder"
                    disabled
                />
                <Form.Textarea
                    data-testid="textarea-error"
                    label="Error textarea"
                    placeholder="Error textarea placeholder"
                    errorMessage="This field has an error"
                />
            </div>

            <div className="story-column-container">
                <Form.Textarea
                    data-testid="textarea-default"
                    label="Default textarea"
                    placeholder="Default textarea placeholder"
                    defaultValue="Default value"
                />
                <Form.Textarea
                    data-testid="textarea-readonly"
                    label="Readonly textarea"
                    placeholder="Readonly textarea placeholder"
                    value="Readonly value"
                    readOnly
                />
                <Form.Textarea
                    data-testid="textarea-disabled"
                    label="Disabled textarea"
                    placeholder="Disabled textarea placeholder"
                    value="Disabled value"
                    disabled
                />
                <Form.Textarea
                    data-testid="textarea-error"
                    label="Error textarea"
                    placeholder="Error textarea placeholder"
                    defaultValue="Error value"
                    errorMessage="This field has an error"
                />
            </div>
        </div>
    );
}
