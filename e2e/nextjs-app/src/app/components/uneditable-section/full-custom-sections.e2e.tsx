"use client";

import { Alert } from "@lifesg/react-design-system/alert";
import { Button } from "@lifesg/react-design-system/button";
import { UneditableSection } from "@lifesg/react-design-system/uneditable-section";
import { UneditableItemSection } from "@lifesg/react-design-system/uneditable-section/item-section";
import { UneditableSectionItem } from "@lifesg/react-design-system/uneditable-section/section-item";
import styles from "./full-custom-sections.module.css";

export default function Story() {
    return (
        <UneditableSection>
            <div className={styles["custom-style-1"]}>
                <div className={styles["custom-style-2"]}>
                    <h3>My custom content</h3>
                    <Button styleType="light">Custom button</Button>
                </div>
                <div className={styles["custom-style-3"]}>
                    <Alert type="warning">Custom alert</Alert>
                </div>
                <p className={styles["custom-style-3"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam pellentesque enim eu neque gravida, ut pulvinar magna
                    tristique. Aenean sed malesuada arcu. Integer convallis
                    dapibus suscipit.
                </p>
                <UneditableItemSection>
                    <UneditableSectionItem
                        displayWidth="half"
                        label="Name (as in NRIC or passport)"
                        value="Tom Tan Li Ho"
                    />
                    <UneditableSectionItem
                        displayWidth="half"
                        label="NRIC or FIN"
                        value="S••••534J"
                    />
                    <UneditableSectionItem
                        label="Residential Address"
                        value="Block 287, #05-11, Tampines street 22, Singapore 534788"
                    />
                </UneditableItemSection>
                <h3 className={styles["custom-style-2"]}>Another section</h3>
                <UneditableItemSection>
                    <UneditableSectionItem
                        label="Custom content list"
                        value={
                            <ul>
                                <li>Option 1</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                            </ul>
                        }
                    />
                </UneditableItemSection>
            </div>
        </UneditableSection>
    );
}
