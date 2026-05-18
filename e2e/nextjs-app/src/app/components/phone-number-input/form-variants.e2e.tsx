"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.PhoneNumberInput
                data-testid="phone-number-input-default"
                label="Default"
                placeholder="Enter phone number"
            />

            <Form.PhoneNumberInput
                data-testid="phone-number-input-error"
                label="Error"
                errorMessage="Mobile number is required"
                placeholder="Enter phone number"
            />

            <Form.PhoneNumberInput
                data-testid="phone-number-input-disabled"
                label="Disabled"
                disabled
                placeholder="Enter phone number"
            />

            <Form.PhoneNumberInput
                data-testid="phone-number-input-readonly"
                label="Readonly"
                readOnly
            />
        </div>
    );
}
