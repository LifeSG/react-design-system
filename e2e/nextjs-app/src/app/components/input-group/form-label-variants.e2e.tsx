"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.InputGroup
                data-testid="form-input-group-label-default"
                label={{
                    children: "Default",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Enter an amount"
                addon={{
                    attributes: { value: "$" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-right"
                label={{
                    children: "Default (Right Label)",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Enter an amount"
                addon={{
                    position: "right",
                    attributes: { value: "kg" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-disabled"
                label={{
                    children: "Disabled",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Enter an amount"
                disabled
                addon={{
                    attributes: { value: "$" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-readonly"
                label={{
                    children: "Readonly",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Enter an amount"
                readOnly
                addon={{
                    attributes: { value: "$" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-error"
                label={{
                    children: "Error",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Enter an amount"
                errorMessage="Sample error message"
                addon={{
                    attributes: { value: "$" },
                }}
            />
        </div>
    );
}
