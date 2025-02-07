import { Person2Icon } from "@lifesg/react-icons";
import {
    TimeTableCellType,
    TimeTableRowCellData,
    TimeTableRowData,
} from "../../src";

export const evenDaysData = [
    {
        name: "Onion and Cheese Roti Prata",
        rowMinTime: "08:00:00",
        rowMaxTime: "16:30:00",
        subtitle: (
            <>
                <Person2Icon />
                {"8"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [

            {
                startTime: "08:15:00",
                endTime: "08:30:00",
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
                startTime: "08:30:00",
                endTime: "08:45:00",
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
                startTime: "08:00:00",
                endTime: "08:15:00",
                title: "title",
                subtitle: "subtitle",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `This is an unsorted cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:45:00",
                endTime: "09:00:00",
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
                startTime: "09:30:00",
                endTime: "10:30:00",
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
                startTime: "10:45:00",
                endTime: "11:00:00",
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
                startTime: "11:00:00",
                endTime: "11:30:00",
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
                startTime: "16:00:00",
                endTime: "16:30:00",
                title: "title",
                subtitle: "subtitle",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
        ],
    },
    {
        name: "Chicken Rice",
        rowMinTime: "08:00:00",
        rowMaxTime: "20:00:00",
        subtitle: (
            <>
                <Person2Icon />
                {"16"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00:00",
                endTime: "12:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00:00",
                endTime: "16:00:00",
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
                startTime: "16:00:00",
                endTime: "20:00:00",
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
        name: "Bak Chor Mee",
        rowMinTime: "08:00:00",
        rowMaxTime: "21:00:00",
        subtitle: (
            <>
                <Person2Icon />
                {"4"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00:00",
                endTime: "09:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00:00",
                endTime: "10:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00:00",
                endTime: "11:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00:00",
                endTime: "13:00:00",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:00:00",
                endTime: "14:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00:00",
                endTime: "15:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00:00",
                endTime: "16:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:00:00",
                endTime: "17:00:00",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00:00",
                endTime: "18:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00:00",
                endTime: "19:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "19:00:00",
                endTime: "20:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "20:00:00",
                endTime: "21:00:00",
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
        name: "Chilli Ban Mee",
        rowMinTime: "10:00",
        rowMaxTime: "17:00",
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
                startTime: "10:00",
                endTime: "12:00",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "17:00",
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
        name: "Economic Rice",
        rowMinTime: "08:00",
        rowMaxTime: "18:00",
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
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00",
                endTime: "10:30",
                status: "filled" as TimeTableCellType,
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
                status: "blocked" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:30",
                endTime: "15:00",
                status: "blocked" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00",
                endTime: "15:30",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:30",
                endTime: "16:00",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:00",
                endTime: "16:30",
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
        ],
    },
    {
        name: "Chilli Crab",
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
                startTime: "13:00",
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
                startTime: "14:00",
                endTime: "15:00",
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
                status: "blocked" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "18:00",
                endTime: "19:00",
                subtitle: "",
                status: "filled" as TimeTableCellType,
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
        name: "Rojak",
        rowMinTime: "08:00:00",
        rowMaxTime: "18:00:00",
        subtitle: (
            <>
                <Person2Icon />
                {"12"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00:00",
                endTime: "08:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:15:00",
                endTime: "08:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:30:00",
                endTime: "08:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:45:00",
                endTime: "09:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00:00",
                endTime: "09:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:15:00",
                endTime: "09:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:30:00",
                endTime: "09:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:45:00",
                endTime: "10:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00:00",
                endTime: "10:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:15:00",
                endTime: "10:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:30:00",
                endTime: "10:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:45:00",
                endTime: "11:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00:00",
                endTime: "11:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:15:00",
                endTime: "11:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:30:00",
                endTime: "11:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:45:00",
                endTime: "12:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00:00",
                endTime: "13:00:00",
                status: "blocked" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:00:00",
                endTime: "13:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:15:00",
                endTime: "13:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:30:00",
                endTime: "13:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:45:00",
                endTime: "14:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00:00",
                endTime: "14:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:15:00",
                endTime: "14:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:30:00",
                endTime: "14:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:45:00",
                endTime: "15:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00:00",
                endTime: "16:30:00",
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
                startTime: "16:30:00",
                endTime: "16:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:45:00",
                endTime: "17:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00:00",
                endTime: "17:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:15:00",
                endTime: "17:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:30:00",
                endTime: "17:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:45:00",
                endTime: "18:00:00",
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
        name: "Nasi Lemak",
        rowMinTime: "08:00:00",
        rowMaxTime: "18:00:00",
        subtitle: (
            <>
                <Person2Icon />
                {"12"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00:00",
                endTime: "16:30:00",
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                subtitle:
                    "a very long text that spans across the entire universe beyond the horizon into the blackhole transcending time and space",
                status: "filled" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:30:00",
                endTime: "16:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:45:00",
                endTime: "17:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00:00",
                endTime: "17:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:15:00",
                endTime: "17:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:30:00",
                endTime: "17:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:45:00",
                endTime: "18:00:00",
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
        name: "Popiah",
        rowMinTime: "08:00",
        rowMaxTime: "22:00",
        subtitle: (
            <>
                <Person2Icon />
                {"12"}
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
        name: "Laksa",
        rowMinTime: "08:00:00",
        rowMaxTime: "18:00:00",
        subtitle: (
            <>
                <Person2Icon />
                {"14"}
            </>
        ),
        onRowNameClick: (rowData: TimeTableRowData, e: React.MouseEvent) => {
            alert(`Clicked on row header for ${rowData.name}`);
        },
        rowCells: [
            {
                startTime: "08:00:00",
                endTime: "08:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:15:00",
                endTime: "08:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:30:00",
                endTime: "08:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "08:45:00",
                endTime: "09:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:00:00",
                endTime: "09:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:15:00",
                endTime: "09:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:30:00",
                endTime: "09:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "09:45:00",
                endTime: "10:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:00:00",
                endTime: "10:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:15:00",
                endTime: "10:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:30:00",
                endTime: "10:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "10:45:00",
                endTime: "11:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:00:00",
                endTime: "11:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:15:00",
                endTime: "11:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:30:00",
                endTime: "11:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "11:45:00",
                endTime: "12:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "12:00:00",
                endTime: "13:00:00",
                status: "blocked" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:00:00",
                endTime: "13:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:15:00",
                endTime: "13:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:30:00",
                endTime: "13:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "13:45:00",
                endTime: "14:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:00:00",
                endTime: "14:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:15:00",
                endTime: "14:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:30:00",
                endTime: "14:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "14:45:00",
                endTime: "15:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:00:00",
                endTime: "15:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:15:00",
                endTime: "15:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:30:00",
                endTime: "15:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "15:45:00",
                endTime: "16:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:00:00",
                endTime: "16:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:15:00",
                endTime: "16:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:30:00",
                endTime: "16:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "16:45:00",
                endTime: "17:00:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:00:00",
                endTime: "17:15:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:15:00",
                endTime: "17:30:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:30:00",
                endTime: "17:45:00",
                status: "default" as TimeTableCellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell start: ${data.startTime}, end: ${data.endTime}`
                    );
                },
            },
            {
                startTime: "17:45:00",
                endTime: "18:00:00",
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
