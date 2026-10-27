"use client";

import { Form } from "@lifesg/react-design-system/form";
import { MagnifierIcon } from "@lifesg/react-icons";

const LIST_ATTRIBUTES = {
    options: [
        { display: "Option 1", value: "Opt 1" },
        { display: "Option 2", value: "Opt 2" },
        { display: "Option 3", value: "Opt 3" },
    ],
    listExtractor: (item: unknown) =>
        (item as { display: string; value: string }).display,
    placeholder: "Select",
};

const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Form.InputGroup
                data-testid="form-input-group-label-clear"
                label={{
                    children: "Form label variant with clear button",
                    subtitle: "This is the subtitle",
                }}
                value={text}
                allowClear
                addon={{
                    type: "label",
                    attributes: { value: "$" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-clear"
                label={{
                    children: "Form custom variant with clear button",
                    subtitle: "This is the subtitle",
                }}
                value={text}
                allowClear
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-list-clear"
                label={{
                    children: "Form list variant with clear button",
                    subtitle: "This is the subtitle",
                }}
                value={text}
                allowClear
                addon={{
                    type: "list",
                    attributes: { ...LIST_ATTRIBUTES },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-right-clear"
                label={{
                    children: "Form label variant (right) with clear button",
                    subtitle: "This is the subtitle",
                }}
                value={text}
                allowClear
                addon={{
                    type: "label",
                    position: "right",
                    attributes: { value: "kg" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-right-clear"
                label={{
                    children: "Form custom variant (right) with clear button",
                    subtitle: "This is the subtitle",
                }}
                value={text}
                allowClear
                addon={{
                    type: "custom",
                    position: "right",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-list-right-clear"
                label={{
                    children: "Form list variant (right) with clear button",
                    subtitle: "This is the subtitle",
                }}
                value={text}
                allowClear
                addon={{
                    type: "list",
                    position: "right",
                    attributes: { ...LIST_ATTRIBUTES },
                }}
            />
        </div>
    );
}
