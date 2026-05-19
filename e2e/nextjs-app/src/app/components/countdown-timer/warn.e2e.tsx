"use client";
import { CountdownTimer } from "@lifesg/react-design-system/countdown-timer";
import { useState } from "react";

export default function Story() {
    const [timestamp] = useState(() => Date.now() + 1 * 60 * 1000);

    return (
        <CountdownTimer
            data-testid="countdown-timer"
            timestamp={timestamp}
            notifyTimer={60}
            fixed={false}
            show
        />
    );
}
