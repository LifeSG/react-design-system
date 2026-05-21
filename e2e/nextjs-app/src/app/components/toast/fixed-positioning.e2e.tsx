"use client";

import { Toast } from "@lifesg/react-design-system/toast";
import styles from "./toast.module.css";

export default function Story() {
    return (
        <div
            data-testid="fixed-positioning-page"
            className={styles["page-content-scrollable"]}
        >
            <Toast
                data-testid="toast-fixed"
                type="warning"
                title="Fixed toast"
                label="This toast should remain fixed at the top while scrolling."
            />
        </div>
    );
}
