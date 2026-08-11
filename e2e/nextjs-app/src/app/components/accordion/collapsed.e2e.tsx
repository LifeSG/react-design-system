"use client";

import { Accordion } from "@lifesg/react-design-system/accordion";

import { StoryContent } from "./common";

export default function Story() {
    return (
        <div className="story-column-container">
            <Accordion
                title="Collapsed Accordion"
                initialDisplay="collapse-all"
                data-testid="accordion-expand-all"
            >
                <Accordion.Item
                    title="First collapsed item"
                    data-testid="collapsed-first"
                >
                    <StoryContent testId="collapsed-first-content">
                        First collapsed item content.
                    </StoryContent>
                </Accordion.Item>
                <Accordion.Item
                    title="Second collapsed item"
                    data-testid="collapsed-second"
                >
                    <StoryContent testId="collapsed-second-content">
                        Second collapsed item content.
                    </StoryContent>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
