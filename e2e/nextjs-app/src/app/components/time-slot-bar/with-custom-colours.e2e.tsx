"use client";

import { TimeSlotBar } from "@lifesg/react-design-system/time-slot-bar";

export default function Story() {
    return (
        <div
            className="story-column-container"
            data-testid="time-slot-bar-with-custom-colours"
        >
            <TimeSlotBar
                data-testid="time-slot-bar-bg-stripes"
                startTime="08:00"
                endTime="18:00"
                slots={[]}
                onSlotClick={() => {
                    // noop
                }}
                styleAttributes={{
                    styleType: "stripes",
                    backgroundColor: "aqua",
                }}
            />

            <TimeSlotBar
                data-testid="time-slot-bar-bg-stripes-with-secondary"
                startTime="08:00"
                endTime="18:00"
                slots={[]}
                onSlotClick={() => {
                    // noop
                }}
                styleAttributes={{
                    styleType: "stripes",
                    backgroundColor: "aqua",
                    backgroundColor2: "beige",
                    hoverBackgroundColor: "beige",
                    hoverBackgroundColor2: "red",
                }}
            />

            <TimeSlotBar
                data-testid="time-slot-bar-bg-default"
                startTime="08:00"
                endTime="18:00"
                slots={[]}
                onSlotClick={() => {
                    // noop
                }}
                onClick={() => {
                    // noop
                }}
                styleAttributes={{
                    backgroundColor: "aqua",
                    hoverBackgroundColor: "beige",
                }}
            />

            <TimeSlotBar
                data-testid="time-slot-bar-bg-default-with-secondary"
                startTime="08:00"
                endTime="18:00"
                slots={[]}
                onSlotClick={() => {
                    // noop
                }}
                onClick={() => {
                    // noop
                }}
                styleAttributes={{
                    backgroundColor: "aqua",
                    backgroundColor2: "beige",
                    hoverBackgroundColor: "beige",
                    hoverBackgroundColor2: "red",
                }}
            />
        </div>
    );
}
