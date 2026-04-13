"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";
import styles from "./popover.module.css";

export default function Story() {
    return (
        <div className={styles["placement-offset"]}>
            <PopoverTrigger
                position="bottom"
                popoverAriaLabel="Bottom placement details"
                popoverContent={
                    <div data-testid="popover-content">
                        Bottom placement popover content.
                    </div>
                }
            >
                <button type="button" data-testid="popover-trigger">
                    Bottom placement trigger
                </button>
            </PopoverTrigger>
        </div>
    );
}
