"use client";

import { Overlay } from "@lifesg/react-design-system/overlay";
import styles from "./overlay.module.css";

export default function Story() {
    return (
        <>
            <div>
                <p>Start of page content behind overlay</p>
                <div
                    className={styles["page-content-scrollable-placeholder"]}
                ></div>
                <p>End of page content behind overlay</p>
            </div>
            <Overlay show backgroundBlur>
                <div
                    data-testid="overlay-modal-content"
                    className={styles["overlay-modal-content"]}
                >
                    Modal content
                </div>
            </Overlay>
        </>
    );
}
