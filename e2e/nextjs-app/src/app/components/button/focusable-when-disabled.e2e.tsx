"use client";

import { Button } from "@lifesg/react-design-system/button";

export default function Story() {
    return (
        <div style={{ display: "flex", gap: "1rem", padding: "2rem" }}>
            <Button disabled focusableWhenDisabled>
                Focusable disabled
            </Button>
            <Button disabled>Non-focusable disabled</Button>
        </div>
    );
}
