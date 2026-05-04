"use client";

import { Input } from "@lifesg/react-design-system/input";

export default function Story() {
    return (
        <div className="story-column-container">
            <Input
                data-testid="input-bordered-normal"
                placeholder="Default state"
                value="Sample input text"
            />
            <Input
                data-testid="input-bordered-error"
                placeholder="Error state"
                value="Error input text"
                error
            />
            <Input
                data-testid="input-bordered-disabled"
                placeholder="Disabled state"
                value="Disabled input text"
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
