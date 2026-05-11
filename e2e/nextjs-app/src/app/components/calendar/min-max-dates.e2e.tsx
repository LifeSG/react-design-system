"use client";

import { Calendar } from "@lifesg/react-design-system/calendar";
import { useState } from "react";

export default function Story() {
    const [selectedDate, setSelectedDate] = useState<string>("");

    return (
        <div className="story-column-container">
            <Calendar
                data-testid="calendar"
                value={selectedDate}
                minDate="2026-04-10"
                maxDate="2026-04-20"
                onChange={setSelectedDate}
            />
            <p data-testid="selected-value">{selectedDate || "none"}</p>
        </div>
    );
}
