"use client";

import { Accordion } from "@lifesg/react-design-system/accordion";

import { StoryContent } from "./common";

export default function Story() {
    return (
        <div className="story-column-container">
            <Accordion
                title="Title in mobile too"
                showTitleInMobile
                data-testid="accordion-mobile-title"
            >
                <Accordion.Item
                    title="This is the first item"
                    data-testid="mobile-title-first"
                >
                    <StoryContent testId="mobile-title-first-content">
                        Mobile title first content.
                    </StoryContent>
                </Accordion.Item>
                <Accordion.Item
                    title="This is the second item"
                    data-testid="mobile-title-second"
                >
                    <StoryContent testId="mobile-title-second-content">
                        Mobile title second content.
                    </StoryContent>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
