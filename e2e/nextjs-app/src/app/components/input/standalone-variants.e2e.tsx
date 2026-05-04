"use client";

import { Input } from "@lifesg/react-design-system/input";

export default function Story() {
    return (
        <div className="story-column-container">
            <Input
                data-testid="input-bordered-normal"
                placeholder="Default state"
            />
            <Input
                data-testid="input-bordered-error"
                placeholder="Error state"
                error
            />
            <Input
                data-testid="input-bordered-disabled"
                placeholder="Disabled state"
                disabled
            />
            <Input
                data-testid="input-bordered-readonly"
                readOnly
                value="Read only value"
            />
        </div>
    );
}
