"use client";

import { ProgressIndicator } from "@lifesg/react-design-system/progress-indicator";

export default function Story() {
    return (
        <div data-testid="progress-indicator-story">
            <ProgressIndicator
                steps={["Details", "Verification", "Confirmation"]}
                currentIndex={1}
            />
        </div>
    );
}
