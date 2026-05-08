"use client";

import { InputGroup } from "@lifesg/react-design-system/input-group";
import { MagnifierIcon } from "@lifesg/react-icons";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <InputGroup
                data-testid="input-group-custom-borderless-default"
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
                data-testid="input-group-custom-borderless-right"
                value="Default borderless custom variant (right)"
                noBorder
                addon={{
                    position: "right",
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <InputGroup
                data-testid="input-group-custom-borderless-disabled"
                value="Disabled borderless custom variant"
                noBorder
                disabled
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <InputGroup
                data-testid="input-group-custom-borderless-readonly"
                value="Readonly borderless custom variant"
                noBorder
                readOnly
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
            />

            <InputGroup
                data-testid="input-group-custom-borderless-error"
                value="Error borderless custom variant"
                noBorder
                error
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
