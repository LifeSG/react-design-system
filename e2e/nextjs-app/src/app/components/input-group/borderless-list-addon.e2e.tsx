"use client";

import { InputGroup } from "@lifesg/react-design-system/input-group";

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
        <div className="story-column-container story-background">
            <InputGroup
                data-testid="input-group-list-borderless-default"
                value="Default borderless list variant"
                noBorder
                addon={{
                    type: "list",
                    attributes: { ...LIST_ATTRIBUTES },
                }}
            />

            <InputGroup
                data-testid="input-group-list-borderless-right"
                value="Default borderless list variant (right)"
                noBorder
                addon={{
                    position: "right",
                    type: "list",
                    attributes: { ...LIST_ATTRIBUTES },
                }}
            />

            <InputGroup
                data-testid="input-group-list-borderless-disabled"
                value="Disabled borderless list variant"
                noBorder
                disabled
                addon={{
                    type: "list",
                    attributes: { ...LIST_ATTRIBUTES },
                }}
            />

            <InputGroup
                data-testid="input-group-list-borderless-readonly"
                value="Readonly borderless list variant"
                noBorder
                readOnly
                addon={{
                    type: "list",
                    attributes: { ...LIST_ATTRIBUTES },
                }}
            />

            <InputGroup
                data-testid="input-group-list-borderless-error"
                value="Error borderless list variant"
                noBorder
                error
                addon={{
                    type: "list",
                    attributes: { ...LIST_ATTRIBUTES },
                }}
            />
        </div>
    );
}
