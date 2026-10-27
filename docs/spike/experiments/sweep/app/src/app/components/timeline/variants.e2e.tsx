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
                        title: "Completed",
                        variant: "completed",
                        content: "An example with the completed variant.",
                    },
                    {
                        title: "Current",
                        variant: "current",
                        content: "An example with the current variant.",
                    },
                    {
                        title: "Numeric",
                        variant: "numeric",
                        content: "An example with the numeric variant.",
                    },
                    {
                        title: "Upcoming active",
                        variant: "upcoming-active",
                        content: "An example with the upcoming-active variant.",
                    },
                    {
                        title: "Upcoming inactive",
                        variant: "upcoming-inactive",
                        content:
                            "An example with the upcoming-inactive variant.",
                    },
                    {
                        title: "Error",
                        variant: "error",
                        content: "An example with the error variant.",
                    },
                    {
                        title: "Disabled",
                        variant: "disabled",
                        content: "An example with the disabled variant.",
                    },
                ]}
            />
        </div>
    );
}
