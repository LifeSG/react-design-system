"use client";

import { Form } from "@lifesg/react-design-system/form";
import { MagnifierIcon } from "@lifesg/react-icons";

export default function Story() {
    const ID = "mockID";

    return (
        <div className="story-column-container story-background">
            <Form.InputGroup
                data-testid="form-input-group-custom"
                label="Form custom variant"
                placeholder="Enter something"
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
                id={ID}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-right"
                label="Form custom variant (right)"
                placeholder="Enter something"
                addon={{
                    type: "custom",
                    position: "right",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
                id={ID}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-disabled"
                label="Form custom variant disabled state"
                placeholder="Enter something"
                disabled
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
                id={ID}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-readonly"
                label="Form custom variant readonly state"
                placeholder="Enter something"
                readOnly
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
                id={ID}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-error"
                label="Form custom variant error state"
                placeholder="Enter something"
                errorMessage="Sample error message"
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
                id={ID}
            />
        </div>
    );
}
