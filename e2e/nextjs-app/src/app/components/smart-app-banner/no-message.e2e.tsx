"use client";
import { SmartAppBanner } from "@lifesg/react-design-system/smart-app-banner";

export default function Story() {
    return (
        <div className="story-background">
            <SmartAppBanner
                show
                href="https://example.com"
                content={{
                    title: "LifeSG",
                    buttonLabel: "Get",
                    numberOfStars: 4,
                }}
                onDismiss={() => {}}
            />
        </div>
    );
}
