"use client";

import { InputGroup } from "@lifesg/react-design-system/input-group";

export default function Story() {
    return (
        <div className="story-column-container">
            <InputGroup
                data-testid="input-group-label-left"
                placeholder="Enter an amount"
                addon={{
                    attributes: { value: "$" },
                }}
            />

            <InputGroup
                data-testid="input-group-label-right"
                placeholder="Enter an amount"
                addon={{
                    position: "right",
                    attributes: { value: "kg" },
                }}
            />

            <InputGroup
                data-testid="input-group-label-left-disabled"
                placeholder="Enter an amount"
                disabled
                addon={{
                    attributes: { value: "$" },
                }}
            />

            <InputGroup
                data-testid="input-group-label-left-readonly"
                placeholder="Enter an amount"
                readOnly
                addon={{
                    attributes: { value: "$" },
                }}
            />

            <InputGroup
                data-testid="input-group-label-left-error"
                placeholder="Enter an amount"
                error
                addon={{
                    attributes: { value: "$" },
                }}
            />
        </div>
    );
}
