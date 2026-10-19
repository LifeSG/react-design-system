"use client";
import { Timeline } from "@lifesg/react-design-system/timeline";

export default function Story() {
    return (
        <div className="story-background">
            <Timeline
                data-testid="timeline"
                title="What's next"
                items={[
                    {
                        title: "Step 1",
                        content: "Complete the first step of the process.",
                    },
                    {
                        title: "Step 2",
                        content: "Continue with the second step.",
                    },
                    {
                        title: "Step 3",
                        content: "Finish the final step.",
                    },
                ]}
            />
        </div>
    );
}
