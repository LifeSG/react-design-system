"use client";

import { TimeSlotBarWeek } from "@lifesg/react-design-system/time-slot-bar-week";

export default function Story() {
    const slots = {
        "2026-05-24": [
            {
                id: "1",
                startTime: "09:00",
                endTime: "10:00",
                styleAttributes: {
                    backgroundColor: "#1565C0",
                },
            },
        ],
        "2026-05-26": [
            {
                id: "2",
                startTime: "10:00",
                endTime: "17:00",
                styleAttributes: {
                    styleType: "stripes" as const,
                    backgroundColor: "#E8F5E9",
                    backgroundColor2: "#C8E6C9",
                },
            },
        ],
        "2026-05-27": [
            {
                id: "3",
                startTime: "11:00",
                endTime: "12:00",
                styleAttributes: {
                    backgroundColor: "#F3E5F5",
                    color: "#7B1FA2",
                },
            },
            {
                id: "4",
                startTime: "16:00",
                endTime: "17:00",
                styleAttributes: {
                    backgroundColor: "#E1BEE7",
                    color: "#4A148C",
                },
            },
        ],
        "2026-05-28": [
            {
                id: "5",
                startTime: "09:00",
                endTime: "12:00",
                styleAttributes: {
                    styleType: "stripes" as const,
                    backgroundColor: "#FFF3E0",
                    backgroundColor2: "#FFE0B2",
                    color: "#E65100",
                },
            },
            {
                id: "6",
                startTime: "14:00",
                endTime: "15:00",
                styleAttributes: {
                    backgroundColor: "#FFCC80",
                    color: "#BF360C",
                },
            },
        ],
    };

    return (
        <div className="story-column-container">
            <TimeSlotBarWeek
                data-testid="time-slot-bar-week-prefilled"
                slots={slots}
                startTime="08:00"
                endTime="18:00"
                currentCalendarDate="2026-05-24"
                disabledDates={["2026-05-25", "2026-05-29"]}
            />
        </div>
    );
}
