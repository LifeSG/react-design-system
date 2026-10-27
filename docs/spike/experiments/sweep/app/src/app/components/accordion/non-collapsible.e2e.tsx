"use client";

import { Accordion } from "@lifesg/react-design-system/accordion";

import { StoryContent } from "./common";

export default function Story() {
    return (
        <div className="story-column-container">
            <Accordion
                title="No expand collapse all"
                enableExpandAll={false}
                data-testid="accordion-non-collapsible"
            >
                <Accordion.Item
                    title="Fixed item"
                    collapsible={false}
                    data-testid="non-collapsible-item"
                >
                    <StoryContent testId="non-collapsible-item-content">
                        This item stays expanded.
                    </StoryContent>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
