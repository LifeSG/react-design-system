"use client";
import {
    Schedule,
    type ScheduleEntityProps,
} from "@lifesg/react-design-system/schedule";

const INITIAL_DATE = "2026-06-01";

const serviceData: ScheduleEntityProps[] = [
    {
        id: "service-a",
        name: "Service A",
        slots: [
            {
                id: "a1",
                date: INITIAL_DATE,
                startTime: "09:00",
                endTime: "10:00",
                status: "booked",
                capacity: 10,
                booked: 7,
            },
            {
                id: "a2",
                date: INITIAL_DATE,
                startTime: "11:00",
                endTime: "12:00",
                status: "available",
                capacity: 10,
                booked: 0,
            },
            {
                id: "a3",
                date: INITIAL_DATE,
                startTime: "14:00",
                endTime: "15:00",
                status: "blocked",
            },
            {
                id: "a4",
                date: "2026-06-03",
                startTime: "10:00",
                endTime: "11:00",
                status: "booked",
                capacity: 8,
                booked: 5,
            },
        ],
    },
    {
        id: "service-b",
        name: "Service B",
        slots: [
            {
                id: "b1",
                date: INITIAL_DATE,
                startTime: "09:00",
                endTime: "10:30",
                status: "blocked",
            },
            {
                id: "b2",
                date: INITIAL_DATE,
                startTime: "12:00",
                endTime: "13:00",
                status: "pending",
                capacity: 5,
                booked: 2,
            },
            {
                id: "b3",
                date: "2026-06-02",
                startTime: "14:00",
                endTime: "15:00",
                status: "available",
                capacity: 6,
                booked: 0,
            },
        ],
    },
    {
        id: "service-c",
        name: "Service C",
        slots: [
            {
                id: "c1",
                date: INITIAL_DATE,
                startTime: "09:00",
                endTime: "10:00",
                status: "available",
                capacity: 6,
                booked: 1,
            },
            {
                id: "c2",
                date: INITIAL_DATE,
                startTime: "13:00",
                endTime: "14:00",
                status: "booked",
                capacity: 6,
                booked: 5,
            },
        ],
    },
    {
        id: "service-d",
        name: "Service D",
        slots: [
            {
                id: "d1",
                date: INITIAL_DATE,
                startTime: "09:00",
                endTime: "10:00",
                status: "pending",
                capacity: 4,
                booked: 2,
            },
            {
                id: "d2",
                date: INITIAL_DATE,
                startTime: "15:00",
                endTime: "16:00",
                status: "available",
                capacity: 4,
                booked: 0,
            },
        ],
    },
];

export default function Story() {
    return (
        <div className="story-background">
            <Schedule
                data-testid="schedule"
                date={INITIAL_DATE}
                serviceData={serviceData}
                minTime="08:00"
                maxTime="18:00"
                blockedMessage="Not available"
                onPreviousDayClick={() => {}}
                onNextDayClick={() => {}}
                onCalendarDateSelect={() => {}}
                onTodayClick={() => {}}
            />
        </div>
    );
}
