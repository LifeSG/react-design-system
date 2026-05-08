"use client";

import { InputGroup } from "@lifesg/react-design-system/input-group";
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
        <div className="story-column-container story-background">
            <InputGroup
                data-testid="form-input-group-label-borderless"
                value="Default borderless label variant"
                noBorder
                addon={{
                    type: "label",
                    attributes: { value: "$" },
                }}
            />

            <InputGroup
                data-testid="form-input-group-custom-borderless"
                value="Default borderless custom variant"
                noBorder
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <InputGroup
                data-testid="form-input-group-list-borderless"
                value="Default borderless list variant"
                noBorder
                addon={{
                    type: "list",
                    attributes: { ...LIST_ATTRIBUTES },
                }}
            />

            <InputGroup
                data-testid="form-input-group-label-disabled-borderless"
                value="Disabled borderless label variant"
                noBorder
                addon={{
                    type: "label",
                    attributes: { value: "$" },
                }}
                disabled
            />

            <InputGroup
                data-testid="form-input-group-label-readonly-borderless"
                value="Readonly borderless label variant"
                noBorder
                addon={{
                    type: "label",
                    attributes: { value: "$" },
                }}
                readOnly
            />
        </div>
    );
}
