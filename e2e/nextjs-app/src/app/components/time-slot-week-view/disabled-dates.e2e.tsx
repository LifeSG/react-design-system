"use client";

import { useState } from "react";
import { Colour } from "@lifesg/react-design-system";
import { TimeSlotWeekView } from "@lifesg/react-design-system/time-slot-week-view";
import type { TimeSlot } from "@lifesg/react-design-system/time-slot-bar";

const DISABLED_DATES = ["2026-04-07", "2026-04-09"];

const SLOTS: { [date: string]: TimeSlot[] } = {
    "2026-04-06": [
        {
            id: "slot-1",
            startTime: "09:00",
            endTime: "10:00",
            clickable: true,
            styleAttributes: {
                backgroundColor: Colour["bg-available"],
            },
        },
    ],
    "2026-04-07": [
        {
            id: "slot-2",
            startTime: "10:00",
            endTime: "11:00",
            clickable: true,
            styleAttributes: {
                backgroundColor: Colour["bg-available"],
            },
        },
    ],
    "2026-04-08": [
        {
            id: "slot-3",
            startTime: "14:00",
            endTime: "15:00",
            clickable: true,
            styleAttributes: {
                backgroundColor: Colour["bg-available"],
            },
        },
    ],
};

export default function Story() {
    const [selectedDate, setSelectedDate] = useState<string>("");

    return (
        <div className="story-column-container story-background">
            <TimeSlotWeekView
                data-testid="time-slot-week-view"
                value={selectedDate}
                onChange={setSelectedDate}
                currentCalendarDate="2026-04-08"
                disabledDates={DISABLED_DATES}
                slots={SLOTS}
            />
            <p data-testid="selected-value">{selectedDate || "none"}</p>
        </div>
    );
}
