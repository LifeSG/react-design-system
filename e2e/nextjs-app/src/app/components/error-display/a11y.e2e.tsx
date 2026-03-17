"use client";

import { ErrorDisplay } from "@lifesg/react-design-system/error-display";

export default function Story() {
    return (
        <ErrorDisplay
            type="inactivity"
            additionalProps={{
                secondsLeft: 65,
                reminderInterval: 60,
            }}
        />
    );
}
