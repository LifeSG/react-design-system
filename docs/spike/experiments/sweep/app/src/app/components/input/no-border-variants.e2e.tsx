"use client";

import { Input } from "@lifesg/react-design-system/input";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Input
                data-testid="input-default"
                styleType="no-border"
                placeholder="Default placeholder"
            />
            <Input
                data-testid="input-disabled"
                styleType="no-border"
                placeholder="Disabled placeholder"
                disabled
            />
            <Input
                data-testid="input-readonly"
                styleType="no-border"
                placeholder="Readonly placeholder"
                readOnly
            />
            <Input
                styleType="no-border"
                data-testid="input-error"
                placeholder="Error placeholder"
                error
            />
        </div>
    );
}
