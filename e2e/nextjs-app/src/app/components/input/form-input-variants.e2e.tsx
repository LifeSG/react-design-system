"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.Input
                data-testid="form-input-normal"
                label="Normal form input field"
                placeholder="Enter here..."
            />
            <Form.Input
                data-testid="form-input-error"
                label="Error form input field"
                placeholder="Enter here..."
                errorMessage="This field is required"
                data-error-testid="form-input-error-message"
            />
            <Form.Input
                data-testid="form-input-disabled"
                label="Disabled form input field"
                placeholder="Enter here..."
                disabled
            />
            <Form.Input
                data-testid="form-input-readonly"
                label="Readonly form input field"
                readOnly
                value="Read only value"
            />
        </div>
    );
}
