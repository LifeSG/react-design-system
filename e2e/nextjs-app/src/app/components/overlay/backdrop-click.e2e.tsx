"use client";

import { Overlay } from "@lifesg/react-design-system/overlay";
import { useState } from "react";
import styles from "./overlay.module.css";

export default function Story() {
    const [dismissCount, setDismissCount] = useState(0);

    return (
        <>
            <Overlay
                show
                enableOverlayClick
                onOverlayClick={() => {
                    setDismissCount((c) => c + 1);
                }}
            >
                <div
                    data-testid="overlay-modal-content"
                    className={styles["overlay-modal-content"]}
                >
                    <p data-testid="dismiss-count">{dismissCount}</p>
                </div>
            </Overlay>
        </>
    );
}
