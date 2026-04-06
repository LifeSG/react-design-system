"use client";

import { Button } from "@lifesg/react-design-system/button";

export default function Story() {
    return (
        <div className="story-row-container">
            <Button disabled focusableWhenDisabled>
                Focusable disabled
            </Button>
            <Button disabled>Non-focusable disabled</Button>
        </div>
    );
}
