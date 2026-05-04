"use client";

import { Input } from "@lifesg/react-design-system/input";

export default function Story() {
    return (
        <div className="story-column-container">
            <Input
                data-testid="input-clear-standalone"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                allowClear
            />
        </div>
    );
}
