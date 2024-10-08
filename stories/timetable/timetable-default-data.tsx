import { TimeTableCellType } from "../../src";

export const timetableDefaultData = [
    {
        name: "lorem",
        rowMinTime: "08:00",
        rowMaxTime: "18:00",
        rowCells: [
            {
                startTime: "08:00",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
            },
            {
                title: "15 mins",
                startTime: "09:00",
                endTime: "09:15",
                status: "filled" as TimeTableCellType,
            },
            {
                title: "60 mins",
                startTime: "09:15",
                endTime: "10:15",
                status: "filled" as TimeTableCellType,
            },
            {
                startTime: "10:15",
                endTime: "11:00",
                status: "default" as TimeTableCellType,
            },
            {
                title: "15 mins",
                startTime: "13:00",
                endTime: "13:15",
                status: "filled" as TimeTableCellType,
            },
            {
                title: "30 mins",
                startTime: "13:15",
                endTime: "13:45",
                status: "filled" as TimeTableCellType,
            },
            {
                startTime: "13:45",
                endTime: "14:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "14:00",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "15:00",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
            },
            {
                title: "120 mins",
                startTime: "16:00",
                endTime: "18:00",
                status: "filled" as TimeTableCellType,
            },
        ],
    },
    {
        name: "ipsum",
        rowMinTime: "06:00",
        rowMaxTime: "17:45",
        rowCells: [
            {
                startTime: "06:00",
                endTime: "07:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "07:00",
                endTime: "08:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "08:00",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
            },
            {
                title: "300 mins",
                startTime: "09:00",
                endTime: "14:00",
                status: "filled" as TimeTableCellType,
            },
            {
                startTime: "14:00",
                endTime: "16:15",
                status: "blocked" as TimeTableCellType,
            },
            {
                title: "60 mins",
                startTime: "16:45",
                endTime: "17:45",
                status: "filled" as TimeTableCellType,
            },
        ],
    },
    {
        name: "dolor",
        rowMinTime: "07:30",
        rowMaxTime: "19:30",
        rowCells: [
            {
                startTime: "07:30",
                endTime: "08:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "08:00",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
            },
            {
                title: "45 mins",
                startTime: "09:00",
                endTime: "09:45",
                status: "filled" as TimeTableCellType,
            },
            {
                startTime: "10:15",
                endTime: "11:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "11:00",
                endTime: "12:00",
                status: "default" as TimeTableCellType,
            },
            {
                title: "30 mins",
                startTime: "13:15",
                endTime: "13:45",
                status: "filled" as TimeTableCellType,
            },
            {
                startTime: "14:00",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "15:00",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
            },
            {
                title: "210 mins",
                startTime: "16:00",
                endTime: "19:30",
                status: "filled" as TimeTableCellType,
            },
        ],
    },
    {
        name: "sit",
        rowMinTime: "08:30",
        rowMaxTime: "21:00",
        rowCells: [
            {
                title: "330 mins",
                startTime: "08:30",
                endTime: "14:00",
                status: "filled" as TimeTableCellType,
            },
            {
                startTime: "14:00",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "15:00",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "16:00",
                endTime: "17:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "17:00",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
            },
        ],
    },
    {
        name: "amet",
        rowMinTime: "06:15",
        rowMaxTime: "22:30",
        rowCells: [
            {
                startTime: "06:15",
                endTime: "07:00",
                status: "default" as TimeTableCellType,
            },
            {
                title: "15 mins",
                startTime: "08:00",
                endTime: "08:15",
                status: "filled" as TimeTableCellType,
            },
            {
                title: "15 mins",
                startTime: "08:15",
                endTime: "08:30",
                status: "filled" as TimeTableCellType,
            },
            {
                title: "15 mins",
                startTime: "08:30",
                endTime: "08:45",
                status: "filled" as TimeTableCellType,
            },
            {
                title: "15 mins",
                startTime: "08:45",
                endTime: "09:00",
                status: "filled" as TimeTableCellType,
            },
            {
                title: "15 mins",
                startTime: "09:00",
                endTime: "09:15",
                status: "filled" as TimeTableCellType,
            },
            {
                title: "60 mins",
                startTime: "09:15",
                endTime: "10:15",
                status: "filled" as TimeTableCellType,
            },
            {
                startTime: "10:15",
                endTime: "11:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "11:00",
                endTime: "12:00",
                status: "default" as TimeTableCellType,
            },
            {
                title: "15 mins",
                startTime: "13:00",
                endTime: "13:15",
                status: "filled" as TimeTableCellType,
            },
            {
                title: "30 mins",
                startTime: "13:15",
                endTime: "13:45",
                status: "filled" as TimeTableCellType,
            },
            {
                startTime: "13:45",
                endTime: "14:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "14:00",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
            },
            {
                startTime: "15:00",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
            },
            {
                title: "390 mins",
                startTime: "16:00",
                endTime: "22:30",
                status: "filled" as TimeTableCellType,
            },
        ],
    },
];
