"use client";
import { Layout } from "@lifesg/react-design-system";
import { Timeline } from "@lifesg/react-design-system/timeline";

const ITEMS: React.ComponentProps<typeof Timeline>["items"] = [
    {
        title: "Step 1",
        content:
            "Complete the first step by gathering all required documents and submitting them through the online portal.",
    },
    {
        title: "Step 2",
        content:
            "Continue with the second step by reviewing your submission and making any necessary corrections before proceeding.",
    },
    {
        title: "Step 3",
        content:
            "Await confirmation from the relevant authority and follow up if you do not receive a response within five working days.",
    },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <Layout.Content type="grid">
                <Timeline
                    data-testid="timeline-default"
                    title="Default"
                    items={ITEMS}
                />
            </Layout.Content>
            <Layout.Content type="grid">
                <Timeline
                    data-testid="timeline-narrow"
                    title="Narrow (3 columns)"
                    startCol={1}
                    colSpan={3}
                    items={ITEMS}
                />
                <Timeline
                    data-testid="timeline-wide"
                    title="Wide (9 columns)"
                    startCol={4}
                    colSpan={9}
                    items={ITEMS}
                />
            </Layout.Content>
        </div>
    );
}
