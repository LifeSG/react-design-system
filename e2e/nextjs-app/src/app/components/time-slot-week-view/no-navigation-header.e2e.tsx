"use client";

import { Colour } from "@lifesg/react-design-system";
import { TimeSlotWeekView } from "@lifesg/react-design-system/time-slot-week-view";
import type { TimeSlot } from "@lifesg/react-design-system/time-slot-bar";

const SLOTS: { [date: string]: TimeSlot[] } = {
    "2026-04-07": [
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
    "2026-04-09": [
        {
            id: "slot-2",
            startTime: "14:00",
            endTime: "15:00",
            clickable: false,
            styleAttributes: {
                backgroundColor: Colour["bg-disabled"],
            },
        },
    ],
};

export default function Story() {
    return (
        <TimeSlotWeekView
            data-testid="time-slot-week-view"
            currentCalendarDate="2026-04-08"
            slots={SLOTS}
            showNavigationHeader={false}
        />
    );
}
