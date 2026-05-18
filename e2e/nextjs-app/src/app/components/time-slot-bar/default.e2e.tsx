"use client";

import {
    TimeSlot,
    TimeSlotBar,
} from "@lifesg/react-design-system/time-slot-bar";
import { useState } from "react";
import { Colour } from "@lifesg/react-design-system";

const slots: TimeSlot[] = [
    {
        id: "slot-a",
        startTime: "09:00",
        endTime: "10:00",
        label: "Available",
        clickable: true,
        styleAttributes: {
            backgroundColor: Colour["bg-available"],
        },
    },
    {
        id: "slot-b",
        startTime: "11:00",
        endTime: "12:00",
        label: "Blocked",
        clickable: false,
        styleAttributes: {
            backgroundColor: Colour["bg-disabled"],
        },
    },
];

export default function Story() {
    const [slotClickResult, setSlotClickResult] = useState("none");

    return (
        <div className="story-column-container">
            <TimeSlotBar
                data-testid="time-slot-bar"
                startTime="08:00"
                endTime="18:00"
                slots={slots}
                onSlotClick={(slot) => {
                    setSlotClickResult(slot.id);
                }}
            />
            <p data-testid="slot-click-result">slot: {slotClickResult}</p>
        </div>
    );
}
