"use client";

import { Input } from "@lifesg/react-design-system/input";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Input data-testid="input-default" value="Default value" />
            <Input
                data-testid="input-disabled"
                value="Disabled value"
                disabled
            />
            <Input
                data-testid="input-readonly"
                value="Readonly value"
                readOnly
            />
            <Input data-testid="input-error" value="Error value" error />
        </div>
    );
}
