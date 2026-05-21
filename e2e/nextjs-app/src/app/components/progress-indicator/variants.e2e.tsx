"use client";

import { ProgressIndicator } from "@lifesg/react-design-system/progress-indicator";

const steps = ["One", "Two", "Three"];

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <ProgressIndicator
                data-testid="progress-indicator-first"
                steps={steps}
                currentIndex={0}
            />
            <ProgressIndicator
                data-testid="progress-indicator-middle"
                steps={steps}
                currentIndex={1}
            />
            <ProgressIndicator
                data-testid="progress-indicator-last"
                steps={steps}
                currentIndex={2}
            />
        </div>
    );
}
