"use client";

import { TimeSlotBar } from "@lifesg/react-design-system/time-slot-bar";
import type { TimeSlot } from "@lifesg/react-design-system/time-slot-bar";

const slots: TimeSlot[] = [
    {
        id: "slot-1",
        startTime: "08:30",
        endTime: "09:30",
        label: "Morning",
        styleAttributes: {
            backgroundColor: "#57A9FF",
            color: "#FFFFFF",
        },
    },
    {
        id: "slot-2",
        startTime: "15:00",
        endTime: "16:30",
        label: "Afternoon",
        styleAttributes: {
            backgroundColor: "#F08A5D",
            color: "#FFFFFF",
        },
    },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <TimeSlotBar
                data-testid="time-slot-bar"
                startTime="00:00"
                endTime="24:00"
                initialScrollTime="08:00"
                slots={slots}
                onSlotClick={() => {
                    // noop
                }}
                styleAttributes={{
                    styleType: "stripes",
                    backgroundColor: "#F4F7FA",
                    backgroundColor2: "#E9EDF2",
                }}
            />
        </div>
    );
}
