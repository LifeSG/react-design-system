"use client";

import { MaskedInput } from "@lifesg/react-design-system/masked-input";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <MaskedInput
                data-testid="masked-input-default"
                placeholder="Default state"
            />
            <MaskedInput
                data-testid="masked-input-disabled"
                placeholder="Disabled state"
                disabled
            />
            <MaskedInput
                data-testid="masked-input-readonly"
                placeholder="Readonly state"
                readOnly
            />
            <MaskedInput
                data-testid="masked-input-error"
                placeholder="Error state"
                error
            />
        </div>
    );
}
