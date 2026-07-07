"use client";

import { Input } from "@lifesg/react-design-system/input";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Input data-testid="input-default" placeholder="Default state" />
            <Input
                data-testid="input-disabled"
                placeholder="Disabled state"
                disabled
            />
            <Input
                data-testid="input-readonly"
                placeholder="Readonly state"
                readOnly
            />
            <Input data-testid="input-error" placeholder="Error state" error />
        </div>
    );
}
