"use client";
import { Timeline } from "@lifesg/react-design-system/timeline";

export default function Story() {
    return (
        <div className="story-background">
            <Timeline
                data-testid="timeline"
                title="Application status"
                items={[
                    {
                        title: "Application submitted",
                        variant: "completed",
                        content: "Your application has been received.",
                        statuses: [
                            {
                                type: "solid",
                                colorType: "green",
                                children: "Submitted",
                            },
                        ],
                    },
                    {
                        title: "Under review",
                        variant: "current",
                        content: "Your application is being reviewed.",
                        statuses: [
                            {
                                type: "outline",
                                colorType: "blue",
                                children: "In progress",
                            },
                            {
                                type: "solid",
                                colorType: "yellow",
                                children:
                                    "Pending documents verification & background check",
                            },
                        ],
                    },
                    {
                        title: "Decision",
                        variant: "upcoming-active",
                        content: "Awaiting final decision.",
                        statuses: [
                            {
                                type: "outline",
                                colorType: "grey",
                                children: "Upcoming",
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
}
