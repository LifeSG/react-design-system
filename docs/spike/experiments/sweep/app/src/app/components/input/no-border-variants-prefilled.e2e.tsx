"use client";

import { Input } from "@lifesg/react-design-system/input";

const value =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Input
                data-testid="input-normal"
                styleType="no-border"
                value={value}
            />
            <Input
                data-testid="input-disabled"
                styleType="no-border"
                value={value}
                disabled
            />
            <Input
                data-testid="input-readonly"
                styleType="no-border"
                value={value}
                readOnly
            />
            <Input
                data-testid="input-error"
                styleType="no-border"
                value={value}
                error
            />
        </div>
    );
}
