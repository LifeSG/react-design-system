"use client";
import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.CustomField data-testid="custom-field-basic">
                <input placeholder="No label" />
            </Form.CustomField>

            <Form.CustomField
                id="custom-field-label"
                data-testid="custom-field-label"
                label="Full name"
            >
                <input placeholder="Enter full name" />
            </Form.CustomField>

            <Form.CustomField
                id="custom-field-subtitle"
                data-testid="custom-field-subtitle"
                label={{
                    children: "Email address",
                    subtitle: "We will send a confirmation to this address",
                }}
            >
                <input placeholder="Enter email" />
            </Form.CustomField>

            <Form.CustomField
                id="custom-field-error"
                data-testid="custom-field-error"
                label="Phone number"
                errorMessage="Please enter a valid phone number"
                data-error-testid="custom-field-error-message"
            >
                <input placeholder="Enter phone number" />
            </Form.CustomField>
        </div>
    );
}
