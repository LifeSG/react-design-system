"use client";
import { SmartAppBanner } from "@lifesg/react-design-system/smart-app-banner";

export default function Story() {
    return (
        <div className="story-background">
            <SmartAppBanner
                show={false}
                href="https://example.com"
                content={{
                    title: "LifeSG",
                    message: "Explore government services.",
                    buttonLabel: "Get",
                    numberOfStars: 4.5,
                }}
                onDismiss={() => {}}
            />
        </div>
    );
}
