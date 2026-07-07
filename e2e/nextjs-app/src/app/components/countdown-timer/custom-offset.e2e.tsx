"use client";
import { CountdownTimer } from "@lifesg/react-design-system/countdown-timer";
import { useState } from "react";
import styles from "./countdown-timer.module.css";

export default function Story() {
    const [timestamp] = useState(() => Date.now() + 2 * 60 * 1000);

    return (
        <>
            <div className={styles["top-container"]} />
            <CountdownTimer
                data-testid="countdown-timer"
                timestamp={timestamp}
                notifyTimer={60}
                show
                offset={{ top: 16, right: 16, left: 16 }}
                mobileOffset={{ top: 16 }}
            />
            <div className={styles["bottom-container"]} />
        </>
    );
}
