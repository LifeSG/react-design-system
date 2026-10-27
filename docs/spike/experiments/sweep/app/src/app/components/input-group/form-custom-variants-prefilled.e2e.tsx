"use client";

import { Form } from "@lifesg/react-design-system/form";
import { MagnifierIcon } from "@lifesg/react-icons";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.InputGroup
                data-testid="form-input-group-custom"
                label="Form custom variant"
                placeholder="Enter something"
                value="Sample input"
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-right"
                label="Form custom variant (right)"
                placeholder="Enter something"
                value="Sample input"
                addon={{
                    type: "custom",
                    position: "right",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-disabled"
                label="Form custom variant disabled state"
                placeholder="Enter something"
                value="Sample input"
                disabled
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-readonly"
                label="Form custom variant readonly state"
                placeholder="Enter something"
                value="Sample input"
                readOnly
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-error"
                label="Form custom variant error state"
                placeholder="Enter something"
                value="Sample input"
                errorMessage="Sample error message"
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />
        </div>
    );
}
