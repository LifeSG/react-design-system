"use client";
import {
    Schedule,
    type ScheduleEntityProps,
} from "@lifesg/react-design-system/schedule";

const DATE = "2026-06-01";

const serviceData: ScheduleEntityProps[] = [
    {
        id: "service-a",
        name: "Service A",
        slots: [
            {
                id: "a1",
                date: DATE,
                startTime: "08:00",
                endTime: "09:00",
                status: "booked",
                capacity: 5,
                booked: 3,
            },
            {
                id: "a2",
                date: DATE,
                startTime: "14:00",
                endTime: "15:00",
                status: "available",
                capacity: 5,
                booked: 0,
            },
        ],
    },
];

export default function Story() {
    return (
        <div>
            <Schedule
                data-testid="schedule"
                date={DATE}
                serviceData={serviceData}
                minTime="06:00"
                maxTime="22:00"
                initialScrollTime="12:00"
                onPreviousDayClick={() => {}}
                onNextDayClick={() => {}}
                onCalendarDateSelect={() => {}}
                onTodayClick={() => {}}
            />
        </div>
    );
}
