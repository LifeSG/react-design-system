"use client";

import { TimeSlotBarWeek } from "@lifesg/react-design-system/time-slot-bar-week";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <TimeSlotBarWeek
                data-testid="time-slot-bar-week"
                slots={{}}
                disabledDates={["2026-04-07", "2026-04-10"]}
            />
        </div>
    );
}
