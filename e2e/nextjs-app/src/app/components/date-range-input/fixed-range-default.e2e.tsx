"use client";

import { DateRangeInput } from "@lifesg/react-design-system/date-range-input";
import { useState } from "react";
import styles from "./date-range-input.module.css";

export default function Story() {
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    return (
        <div className={styles.story}>
            <DateRangeInput
                data-testid="date-range-input"
                variant="fixed-range"
                numberOfDays={7}
                value={startDate}
                valueEnd={endDate}
                onChange={(start, end) => {
                    setStartDate(start);
                    setEndDate(end);
                }}
            />
            <div
                data-testid="selected-values"
                className={styles["selected-values"]}
            >
                <p data-testid="selected-start">{startDate || "none"}</p>
                <p data-testid="selected-end">{endDate || "none"}</p>
            </div>
        </div>
    );
}
