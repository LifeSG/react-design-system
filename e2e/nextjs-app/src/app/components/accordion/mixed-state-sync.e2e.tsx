"use client";

import { Accordion } from "@lifesg/react-design-system/accordion";

import { StoryContent } from "./common";

export default function Story() {
    return (
        <div className="story-column-container">
            <Accordion
                title="Mixed Accordion"
                initialDisplay="collapse-all"
                data-testid="accordion-mixed-state"
            >
                <Accordion.Item
                    title="Parent synced item"
                    data-testid="mixed-parent-synced"
                >
                    <StoryContent testId="mixed-parent-synced-content">
                        Parent synced content.
                    </StoryContent>
                </Accordion.Item>
                <Accordion.Item
                    title="Controlled open item"
                    expanded={true}
                    data-testid="mixed-controlled-open"
                >
                    <StoryContent testId="mixed-controlled-open-content">
                        Controlled open content.
                    </StoryContent>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
