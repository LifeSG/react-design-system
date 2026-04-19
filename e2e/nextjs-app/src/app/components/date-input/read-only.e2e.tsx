"use client";

import { DateInput } from "@lifesg/react-design-system/date-input";
import styles from "./date-input.module.css";

export default function Story() {
    return (
        <div className={styles.story}>
            <DateInput data-testid="date-input" readOnly value="2026-04-08" />
        </div>
    );
}
