"use client";

import { InputGroup } from "@lifesg/react-design-system/input-group";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <InputGroup
                data-testid="input-group-label-borderless-default"
                value="Default borderless label variant"
                noBorder
                addon={{
                    type: "label",
                    attributes: { value: "$" },
                }}
            />

            <InputGroup
                data-testid="input-group-label-borderless-right"
                value="Default borderless label variant (right)"
                noBorder
                addon={{
                    position: "right",
                    type: "label",
                    attributes: { value: "kg" },
                }}
            />

            <InputGroup
                data-testid="input-group-label-borderless-disabled"
                value="Disabled borderless label variant"
                noBorder
                disabled
                addon={{
                    type: "label",
                    attributes: { value: "$" },
                }}
            />

            <InputGroup
                data-testid="input-group-label-borderless-readonly"
                value="Readonly borderless label variant"
                noBorder
                readOnly
                addon={{
                    type: "label",
                    attributes: { value: "$" },
                }}
            />

            <InputGroup
                data-testid="input-group-label-borderless-error"
                value="Error borderless label variant"
                noBorder
                error
                addon={{
                    type: "label",
                    attributes: { value: "$" },
                }}
            />
        </div>
    );
}
