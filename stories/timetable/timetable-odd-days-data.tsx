import { Person2Icon } from "@lifesg/react-icons";
import {
    TimeTableCellType,
    TimeTableRowCellData,
    TimeTableRowData,
} from "../../src";

export const oddDaysData = [
    {
        name: "Apple",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"3"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00",
                endTime: "08:45",
                status: "filled" as TimeTableCellType,
                title: "title",
                subtitle: "subtitle",
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:45",
                endTime: "09:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:30",
                endTime: "10:00",
                status: "blocked" as TimeTableCellType,
            },
            {
                startTime: "10:00",
                endTime: "11:00",
                status: "blocked" as TimeTableCellType,
            },
            {
                startTime: "11:00",
                endTime: "11:45",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00",
                endTime: "14:00",
                title: "title",
                subtitle: "subtitle",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:30",
                endTime: "15:15",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:45",
                endTime: "17:15",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:15",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "18:45",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:45",
                endTime: "19:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:30",
                endTime: "20:15",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:15",
                endTime: "21:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:00",
                endTime: "21:45",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:45",
                endTime: "22:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
    {
        name: "Avocado",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"18"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00",
                endTime: "08:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:30",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00",
                endTime: "11:00",
                title: "title",
                subtitle: "subtitle",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00",
                endTime: "11:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:30",
                endTime: "12:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00",
                endTime: "12:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:30",
                endTime: "13:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00",
                endTime: "14:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:30",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "16:30",
                title: "title",
                subtitle: "subtitle",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:30",
                endTime: "17:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00",
                endTime: "17:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:30",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "18:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:30",
                endTime: "19:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:00",
                endTime: "19:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:30",
                endTime: "20:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:00",
                endTime: "20:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:30",
                endTime: "21:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:00",
                endTime: "21:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:30",
                endTime: "22:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
    {
        name: "Banana",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"6"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00",
                endTime: "08:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:30",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00",
                endTime: "09:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:30",
                endTime: "10:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00",
                endTime: "13:00",
                status: "blocked" as TimeTableCellType,
            },
            {
                startTime: "13:00",
                endTime: "13:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:30",
                endTime: "14:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00",
                endTime: "14:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:30",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "17:00",
                status: "blocked" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00",
                endTime: "17:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:30",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "18:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:30",
                endTime: "19:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:00",
                endTime: "19:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:30",
                endTime: "20:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:00",
                endTime: "20:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:30",
                endTime: "21:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:00",
                endTime: "21:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:30",
                endTime: "22:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
    {
        name: "Cantaloupe",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"10"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00",
                endTime: "10:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00",
                endTime: "11:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00",
                endTime: "12:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00",
                endTime: "13:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:00",
                endTime: "14:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:00",
                endTime: "17:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "19:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:00",
                endTime: "20:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:00",
                endTime: "21:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:00",
                endTime: "22:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
    {
        name: "Cherry",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"10"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00",
                endTime: "08:30",
                status: "filled" as TimeTableCellType,
                title: "title",
                subtitle: "subtitle",
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:30",
                endTime: "09:00",
                status: "filled" as TimeTableCellType,
                title: "title",
                subtitle: "subtitle",
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00",
                endTime: "09:15",
                status: "filled" as TimeTableCellType,
                title: "title",
                subtitle: "subtitle",
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:15",
                endTime: "09:30",
                status: "filled" as TimeTableCellType,
                title: "title",
                subtitle: "subtitle",
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:30",
                endTime: "09:45",
                status: "filled" as TimeTableCellType,
                title: "title",
                subtitle: "subtitle",
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:45",
                endTime: "10:00",
                status: "filled" as TimeTableCellType,
                title: "title",
                subtitle: "subtitle",
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00",
                endTime: "10:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:30",
                endTime: "11:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00",
                endTime: "11:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:30",
                endTime: "12:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "15:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:30",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:00",
                endTime: "16:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:30",
                endTime: "17:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00",
                endTime: "17:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:30",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "18:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:30",
                endTime: "19:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:00",
                endTime: "19:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:30",
                endTime: "20:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:00",
                endTime: "20:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:30",
                endTime: "21:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:00",
                endTime: "21:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:30",
                endTime: "22:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
    {
        name: "Dragonfruit",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"10"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00",
                endTime: "08:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:30",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00",
                endTime: "09:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:30",
                endTime: "10:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00",
                endTime: "10:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:30",
                endTime: "11:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00",
                endTime: "11:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:30",
                endTime: "12:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00",
                endTime: "12:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:30",
                endTime: "13:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:00",
                endTime: "13:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:30",
                endTime: "14:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00",
                endTime: "14:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:30",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "15:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:30",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:00",
                endTime: "16:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:30",
                endTime: "17:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00",
                endTime: "17:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:30",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "18:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:30",
                endTime: "19:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:00",
                endTime: "19:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:30",
                endTime: "20:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:00",
                endTime: "20:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:30",
                endTime: "21:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:00",
                endTime: "21:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:30",
                endTime: "22:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
    {
        name: "Durian",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"10"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00",
                endTime: "08:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:30",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00",
                endTime: "09:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:30",
                endTime: "10:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00",
                endTime: "10:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:30",
                endTime: "11:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00",
                endTime: "11:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:30",
                endTime: "12:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00",
                endTime: "12:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:30",
                endTime: "13:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:00",
                endTime: "13:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:30",
                endTime: "14:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00",
                endTime: "14:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:30",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "15:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:30",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:00",
                endTime: "16:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:30",
                endTime: "17:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00",
                endTime: "17:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:30",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "18:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:30",
                endTime: "19:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:00",
                endTime: "19:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:30",
                endTime: "20:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:00",
                endTime: "20:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:30",
                endTime: "21:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:00",
                endTime: "21:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:30",
                endTime: "22:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
    {
        name: "Elderberry",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"5"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00",
                endTime: "10:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00",
                endTime: "11:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00",
                endTime: "12:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00",
                endTime: "13:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:00",
                endTime: "14:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:00",
                endTime: "17:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "19:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:00",
                endTime: "20:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:00",
                endTime: "21:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:00",
                endTime: "22:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
    {
        name: "Fig",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"6"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00",
                endTime: "10:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00",
                endTime: "11:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00",
                endTime: "12:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00",
                endTime: "13:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:00",
                endTime: "14:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:00",
                endTime: "17:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "19:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:00",
                endTime: "20:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:00",
                endTime: "21:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:00",
                endTime: "22:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
    {
        name: "Grape",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"10"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00",
                endTime: "08:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:30",
                endTime: "09:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00",
                endTime: "09:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:30",
                endTime: "10:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00",
                endTime: "10:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:30",
                endTime: "11:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00",
                endTime: "11:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:30",
                endTime: "12:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00",
                endTime: "12:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:30",
                endTime: "13:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:00",
                endTime: "13:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:30",
                endTime: "14:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00",
                endTime: "14:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:30",
                endTime: "15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "15:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:30",
                endTime: "16:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:00",
                endTime: "16:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:30",
                endTime: "17:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00",
                endTime: "17:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:30",
                endTime: "18:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "18:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:30",
                endTime: "19:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:00",
                endTime: "19:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:30",
                endTime: "20:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:00",
                endTime: "20:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:30",
                endTime: "21:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:00",
                endTime: "21:30",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "21:30",
                endTime: "22:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
];
