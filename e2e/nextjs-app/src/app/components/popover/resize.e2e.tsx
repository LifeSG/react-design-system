"use client";

import { PopoverTrigger } from "@lifesg/react-design-system/popover-v2";
import styles from "./popover.module.css";

export default function Story() {
    return (
        <div className={styles["resize-offset"]}>
            <PopoverTrigger
                position="top"
                enableFlip={false}
                enableResize
                overflow="scroll"
                popoverAriaLabel="Resize details"
                popoverContent={
                    <div
                        data-testid="popover-content"
                        className={styles["resize-long-content"]}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec suscipit auctor dui, sed facilisis ipsum. Donec a
                        semper nisl. Donec suscipit auctor dui, sed facilisis
                        ipsum. Donec a semper nisl.
                    </div>
                }
            >
                <button data-testid="popover-trigger" type="button">
                    Resize popover trigger
                </button>
            </PopoverTrigger>
        </div>
    );
}
