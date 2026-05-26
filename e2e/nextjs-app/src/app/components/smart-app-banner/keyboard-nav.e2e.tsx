"use client";
import { SmartAppBanner } from "@lifesg/react-design-system/smart-app-banner";
import { useState } from "react";

export default function Story() {
    const [dismissCount, setDismissCount] = useState(0);
    const [clickCount, setClickCount] = useState(0);

    return (
        <div className="story-background">
            <button data-testid="focus-start">Focus start</button>
            <SmartAppBanner
                show
                href="https://example.com"
                content={{
                    title: "LifeSG",
                    message: "Explore government services.",
                    buttonLabel: "Get",
                    numberOfStars: 4.5,
                }}
                onDismiss={() => setDismissCount((c) => c + 1)}
                onClick={() => setClickCount((c) => c + 1)}
            />
            <span data-testid="dismiss-count">{dismissCount}</span>
            <span data-testid="click-count">{clickCount}</span>
        </div>
    );
}
