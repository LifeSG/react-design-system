"use client";

import { TimeSlotBar } from "@lifesg/react-design-system/time-slot-bar";
import type { TimeSlot } from "@lifesg/react-design-system/time-slot-bar/types";
import { Colour } from "@lifesg/react-design-system";

const slots: TimeSlot[] = [
    {
        id: "slot-1",
        startTime: "09:00",
        endTime: "10:00",
        styleAttributes: {
            backgroundColor: Colour["bg-available"],
        },
    },
    {
        id: "slot-2",
        startTime: "14:00",
        endTime: "15:30",
        styleAttributes: {
            backgroundColor: Colour["bg-primary"],
        },
    },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <TimeSlotBar
                data-testid="time-slot-bar-minified"
                variant="minified"
                startTime="08:00"
                endTime="22:00"
                slots={slots}
                onSlotClick={() => {
                    // noop
                }}
                styleAttributes={{
                    backgroundColor: "#F5F7FA",
                }}
            />
        </div>
    );
}
