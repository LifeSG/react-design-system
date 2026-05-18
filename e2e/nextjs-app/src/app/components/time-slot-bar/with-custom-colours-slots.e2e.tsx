"use client";

import { TimeSlotBar } from "@lifesg/react-design-system/time-slot-bar";
import type { TimeSlot } from "@lifesg/react-design-system/time-slot-bar/types";

const slotsWithDefaultBackground: TimeSlot[] = [
    {
        id: "slot-default",
        startTime: "09:00",
        endTime: "10:00",
        label: "Primary BG",
        styleAttributes: {
            backgroundColor: "#1C7C54",
            hoverBackgroundColor: "#3654A0",
        },
    },
    {
        id: "slot-default-with-secondary",
        startTime: "10:30",
        endTime: "12:00",
        label: "Secondary BG",
        styleAttributes: {
            backgroundColor: "#1C7C54",
            backgroundColor2: "#3654A0",
            hoverBackgroundColor: "#992A6C",
            hoverBackgroundColor2: "#B84691",
        },
    },
    {
        id: "slot-default-label-colour",
        startTime: "15:00",
        endTime: "16:30",
        label: "Label Colour",
        styleAttributes: {
            backgroundColor: "#2B2D42",
            color: "#FFE84A",
        },
    },
];

const slotsWithStripeBackground: TimeSlot[] = [
    {
        id: "slot-stripe",
        startTime: "09:00",
        endTime: "10:00",
        label: "Primary BG",
        styleAttributes: {
            styleType: "stripes",
            backgroundColor: "#1C7C54",
            hoverBackgroundColor: "#3654A0",
        },
    },
    {
        id: "slot-stripe-with-secondary",
        startTime: "10:30",
        endTime: "12:00",
        label: "Secondary BG",
        styleAttributes: {
            styleType: "stripes",
            backgroundColor: "#1C7C54",
            backgroundColor2: "#F1A861",
            hoverBackgroundColor: "#2B2D42",
            hoverBackgroundColor2: "#B84691",
        },
    },
    {
        id: "slot-stripe-label-colour",
        startTime: "15:00",
        endTime: "16:30",
        label: "Label Colour",
        styleAttributes: {
            styleType: "stripes",
            backgroundColor: "#2B2D42",
            backgroundColor2: "#3A3D5B",
            color: "#FFE84A",
        },
    },
];

export default function Story() {
    return (
        <div
            className="story-column-container"
            data-testid="time-slot-bar-with-custom-colours-slots"
        >
            <TimeSlotBar
                data-testid="time-slot-bar-slot-default"
                startTime="08:00"
                endTime="18:00"
                slots={slotsWithDefaultBackground}
                onSlotClick={() => {
                    // noop
                }}
                styleAttributes={{
                    styleType: "stripes",
                    backgroundColor: "black",
                    backgroundColor2: "beige",
                }}
            />

            <TimeSlotBar
                data-testid="time-slot-bar-slot-stripe"
                startTime="08:00"
                endTime="18:00"
                slots={slotsWithStripeBackground}
                onSlotClick={() => {
                    // noop
                }}
                styleAttributes={{
                    styleType: "stripes",
                    backgroundColor: "black",
                    backgroundColor2: "beige",
                }}
            />
        </div>
    );
}
