"use client";

import { TimeSlotBarWeek } from "@lifesg/react-design-system/time-slot-bar-week";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <TimeSlotBarWeek
                data-testid="time-slot-bar-week"
                slots={{}}
                maxDate="2026-05-26"
                minDate="2026-03-22"
            />
        </div>
    );
}
