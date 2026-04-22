import { ScheduleEntityProps } from "src/schedule";

const getRelativeDate = (daysFromToday: number): string => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromToday);
    return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD format
};

export const mockScheduleData: ScheduleEntityProps[] = [
    {
        id: "1",
        name: "Judge Abigail Ng Si Hui",
        slots: [
            {
                id: "1-1",
                date: getRelativeDate(0),
                startTime: "09:00",
                endTime: "09:30",
                status: "booked",
                capacity: 5,
                booked: 2,
            },
            {
                id: "1-2",
                date: getRelativeDate(0),
                startTime: "13:30",
                endTime: "14:00",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            {
                id: "1-3",
                date: getRelativeDate(1),
                startTime: "09:00",
                endTime: "10:30",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            {
                id: "1-4",
                date: getRelativeDate(2),
                startTime: "15:00",
                endTime: "15:30",
                status: "pending",
                capacity: 2,
                booked: 2,
            },
        ],
    },
    {
        id: "2",
        name: "A very long title that should be truncated, a very long title that should be truncated",
        slots: [
            {
                id: "2-1",
                date: getRelativeDate(0),
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            {
                id: "2-2",
                date: getRelativeDate(0),
                startTime: "09:30",
                endTime: "11:30",
                status: "blocked",
                capacity: 2,
                booked: 2,
            },
            {
                id: "2-3",
                date: getRelativeDate(1),
                startTime: "09:15",
                endTime: "09:30",
                status: "blocked",
                customPopover: {
                    trigger: "click",
                    content: (
                        <div>
                            <h4>Booking Details</h4>
                            <p>Time: 9:15 AM - 9:30 AM</p>
                            <p>Blocked</p>
                        </div>
                    ),
                    delay: { open: 150, close: 200 },
                },
            },
            {
                id: "2-6",
                date: getRelativeDate(1),
                startTime: "09:00",
                endTime: "09:15",
                status: "pending",
                booked: 4,
                capacity: 4,
                customPopover: {
                    trigger: "click",
                    content: "Service pending during this time period.",
                },
            },
            {
                id: "2-5",
                date: getRelativeDate(1),
                startTime: "15:30",
                endTime: "16:45",
                status: "pending",
                capacity: 5,
                booked: 5,
            },
            {
                id: "2-4",
                date: getRelativeDate(2),
                startTime: "10:00",
                endTime: "11:00",
                status: "available",
                capacity: 3,
                booked: 0,
            },
        ],
    },
    {
        id: "3",
        name: "C",
        slots: [
            {
                id: "3-1",
                date: getRelativeDate(0),
                startTime: "09:00",
                endTime: "09:30",
                status: "blocked",
            },
            {
                id: "3-2",
                date: getRelativeDate(0),
                startTime: "09:30",
                endTime: "10:00",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            {
                id: "3-3",
                date: getRelativeDate(0),
                startTime: "10:00",
                endTime: "10:30",
                status: "booked",
                capacity: 2,
                booked: 2,
            },
            {
                id: "3-4",
                date: getRelativeDate(2),
                startTime: "14:00",
                endTime: "15:00",
                status: "available",
                capacity: 4,
                booked: 1,
            },
        ],
    },
    {
        id: "4",
        name: "D",
        slots: [
            {
                id: "4-1",
                date: getRelativeDate(1),
                startTime: "09:15",
                endTime: "09:30",
                status: "available",
                capacity: 5,
                booked: 0,
            },
        ],
    },
    {
        id: "5",
        name: "E",
        slots: [
            {
                id: "5-1",
                date: getRelativeDate(1),
                startTime: "09:00",
                endTime: "10:00",
                status: "available",
                capacity: 5,
                booked: 0,
            },
        ],
    },
    {
        id: "6",
        name: "F",
        slots: [
            {
                id: "6-1",
                date: getRelativeDate(1),
                startTime: "09:00",
                endTime: "09:30",
                status: "booked",
                capacity: 2,
                booked: 2,
            },
        ],
    },
    {
        id: "7",
        name: "G",
        slots: [
            {
                id: "7-1",
                date: getRelativeDate(1),
                startTime: "09:15",
                endTime: "09:45",
                status: "pending",
                capacity: 3,
                booked: 1,
            },
        ],
    },
    {
        id: "8",
        name: "H",
        slots: [
            {
                id: "8-1",
                date: getRelativeDate(1),
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 2,
                booked: 0,
            },
            {
                id: "8-2",
                date: getRelativeDate(1),
                startTime: "09:30",
                endTime: "10:00",
                status: "blocked",
                capacity: 3,
                booked: 2,
            },
            {
                id: "8-3",
                date: getRelativeDate(0),
                startTime: "08:00",
                endTime: "08:30",
                status: "pending",
                capacity: 1,
                booked: 1,
            },
        ],
    },
    {
        id: "9",
        name: "I",
        slots: [
            // Day after tomorrow (1 slot)
            {
                id: "9-1",
                date: getRelativeDate(2),
                startTime: "14:00",
                endTime: "14:30",
                status: "available",
                capacity: 10,
                booked: 3,
            },
        ],
    },
    {
        id: "10",
        name: "J",
        slots: [
            {
                id: "10-1",
                date: getRelativeDate(0),
                startTime: "16:00",
                endTime: "16:30",
                status: "available",
                capacity: 8,
                booked: 2,
            },
            {
                id: "10-2",
                date: getRelativeDate(1),
                startTime: "16:00",
                endTime: "16:30",
                status: "booked",
                capacity: 8,
                booked: 8,
            },
            {
                id: "10-3",
                date: getRelativeDate(2),
                startTime: "16:00",
                endTime: "16:30",
                status: "blocked",
                capacity: 8,
                booked: 0,
            },
        ],
    },
    {
        id: "11",
        name: "K",
        slots: [
            {
                id: "slot-1",
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 5,
                booked: 2,
                date: getRelativeDate(0),
                customPopover: {
                    trigger: "click",
                    content: (
                        <div>
                            <h4>Booking Details</h4>
                            <p>Time: 9:00 AM - 9:30 AM</p>
                            <p>Available: 3 spots remaining</p>
                        </div>
                    ),
                    delay: { open: 150, close: 200 },
                },
            },
            {
                id: "slot-2",
                startTime: "10:00",
                endTime: "10:30",
                status: "booked",
                capacity: 3,
                booked: 3,
                date: getRelativeDate(0),
                customPopover: {
                    trigger: "hover",
                    content: "This slot is fully booked. No spots available.",
                    delay: { open: 300, close: 100 },
                },
            },
            {
                id: "slot-3",
                startTime: "14:00",
                endTime: "15:00",
                status: "blocked",
                capacity: 0,
                booked: 0,
                date: getRelativeDate(0),
                customPopover: {
                    trigger: "click",
                    content: "Service unavailable during this time period.",
                },
            },
        ],
    },
];
