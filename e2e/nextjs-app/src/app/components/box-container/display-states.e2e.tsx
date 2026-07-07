"use client";
import { BoxContainer } from "@lifesg/react-design-system/box-container";
import styles from "./box-container.module.css";

export default function Story() {
    return (
        <div className="story-column-container">
            <BoxContainer
                title="Container with error state"
                displayState="error"
                data-testid="box-container-error"
            >
                <div className={styles.content}>
                    <p>
                        This container has an error display state with a red
                        error icon.
                    </p>
                </div>
            </BoxContainer>

            <BoxContainer
                title="Container with warning state"
                displayState="warning"
                data-testid="box-container-warning"
            >
                <div className={styles.content}>
                    <p>
                        This container has a warning display state with an amber
                        warning icon.
                    </p>
                </div>
            </BoxContainer>

            <BoxContainer
                title="Default state (no icon)"
                displayState="default"
                data-testid="box-container-default"
            >
                <div className={styles.content}>
                    <p>
                        This container has default display state with no icon.
                    </p>
                </div>
            </BoxContainer>
        </div>
    );
}
