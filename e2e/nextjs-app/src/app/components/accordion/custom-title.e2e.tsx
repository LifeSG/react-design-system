"use client";

import { Accordion } from "@lifesg/react-design-system/accordion";

import styles from "./accordion.module.css";
import { StoryContent } from "./common";

export default function Story() {
    return (
        <Accordion
            title={
                <span className={styles["custom-element"]}>Custom title</span>
            }
        >
            <Accordion.Item
                title={
                    <span className={styles["custom-element"]}>First item</span>
                }
            >
                <StoryContent testId="accordion-title-item-first-content">
                    First accordion item content.
                </StoryContent>
            </Accordion.Item>
        </Accordion>
    );
}
