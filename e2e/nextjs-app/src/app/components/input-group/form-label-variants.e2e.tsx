"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    const ID = "mockID";

    return (
        <div className="story-column-container">
            <Form.InputGroup
                data-testid="form-input-group-label-default"
                label="Form label variant"
                placeholder="Enter an amount"
                addon={{
                    attributes: { value: "$" },
                }}
                id={ID}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-right"
                label="Form label variant (right)"
                placeholder="Enter an amount"
                addon={{
                    position: "right",
                    attributes: { value: "kg" },
                }}
                id={ID}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-disabled"
                label="Form label variant disabled state"
                placeholder="Enter an amount"
                disabled
                addon={{
                    attributes: { value: "$" },
                }}
                id={ID}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-readonly"
                label="Form label variant readonly state"
                placeholder="Enter an amount"
                readOnly
                addon={{
                    attributes: { value: "$" },
                }}
                id={ID}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-error"
                label="Form label variant error state"
                placeholder="Enter an amount"
                errorMessage="Sample error message"
                addon={{
                    attributes: { value: "$" },
                }}
                id={ID}
            />
        </div>
    );
}
