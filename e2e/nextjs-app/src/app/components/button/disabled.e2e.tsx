"use client";
import { Button } from "@lifesg/react-design-system/button";
import { useState } from "react";

export default function Story() {
    const [count, setCount] = useState(0);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <Button.Default
                data-testid="e2e"
                disabled
                onClick={() => setCount((c) => c + 1)}
            >
                Click me
            </Button.Default>
            <p data-testid="click-count">Click count: {count}</p>
        </div>
    );
}
