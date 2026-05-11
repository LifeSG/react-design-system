"use client";

import { Calendar } from "@lifesg/react-design-system/calendar";
import { useState } from "react";

const DISABLED_DATES = ["2026-04-10", "2026-04-15", "2026-04-20"];

export default function Story() {
    const [selectedDate, setSelectedDate] = useState<string>("");

    return (
        <div className="story-column-container">
            <Calendar
                data-testid="calendar-disabled-dates"
                value={selectedDate}
                disabledDates={DISABLED_DATES}
                onChange={setSelectedDate}
            />
            <p data-testid="selected-value">{selectedDate || "none"}</p>
        </div>
    );
}
