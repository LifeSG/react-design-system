"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.InputGroup
                data-testid="form-input-group-label-default"
                label="Form label variant"
                placeholder="Enter an amount"
                value="1000.00"
                addon={{
                    attributes: { value: "$" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-right"
                label="Form label variant (right)"
                placeholder="Enter an amount"
                value="99.99"
                addon={{
                    position: "right",
                    attributes: { value: "kg" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-disabled"
                label="Form label variant disabled state"
                placeholder="Enter an amount"
                value="1000.00"
                disabled
                addon={{
                    attributes: { value: "$" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-readonly"
                label="Form label variant readonly state"
                placeholder="Enter an amount"
                value="1000.00"
                readOnly
                addon={{
                    attributes: { value: "$" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-error"
                label="Form label variant error state"
                placeholder="Enter an amount"
                value="1000.00"
                errorMessage="Sample error message"
                addon={{
                    attributes: { value: "$" },
                }}
            />
        </div>
    );
}
