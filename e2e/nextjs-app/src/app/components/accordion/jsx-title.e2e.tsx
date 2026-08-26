"use client";

import { Accordion } from "@lifesg/react-design-system/accordion";

import { StoryContent } from "./common";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <Accordion
                title={
                    <span>
                        Custom <strong>JSX</strong> title
                    </span>
                }
                data-testid="accordion-jsx-title"
            >
                <Accordion.Item
                    title="First item"
                    data-testid="accordion-jsx-title-item-first"
                >
                    <StoryContent testId="accordion-jsx-title-item-first-content">
                        First accordion item content.
                    </StoryContent>
                </Accordion.Item>
                <Accordion.Item
                    title="Second item"
                    data-testid="accordion-jsx-title-item-second"
                >
                    <StoryContent testId="accordion-jsx-title-item-second-content">
                        Second accordion item content.
                    </StoryContent>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
