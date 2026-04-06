"use client";
import { useState } from "react";

import { Button, Card, Typography } from "@lifesg/react-design-system";

export default function Story() {
    const [count, setCount] = useState(0);

    return (
        <Card data-testid="card-custom-content">
            <div>
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
    );
}
