"use client";
import { ErrorDisplay } from "@lifesg/react-design-system/error-display";

export default function Story() {
    return (
        <div className="story-background-wrapper">
            <ErrorDisplay type="404" />
        </div>
    );
}
