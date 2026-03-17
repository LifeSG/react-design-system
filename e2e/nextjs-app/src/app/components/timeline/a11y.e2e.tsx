"use client";

import { Timeline } from "@lifesg/react-design-system/timeline";

export default function Story() {
    return (
        <Timeline
            title="Application progress"
            items={[
                {
                    title: "Submit documents",
                    variant: "numeric",
                    content: "Upload your documents for verification.",
                },
                {
                    title: "Review in progress",
                    variant: "current",
                    content: "We are currently reviewing your submission.",
                },
            ]}
        />
    );
}
