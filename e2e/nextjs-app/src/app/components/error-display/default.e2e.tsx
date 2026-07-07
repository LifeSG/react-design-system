"use client";
import { ErrorDisplay } from "@lifesg/react-design-system/error-display";

export default function Story() {
    return (
        <div className="story-background">
            <ErrorDisplay type="404" />
        </div>
    );
}
