"use client";
import { Timeline } from "@lifesg/react-design-system/timeline";

export default function Story() {
    return (
        <div className="story-background">
            <Timeline
                data-testid="timeline"
                title="Steps to complete"
                counterOffset={2}
                items={[
                    {
                        title: "Step 3",
                        variant: "numeric",
                        content:
                            "Schedule an appointment at your nearest service centre.",
                    },
                    {
                        title: "Step 4",
                        variant: "numeric",
                        content:
                            "Attend the appointment and bring your original documents.",
                    },
                    {
                        title: "Step 5",
                        variant: "numeric",
                        content:
                            "Collect your documents or receive them by mail.",
                    },
                ]}
            />
        </div>
    );
}
