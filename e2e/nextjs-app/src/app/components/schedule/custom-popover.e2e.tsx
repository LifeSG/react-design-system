"use client";
import {
    Schedule,
    type ScheduleEntityProps,
} from "@lifesg/react-design-system/schedule";
import styles from "./schedule.module.css";

const DATE = "2026-06-01";

const serviceData: ScheduleEntityProps[] = [
    {
        id: "service-a",
        name: "Service A",
        slots: [
            {
                id: "a1",
                date: DATE,
                startTime: "09:00",
                endTime: "10:00",
                status: "available",
                capacity: 5,
                booked: 2,
                customPopover: {
                    trigger: "hover",
                    content: (
                        <div className={styles["popover-content"]}>
                            Available: 3 / 5
                        </div>
                    ),
                    delay: { open: 0, close: 0 },
                },
            },
            {
                id: "a2",
                date: DATE,
                startTime: "10:30",
                endTime: "11:30",
                status: "booked",
                capacity: 5,
                booked: 5,
            },
        ],
    },
];

export default function Story() {
    return (
        <div className="story-background">
            <Schedule
                data-testid="schedule"
                date={DATE}
                serviceData={serviceData}
                minTime="08:00"
                maxTime="13:00"
                emptySlotPopover={(slot) => ({
                    trigger: "hover",
                    content: (
                        <div className={styles["popover-content"]}>
                            {slot.startTime} - {slot.endTime}
                        </div>
                    ),
                    delay: { open: 0, close: 0 },
                })}
                onPreviousDayClick={() => {}}
                onNextDayClick={() => {}}
                onCalendarDateSelect={() => {}}
                onTodayClick={() => {}}
            />
        </div>
    );
}
