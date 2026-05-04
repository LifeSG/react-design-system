"use client";
import { BoxContainer } from "@lifesg/react-design-system/box-container";
import styles from "./box-container.module.css";

export default function Story() {
    return (
        <div className="story-column-container">
            <BoxContainer
                title="Title"
                collapsible={true}
                expanded={false}
                data-testid="box-container-collapsed"
            >
                <div className={styles.content} data-testid="content-collapsed">
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </BoxContainer>

            <BoxContainer
                title="Title"
                collapsible={true}
                expanded={true}
                data-testid="box-container-expanded"
            >
                <div className={styles.content} data-testid="content-expanded">
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </BoxContainer>
        </div>
    );
}
