"use client";

import { Accordion } from "@lifesg/react-design-system/accordion";

import { StoryContent } from "./common";

export default function Story() {
    return (
        <div className="story-column-container">
            <Accordion title="My Accordion" data-testid="accordion-default">
                <Accordion.Item
                    title="This is the first item"
                    collapsible={false}
                    data-testid="accordion-item-fixed"
                >
                    <StoryContent testId="accordion-item-fixed-content">
                        First accordion item content.
                    </StoryContent>
                </Accordion.Item>
                <Accordion.Item
                    title="This is the second item"
                    data-testid="accordion-item-second"
                >
                    <StoryContent testId="accordion-item-second-content">
                        Second accordion item content.
                    </StoryContent>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
