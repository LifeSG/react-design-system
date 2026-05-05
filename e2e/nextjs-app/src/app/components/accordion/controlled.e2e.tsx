"use client";

import { useState } from "react";

import { Accordion } from "@lifesg/react-design-system/accordion";

import { StoryContent } from "./common";

export default function Story() {
    const [isFirstExpanded, setIsFirstExpanded] = useState<boolean>(false);

    return (
        <div className="story-column-container">
            <div className="story-row-container">
                <button
                    type="button"
                    data-testid="controlled-open-first"
                    onClick={() => setIsFirstExpanded(true)}
                >
                    Open first item
                </button>
                <button
                    type="button"
                    data-testid="controlled-close-first"
                    onClick={() => setIsFirstExpanded(false)}
                >
                    Close first item
                </button>
            </div>

            <Accordion
                title="Controlled Accordion"
                enableExpandAll={false}
                data-testid="accordion-controlled"
            >
                <Accordion.Item
                    title="Controlled item"
                    expanded={isFirstExpanded}
                    data-testid="controlled-item"
                >
                    <StoryContent testId="controlled-item-content">
                        Controlled item content.
                    </StoryContent>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
