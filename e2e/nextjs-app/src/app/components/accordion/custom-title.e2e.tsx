"use client";

import { Accordion } from "@lifesg/react-design-system/accordion";

import { StoryContent } from "./common";

export default function Story() {
    return (
        <Accordion
            title={
                <>
                    Custom<span className="highlight-text">&nbsp;title</span>
                </>
            }
            data-testid="accordion-custom-title"
        >
            <Accordion.Item
                title="First item"
                data-testid="accordion-title-item-first"
            >
                <StoryContent testId="accordion-title-item-first-content">
                    First accordion item content.
                </StoryContent>
            </Accordion.Item>
            <Accordion.Item
                title="Second item"
                data-testid="accordion-title-item-second"
            >
                <StoryContent testId="accordion-title-item-second-content">
                    Second accordion item content.
                </StoryContent>
            </Accordion.Item>
        </Accordion>
    );
}
