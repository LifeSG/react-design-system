"use client";
import {
    Schedule,
    type ScheduleEntityProps,
} from "@lifesg/react-design-system/schedule";

const INITIAL_DATE = "2026-04-08";
const INITIAL_DATE_PLUS_ONE = "2026-04-09";

const serviceData: ScheduleEntityProps[] = [
    // Service with all slot status types
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
                startTime: "13:30",
                endTime: "14:30",
                status: "blocked",
            },
            {
                id: "a4",
                date: INITIAL_DATE,
                startTime: "15:00",
                endTime: "16:00",
                status: "pending",
                capacity: 8,
                booked: 3,
            },
            // No-overlap sample in week view
            {
                id: "a5",
                date: INITIAL_DATE_PLUS_ONE,
                startTime: "08:00",
                endTime: "09:00",
                status: "available",
                capacity: 6,
                booked: 1,
            },
        ],
    },
    // Service with long title
    {
        id: "service-b",
        name: "Service with an exceptionally long title to test wrapping and truncation behavior in schedule headers",
        slots: [
            {
                id: "b1",
                date: INITIAL_DATE,
                startTime: "09:00",
                endTime: "10:00",
                status: "available",
                capacity: 5,
                booked: 2,
            },
            {
                id: "b2",
                date: INITIAL_DATE_PLUS_ONE,
                startTime: "10:00",
                endTime: "11:00",
                status: "booked",
                capacity: 4,
                booked: 2,
            },
        ],
    },
    // Service with no slots (should render an empty column)
    {
        id: "service-c",
        name: "Service C (No Slots)",
        slots: [],
    },
    // Service with varying slot intervals (15 mins to >1 hour)
    {
        id: "service-d",
        name: "Service D (Mixed Intervals)",
        slots: [
            {
                id: "d1",
                date: INITIAL_DATE,
                startTime: "09:00",
                endTime: "09:15",
                status: "available",
                capacity: 4,
                booked: 1,
            },
            {
                id: "d2",
                date: INITIAL_DATE,
                startTime: "09:15",
                endTime: "09:45",
                status: "pending",
                capacity: 4,
                booked: 2,
            },
            {
                id: "d3",
                date: INITIAL_DATE,
                startTime: "10:00",
                endTime: "11:30",
                status: "blocked",
            },
            {
                id: "d4",
                date: INITIAL_DATE,
                startTime: "12:00",
                endTime: "13:00",
                status: "booked",
                capacity: 4,
                booked: 4,
            },
            {
                id: "d5",
                date: INITIAL_DATE_PLUS_ONE,
                startTime: "13:00",
                endTime: "14:30",
                status: "available",
                capacity: 5,
                booked: 0,
            },
        ],
    },
    // Additional overlap-focused service to ensure hidden-indicator coverage
    {
        id: "service-e",
        name: "Service E",
        slots: [
            {
                id: "e1",
                date: INITIAL_DATE,
                startTime: "09:00",
                endTime: "10:00",
                status: "pending",
                capacity: 3,
                booked: 1,
            },
            {
                id: "e2",
                date: INITIAL_DATE_PLUS_ONE,
                startTime: "16:00",
                endTime: "17:00",
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
                initialScrollTime="08:00"
                blockedMessage="Not available"
                onPreviousDayClick={() => {}}
                onNextDayClick={() => {}}
                onCalendarDateSelect={() => {}}
                onTodayClick={() => {}}
            />
        </div>
    );
}
