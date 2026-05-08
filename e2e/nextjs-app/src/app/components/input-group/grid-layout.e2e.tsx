"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";
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

export default function Story() {
    return (
        <Layout.Content type="grid" className="story-background">
            <Form.InputGroup
                data-testid="form-input-group-label-short"
                label="Form label variant (short)"
                placeholder="Enter an amount"
                xxsCols={[1, 5]}
                addon={{
                    type: "label",
                    attributes: { value: "$" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-short"
                label="Form custom variant (short)"
                placeholder="Enter something"
                xxsCols={[1, 5]}
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-list-short"
                label="Form list variant (short)"
                placeholder="Enter something"
                xxsCols={[1, 5]}
                addon={{
                    type: "list",
                    attributes: { ...LIST_ATTRIBUTES },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-label-long"
                label="Form label variant (long)"
                placeholder="Enter an amount"
                xxsCols={[1, 9]}
                addon={{
                    type: "label",
                    attributes: { value: "$" },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-custom-long"
                label="Form custom variant (long)"
                placeholder="Enter something"
                xxsCols={[1, 9]}
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <Form.InputGroup
                data-testid="form-input-group-list-long"
                label="Form list variant (long)"
                placeholder="Enter something"
                xxsCols={[1, 9]}
                addon={{
                    type: "list",
                    attributes: { ...LIST_ATTRIBUTES },
                }}
            />
        </Layout.Content>
    );
}
