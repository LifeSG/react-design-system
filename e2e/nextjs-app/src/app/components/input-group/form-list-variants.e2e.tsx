"use client";

import { Form } from "@lifesg/react-design-system/form";

const ATTRIBUTES = {
    options: [
        { display: "Option 1", value: "Opt 1" },
        { display: "Option 2", value: "Opt 2" },
        { display: "Option 3", value: "Opt 3" },
    ],
    placeholder: "Select",
};

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.InputGroup
                data-testid="form-input-group-list-default"
                label={{
                    children: "Form list variant",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Enter something"
                addon={{
                    type: "list",
                    attributes: {
                        listExtractor: (item) =>
                            (item as { display: string; value: string })
                                .display,
                        valueExtractor: (item) =>
                            (item as { display: string; value: string }).value,
                        ...ATTRIBUTES,
                    },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-list-right"
                label={{
                    children: "Form list variant (right)",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Enter something"
                addon={{
                    type: "list",
                    position: "right",
                    attributes: { ...ATTRIBUTES },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-list-disabled"
                label={{
                    children: "Form list variant disabled state",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Enter something"
                disabled
                addon={{
                    type: "list",
                    attributes: { ...ATTRIBUTES },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-list-readonly"
                label={{
                    children: "Form list variant readonly state (pristine)",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Enter something"
                readOnly
                addon={{
                    type: "list",
                    attributes: { ...ATTRIBUTES },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-list-error"
                label={{
                    children: "Form list variant error state",
                    subtitle: "This is the subtitle",
                }}
                placeholder="Enter something"
                errorMessage="Sample error message"
                addon={{
                    type: "list",
                    attributes: { ...ATTRIBUTES },
                }}
            />
        </div>
    );
}
