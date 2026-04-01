"use client";

import { Overlay } from "@lifesg/react-design-system/overlay";
import { useState } from "react";
import styles from "./overlay.module.css";

export default function Story() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div>
                <p>Start of page content behind overlay</p>
                <div className={styles["page-content-scrollable"]}>
                    Tall page content
                </div>
                <p data-testid="scroll-lock-page-bottom">
                    End of page content behind overlay
                </p>
                <button
                    type="button"
                    data-testid="toggle-overlay-button"
                    onClick={() => setShow((prev) => !prev)}
                >
                    Toggle overlay
                </button>
            </div>
            <Overlay
                show={show}
                backgroundBlur={false}
                onOverlayClick={() => setShow(false)}
                enableOverlayClick
            >
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
