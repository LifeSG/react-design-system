"use client";
import { useState } from "react";

import { Button, Card, Typography } from "@lifesg/react-design-system";

export default function Story() {
    const [count, setCount] = useState(0);

    return (
        <div
            style={{
                width: "min(640px, 100%)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <Card data-testid="card-default-text">
                This is string content with default text styling.
            </Card>

            <Card data-testid="card-custom-content">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                    }}
                >
                    <Typography.BodySM data-testid="card-custom-count">
                        Count: {count}
                    </Typography.BodySM>
                    <Button
                        data-testid="card-custom-button"
                        onClick={() => setCount((prev) => prev + 1)}
                    >
                        Increment
                    </Button>
                </div>
            </Card>
        </div>
    );
}
