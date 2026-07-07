"use client";
import { ErrorDisplay } from "@lifesg/react-design-system/error-display";

export default function Story() {
    return (
        <ErrorDisplay
            type="maintenance"
            additionalProps={{ dateString: "1 January 2023, 8:00am" }}
        />
    );
}
