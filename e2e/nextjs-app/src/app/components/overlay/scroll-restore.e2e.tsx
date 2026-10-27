"use client";

import { Overlay } from "@lifesg/react-design-system/overlay";
import { useState } from "react";

import styles from "./overlay.module.css";

export default function Story() {
    const [show, setShow] = useState(false);
    const [disableScrollRestore, setDisableScrollRestore] = useState(false);

    // Simulates navigating behind a loading overlay, then scrolling the new
    // page to the top
    const handleNextPage = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
            window.scrollTo({ top: 0 });
        }, 500);
    };

    return (
        <>
            <div>
                <label>
                    <input
                        type="checkbox"
                        data-testid="disable-scroll-restore-checkbox"
                        checked={disableScrollRestore}
                        onChange={(e) =>
                            setDisableScrollRestore(e.target.checked)
                        }
                    />
                    disableScrollRestore
                </label>
                <div className={styles["page-content-scrollable"]}>
                    Tall page content
                </div>
                <button
                    type="button"
                    data-testid="next-page-button"
                    onClick={handleNextPage}
                >
                    Next page
                </button>
            </div>
            <Overlay
                show={show}
                backgroundBlur={false}
                disableScrollRestore={disableScrollRestore}
            >
                <div
                    data-testid="overlay-modal-content"
                    className={styles["overlay-modal-content"]}
                >
                    Loading...
                </div>
            </Overlay>
        </>
    );
}
