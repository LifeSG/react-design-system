import { Person2Icon } from "@lifesg/react-icons/person-2";
import { TimeTableRowCellData, TimeTableRowData } from "src/timetable";

export const timetableDefaultData: TimeTableRowData[] = [
    {
        name: "1 hour intervals",
        rowMinTime: "08:00",
        rowMaxTime: "21:00",
        rowCells: [
            {
                title: "60 mins",
                startTime: "08:00",
                endTime: "09:00",
                status: "filled",
            },
            {
                startTime: "09:00",
                endTime: "10:00",
                status: "default",
            },
            {
                title: "120 mins",
                startTime: "10:00",
                endTime: "12:00",
                status: "filled",
            },
            {
                startTime: "12:00",
                endTime: "13:00",
                status: "default",
            },
            {
                title: "240 mins",
                startTime: "13:00",
                endTime: "17:00",
                status: "filled",
            },
            {
                startTime: "17:00",
                endTime: "18:00",
                status: "default",
            },
            {
                startTime: "18:00",
                endTime: "20:00",
                status: "default",
            },
        ],
    },
    {
        name: "Different intervals",
        rowMinTime: "06:15",
        rowMaxTime: "16:45",
        rowCells: [
            {
                startTime: "06:15",
                endTime: "07:00",
                status: "default",
            },
            {
                title: "15 mins",
                startTime: "08:00",
                endTime: "08:15",
                status: "filled",
            },
            {
                title: "15 mins",
                startTime: "08:15",
                endTime: "08:30",
                status: "filled",
            },
            {
                title: "15 mins",
                startTime: "08:30",
                endTime: "08:45",
                status: "filled",
            },
            {
                title: "15 mins",
                startTime: "08:45",
                endTime: "09:00",
                status: "filled",
            },
            {
                title: "15 mins",
                startTime: "09:00",
                endTime: "09:15",
                status: "filled",
            },
            {
                title: "60 mins",
                startTime: "09:15",
                endTime: "10:15",
                status: "filled",
            },
            {
                startTime: "10:15",
                endTime: "11:00",
                status: "default",
            },
            {
                title: "15 mins",
                startTime: "13:00",
                endTime: "13:15",
                status: "filled",
            },
            {
                title: "30 mins",
                startTime: "13:15",
                endTime: "13:45",
                status: "filled",
            },
            {
                startTime: "13:45",
                endTime: "14:00",
                status: "default",
            },
            {
                startTime: "14:00",
                endTime: "15:00",
                status: "default",
            },
            {
                startTime: "15:00",
                endTime: "16:00",
                status: "default",
            },
            {
                title: "45 mins",
                startTime: "16:00",
                endTime: "16:45",
                status: "filled",
            },
        ],
    },
    {
        name: "Non-standard intervals",
        rowMinTime: "06:00",
        rowMaxTime: "19:45",
        rowCells: [
            {
                startTime: "06:00",
                endTime: "07:00",
                status: "default",
            },
            {
                startTime: "07:00",
                endTime: "08:00",
                status: "default",
            },
            {
                startTime: "08:00",
                endTime: "09:00",
                status: "default",
            },
            {
                title: "313 mins",
                startTime: "09:00",
                endTime: "14:13",
                status: "filled",
            },
            {
                startTime: "14:13",
                endTime: "16:00",
                status: "blocked",
            },
            {
                startTime: "16:00",
                endTime: "16:43",
                status: "default",
            },
            {
                startTime: "17:13",
                endTime: "18:13",
                status: "filled",
            },
        ],
    },
    {
        name: "With long text display in the header column",
        rowMinTime: "07:30",
        rowMaxTime: "20:30",
        rowCells: [
            {
                startTime: "07:30",
                endTime: "15:30",
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                subtitle:
                    "A very long text that spans across the entire universe beyond the horizon into the blackhole transcending time and space",
                status: "filled",
            },
        ],
    },
    {
        name: "Advanced usage",
        subtitle: (
            <>
                <Person2Icon />
                <span>8</span>
            </>
        ),
        rowMinTime: "07:00",
        rowMaxTime: "20:30",
        rowCells: [
            {
                startTime: "07:00",
                endTime: "10:30",
                title: "Lorem ipsum",
                subtitle: "Lorem ipsum dolor sit amet",
                status: "filled",
                customPopover: {
                    trigger: "hover",
                    content: "Additional info in popover",
                },
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
        outOfRangeCellPopover: {
            trigger: "hover",
            content: "Outside operating hours",
        },
        onRowNameClick: (rowData: TimeTableRowData) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
    },
];
