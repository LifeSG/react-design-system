"use client";

import { Accordion } from "@lifesg/react-design-system/accordion";

import { StoryContent } from "./common";

export default function Story() {
    return (
        <div className="story-column-container">
            <Accordion
                title="Small Accordion item title"
                data-testid="accordion-small"
            >
                <Accordion.Item
                    title="This is the first item"
                    type="small"
                    data-testid="small-item-first"
                >
                    <StoryContent testId="small-item-first-content">
                        Small item first content.
                    </StoryContent>
                </Accordion.Item>
                <Accordion.Item
                    title="This is the second item"
                    type="small"
                    data-testid="small-item-second"
                >
                    <StoryContent testId="small-item-second-content">
                        Small item second content.
                    </StoryContent>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
