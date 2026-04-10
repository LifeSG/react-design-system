"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";
import styles from "./popover.module.css";

export default function Story() {
    return (
        <div className={styles["scroll-position-page"]}>
            <div className={styles["scroll-position-anchor"]}>
                <PopoverTrigger
                    position="top"
                    popoverAriaLabel="Scroll position details"
                    popoverContent={
                        <div data-testid="popover-content">
                            Scroll position popover content.
                        </div>
                    }
                >
                    <button type="button" data-testid="popover-trigger">
                        Scroll position trigger
                    </button>
                </PopoverTrigger>
            </div>
        </div>
    );
}
