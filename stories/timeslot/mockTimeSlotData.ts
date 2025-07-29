import { TimeSlotRowData } from "src/timeslot";

export const mockTimeSlotData: TimeSlotRowData[] = [
    {
        id: "1",
        name: "Judge Ahmad Bin Yusof",
        rowCells: [
            // Monday - 2025-07-21
            {
                id: "1-1",
                date: "2025-07-21",
                startTime: "09:00",
                endTime: "09:30",
                status: "booked",
                capacity: 5,
                booked: 2,
            },
            {
                id: "1-2",
                date: "2025-07-21",
                startTime: "13:30",
                endTime: "14:00",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            // Tuesday - 2025-07-22
            {
                id: "1-3",
                date: "2025-07-22",
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            // Wednesday - 2025-07-23
            {
                id: "1-4",
                date: "2025-07-23",
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
        name: "Service B",
        rowCells: [
            // Monday - 2025-07-21
            {
                id: "2-1",
                date: "2025-07-21",
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            {
                id: "2-2",
                date: "2025-07-21",
                startTime: "09:30",
                endTime: "10:30",
                status: "blocked",
                capacity: 2,
                booked: 2,
            },
            // Tuesday - 2025-07-22
            {
                id: "2-3",
                date: "2025-07-22",
                startTime: "09:00",
                endTime: "09:30",
                status: "blocked",
            },
            {
                id: "2-5",
                date: "2025-07-22",
                startTime: "09:30",
                endTime: "10:45",
                status: "pending",
                capacity: 5,
                booked: 5,
            },
            // Thursday - 2025-07-24
            {
                id: "2-4",
                date: "2025-07-24",
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
        name: "Title with a very long service name limited to 2 lines  with a very long service name limited to 2 lines ",
        rowCells: [
            // Monday - 2025-07-21 (multiple overlapping slots)
            {
                id: "3-1",
                date: "2025-07-21",
                startTime: "09:00",
                endTime: "09:30",
                status: "blocked",
            },
            {
                id: "3-2",
                date: "2025-07-21",
                startTime: "09:30",
                endTime: "10:00",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            {
                id: "3-3",
                date: "2025-07-21",
                startTime: "10:00",
                endTime: "10:30",
                status: "booked",
                capacity: 2,
                booked: 2,
            },
            // Wednesday - 2025-07-23
            {
                id: "3-4",
                date: "2025-07-23",
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
        name: "Service D",
        rowCells: [
            // Tuesday - 2025-07-22 (multiple overlapping slots to test +button)
            {
                id: "4-1",
                date: "2025-07-22",
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 5,
                booked: 0,
            },
        ],
    },
    {
        id: "5",
        name: "Service E",
        rowCells: [
            // Tuesday - 2025-07-22 (to test overlapping with Service D)
            // This slot spans from 9:00-10:00, should only appear in 9:00-9:30 slot
            {
                id: "5-1",
                date: "2025-07-22",
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
        name: "Service F",
        rowCells: [
            // Tuesday - 2025-07-22 (to test more than 3 overlapping slots)
            {
                id: "6-1",
                date: "2025-07-22",
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
        name: "Service G",
        rowCells: [
            // Tuesday - 2025-07-22 (5th service to test + button)
            {
                id: "7-1",
                date: "2025-07-22",
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
        name: "Service H",
        rowCells: [
            // Tuesday - 2025-07-22 (6th service to test + button more)
            {
                id: "8-1",
                date: "2025-07-22",
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 2,
                booked: 0,
            },
            // Add a slot that starts in 9:30-10:00 time slot
            {
                id: "8-2",
                date: "2025-07-22",
                startTime: "09:30",
                endTime: "10:00",
                status: "blocked",
                capacity: 3,
                booked: 2,
            },
            {
                id: "8-3",
                date: "2025-07-21",
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 2,
                booked: 0,
            },
        ],
    },
];
