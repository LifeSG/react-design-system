"use client";
import { SmartAppBanner } from "@lifesg/react-design-system/smart-app-banner";
import { useState } from "react";

export default function Story() {
    const [clickCount, setClickCount] = useState(0);

    return (
        <div className="story-background">
            <SmartAppBanner
                show
                href="https://example.com"
                content={{
                    title: "LifeSG",
                    message: "Explore government services.",
                    buttonLabel: "Get",
                    numberOfStars: 4.5,
                }}
                onDismiss={() => {}}
                onClick={() => setClickCount((c) => c + 1)}
            />
            <span data-testid="click-count">{clickCount}</span>
        </div>
    );
}
