"use client";

import { DateInput } from "@lifesg/react-design-system/date-input";
import { useState } from "react";
import styles from "./date-input.module.css";

export default function Story() {
    const [selectedDate, setSelectedDate] = useState<string>("");

    return (
        <div className="story-background">
            <div>
                <DateInput
                    data-testid="date-input"
                    value={selectedDate}
                    onChange={setSelectedDate}
                />
            </div>
        </div>
    );
}
