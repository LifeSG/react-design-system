"use client";
// Spike 01 / E6, E7: the same two parent-overrides-child pairs on every consumer
// scenario. Timeline title (F8/F9: parent's layer is later) and the textarea error
// (F10: parent's layer is earlier). `.consumer-title` is the app's own override.
import { Textarea } from "@lifesg/react-design-system/input-textarea";
import { Timeline } from "@lifesg/react-design-system/timeline";

export function Pairs() {
    return (
        <>
            <Timeline
                data-testid="timeline"
                title="What's next"
                className="consumer-timeline"
                items={[
                    { title: "Step 1", content: "One" },
                    { title: "Step 2", content: "Two" },
                ]}
            />
            <Textarea
                data-testid="textarea-error-message"
                errorMessage="This field is required"
            />
        </>
    );
}
