import { ScheduleRowData } from "src/schedule";

export const mockScheduleData: ScheduleRowData[] = [
    {
        id: "1",
        name: "Judge Ahmad Bin Yusof",
        rowCells: [
            // Monday - 2025-08-03
            {
                id: "1-1",
                date: "2025-08-03",
                startTime: "09:00",
                endTime: "09:30",
                status: "booked",
                capacity: 5,
                booked: 2,
            },
            {
                id: "1-2",
                date: "2025-08-03",
                startTime: "13:30",
                endTime: "14:00",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            // Tuesday - 2025-08-04
            {
                id: "1-3",
                date: "2025-08-04",
                startTime: "09:00",
                endTime: "10:30",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            // Wednesday - 2025-08-05
            {
                id: "1-4",
                date: "2025-08-05",
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
            // Monday - 2025-08-03
            {
                id: "2-1",
                date: "2025-08-03",
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            {
                id: "2-2",
                date: "2025-08-03",
                startTime: "09:30",
                endTime: "10:30",
                status: "blocked",
                capacity: 2,
                booked: 2,
            },
            // Tuesday - 2025-08-04
            {
                id: "2-3",
                date: "2025-08-04",
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
            // Tuesday - 2025-08-04
            {
                id: "2-6",
                date: "2025-08-04",
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
                date: "2025-08-04",
                startTime: "15:30",
                endTime: "16:45",
                status: "pending",
                capacity: 5,
                booked: 5,
            },
            // Thursday - 2025-08-05
            {
                id: "2-4",
                date: "2025-08-05",
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
            // Monday - 2025-08-03 (multiple overlapping slots)
            {
                id: "3-1",
                date: "2025-08-03",
                startTime: "09:00",
                endTime: "09:30",
                status: "blocked",
            },
            {
                id: "3-2",
                date: "2025-08-03",
                startTime: "09:30",
                endTime: "10:00",
                status: "available",
                capacity: 5,
                booked: 0,
            },
            {
                id: "3-3",
                date: "2025-08-03",
                startTime: "10:00",
                endTime: "10:30",
                status: "booked",
                capacity: 2,
                booked: 2,
            },
            // Wednesday - 2025-08-05
            {
                id: "3-4",
                date: "2025-08-05",
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
            // Tuesday - 2025-08-04 (multiple overlapping slots to test +button)
            {
                id: "4-1",
                date: "2025-08-04",
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
        name: "Service E",
        rowCells: [
            // Tuesday - 2025-08-04 (to test overlapping with Service D)
            // This slot spans from 9:00-10:00, should only appear in 9:00-9:30 slot
            {
                id: "5-1",
                date: "2025-08-04",
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
            // Tuesday - 2025-08-04 (to test more than 3 overlapping slots)
            {
                id: "6-1",
                date: "2025-08-04",
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
            // Tuesday - 2025-08-04 (5th service to test + button)
            {
                id: "7-1",
                date: "2025-08-04",
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
            // Tuesday - 2025-08-04 (6th service to test + button more)
            {
                id: "8-1",
                date: "2025-08-04",
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 2,
                booked: 0,
            },
            // Add a slot that starts in 9:30-10:00 time slot
            {
                id: "8-2",
                date: "2025-08-04",
                startTime: "09:30",
                endTime: "10:00",
                status: "blocked",
                capacity: 3,
                booked: 2,
            },
            {
                id: "8-3",
                date: "2025-08-03",
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 2,
                booked: 0,
            },
        ],
    },
    {
        id: "9",
        name: "Service with Popovers",
        // Empty slot popover - shows when clicking on empty time slots
        rowCells: [
            {
                id: "slot-1",
                startTime: "09:00",
                endTime: "09:30",
                status: "available",
                capacity: 5,
                booked: 2,
                date: "2025-07-31",
                // Slot content popover - shows when clicking on the slot content
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
                date: "2025-07-31",
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
                date: "2025-07-31",
                customPopover: {
                    trigger: "click",
                    content: "Service unavailable during this time period.",
                },
            },
        ],
    },
];
