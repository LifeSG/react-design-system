"use client";

import { Overlay } from "@lifesg/react-design-system/overlay";
import styles from "./overlay.module.css";

export default function Story() {
    return (
        <>
            <div className={styles["page-content"]}>
                <p>Page content behind overlay</p>
            </div>
            <Overlay show backgroundBlur={false}>
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
