"use client";

import { TimeSlotBarWeek } from "@lifesg/react-design-system/time-slot-bar-week";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <TimeSlotBarWeek
                data-testid="time-slot-bar-week-no-header"
                slots={{}}
                showNavigationHeader={false}
            />
        </div>
    );
}
