import { SchedulerRowData } from "src/scheduler";

export const mockSchedulerData: SchedulerRowData[] = [
    {
        id: "1",
        name: "Service A",
        subtitle: "Available slots for Service A",
        rowCells: [
            {
                id: "1-1",
                startTime: "09:00",
                endTime: "10:30",
                status: "filled",
                title: "Booked",
                subtitle: "John Doe",
            },
            {
                id: "1-2",
                startTime: "13:30",
                endTime: "14:00",
                status: "default",
                title: "Available",
            },
            {
                id: "1-3",
                startTime: "15:00",
                endTime: "15:30",
                status: "blocked",
                title: "Unavailable",
            },
            {
                id: "1-4",
                startTime: "16:30",
                endTime: "17:00",
                status: "filled",
                title: "Booked",
                subtitle: "Jane Smith",
            },
        ],
    },
    {
        id: "2",
        name: "Service B",
        subtitle: "Available slots for Service B",
        rowCells: [
            {
                id: "2-1",
                startTime: "09:00",
                endTime: "09:30",
                status: "default",
                title: "Available",
            },
            {
                id: "2-2",
                startTime: "09:30",
                endTime: "10:00",
                status: "filled",
                title: "Booked",
                subtitle: "Alice Lee",
            },
            {
                id: "2-3",
                startTime: "10:00",
                endTime: "10:30",
                status: "default",
                title: "Available",
            },
            {
                id: "2-4",
                startTime: "10:30",
                endTime: "11:00",
                status: "blocked",
                title: "Unavailable",
            },
        ],
    },
    {
        id: "3",
        name: "Service C",
        subtitle: "Available slots for Service C",
        rowCells: [
            {
                id: "3-1",
                startTime: "09:00",
                endTime: "09:30",
                status: "blocked",
                title: "Unavailable",
            },
            {
                id: "3-2",
                startTime: "09:30",
                endTime: "10:00",
                status: "default",
                title: "Available",
            },
            {
                id: "3-3",
                startTime: "10:00",
                endTime: "10:30",
                status: "filled",
                title: "Booked",
                subtitle: "Bob Tan",
            },
            {
                id: "3-4",
                startTime: "10:30",
                endTime: "11:00",
                status: "default",
                title: "Available",
            },
        ],
    },
    {
        id: "4",
        name: "Service D",
        subtitle: "Available slots for Service D",
        rowCells: [],
    },
];
