import { Person2Icon } from "@lifesg/react-icons";
import { CellType, TimeTableRowCellData, TimeTableRowData } from "../../src";

export const evenDaysData = [
    {
        id: "Dy3E3RvQY0",
        name: "2Hr-interval",
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
                id: "Dy3E3RvQY0",
                startTime: "08:00:00",
                endTime: "08:15:00",
                title: "booking title",
                subtitle: "booking owner name",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3RvQY0",
                startTime: "08:15:00",
                endTime: "08:30:00",
                title: "booking title",
                subtitle: "booking owner name",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3RvQY0",
                startTime: "08:30:00",
                endTime: "08:45:00",
                title: "booking title",
                subtitle: "booking owner name",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3RvQY0",
                startTime: "08:45:00",
                endTime: "09:00:00",
                title: "booking title",
                subtitle: "booking owner name",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3RvQY0",
                startTime: "09:30:00",
                endTime: "10:30:00",
                title: "booking title",
                subtitle: "booking owner name",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3RvQY0",
                startTime: "10:45:00",
                endTime: "11:00:00",
                title: "booking title",
                subtitle: "booking owner name",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3RvQY0",
                startTime: "11:00:00",
                endTime: "11:30:00",
                title: "booking title",
                subtitle: "booking owner name",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3RvQY0",
                startTime: "16:00:00",
                endTime: "16:30:00",
                title: "booking title",
                subtitle: "booking owner name",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
        ],
    },
    {
        id: "ZlJQyXWP6z",
        name: "4 Hr interval",
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
                id: "ZlJQyXWP6z",
                startTime: "08:00:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ZlJQyXWP6z",
                startTime: "12:00:00",
                endTime: "16:00:00",
                title: "booking title",
                subtitle: "booking owner name",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ZlJQyXWP6z",
                startTime: "16:00:00",
                endTime: "20:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
        ],
    },
    {
        id: "9znPmRxQBv",
        name: "acs",
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
                id: "9znPmRxQBv",
                startTime: "08:00:00",
                endTime: "09:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "09:00:00",
                endTime: "10:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "10:00:00",
                endTime: "11:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "11:00:00",
                endTime: "13:00:00",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "13:00:00",
                endTime: "14:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "14:00:00",
                endTime: "15:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "15:00:00",
                endTime: "16:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "16:00:00",
                endTime: "17:00:00",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "17:00:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "18:00:00",
                endTime: "19:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "19:00:00",
                endTime: "20:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9znPmRxQBv",
                startTime: "20:00:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
        ],
    },
    {
        id: "B8E79Z6Pbp",
        name: "Fixed Session Resource1",
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
                id: "B8E79Z6Pbp",
                startTime: "10:00",
                endTime: "12:00",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "B8E79Z6Pbp",
                startTime: "15:00",
                endTime: "17:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
        ],
    },
    {
        id: "bJxrj7JPqL",
        name: "Apple",
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
                id: "bJxrj7JPqL",
                startTime: "08:00",
                endTime: "08:30",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "08:30",
                endTime: "09:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "09:00",
                endTime: "09:30",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "09:30",
                endTime: "10:00",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "10:00",
                endTime: "10:30",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "10:30",
                endTime: "11:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "13:00",
                endTime: "13:30",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "13:30",
                endTime: "14:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "14:00",
                endTime: "14:30",
                status: "blocked" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "14:30",
                endTime: "15:00",
                status: "blocked" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "15:00",
                endTime: "15:30",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "15:30",
                endTime: "16:00",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "16:00",
                endTime: "16:30",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "16:30",
                endTime: "17:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "17:00",
                endTime: "17:30",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "bJxrj7JPqL",
                startTime: "17:30",
                endTime: "18:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
        ],
    },
    {
        id: "mx0Ex4xE9Y",
        name: "apple+dragonfruit",
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
                id: "mx0Ex4xE9Y",
                startTime: "08:00",
                endTime: "09:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "09:00",
                endTime: "10:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "10:00",
                endTime: "11:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "11:00",
                endTime: "12:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "jingzhi-id",
                startTime: "13:00",
                endTime: "14:00",
                subtitle: "Jing Zhi",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "14:00",
                endTime: "15:00",
                subtitle: "Jing Zhi",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "15:00",
                endTime: "16:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "16:00",
                endTime: "17:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "17:00",
                endTime: "18:00",
                status: "blocked" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "18:00",
                endTime: "19:00",
                subtitle: "",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "19:00",
                endTime: "20:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "20:00",
                endTime: "21:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0Ex4xE9Y",
                startTime: "21:00",
                endTime: "22:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
        ],
    },
    {
        id: "RBP5eeePm6",
        name: "Coconut",
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
                id: "RBP5eeePm6",
                startTime: "08:00:00",
                endTime: "08:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "08:15:00",
                endTime: "08:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "08:30:00",
                endTime: "08:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "08:45:00",
                endTime: "09:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "09:00:00",
                endTime: "09:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "09:15:00",
                endTime: "09:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "09:30:00",
                endTime: "09:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "09:45:00",
                endTime: "10:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "10:00:00",
                endTime: "10:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "10:15:00",
                endTime: "10:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "10:30:00",
                endTime: "10:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "10:45:00",
                endTime: "11:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "11:00:00",
                endTime: "11:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "11:15:00",
                endTime: "11:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "11:30:00",
                endTime: "11:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "11:45:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "12:00:00",
                endTime: "13:00:00",
                status: "blocked" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "13:00:00",
                endTime: "13:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "13:15:00",
                endTime: "13:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "13:30:00",
                endTime: "13:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "13:45:00",
                endTime: "14:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "14:00:00",
                endTime: "14:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "14:15:00",
                endTime: "14:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "14:30:00",
                endTime: "14:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "14:45:00",
                endTime: "15:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "15:00:00",
                endTime: "16:30:00",
                subtitle: "booking label",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "16:30:00",
                endTime: "16:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "16:45:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "17:00:00",
                endTime: "17:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "17:15:00",
                endTime: "17:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "17:30:00",
                endTime: "17:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5eeePm6",
                startTime: "17:45:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
        ],
    },
    {
        id: "DAPBjGgPqd",
        name: "Coconut Approval Required",
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
                id: "DAPBjGgPqd",
                startTime: "08:00:00",
                endTime: "16:30:00",
                subtitle:
                    "a very long booking text that spans across the entire universe beyond the horizon into the blackhole transcending time and space",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "DAPBjGgPqd",
                startTime: "16:30:00",
                endTime: "16:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "DAPBjGgPqd",
                startTime: "16:45:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "DAPBjGgPqd",
                startTime: "17:00:00",
                endTime: "17:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "DAPBjGgPqd",
                startTime: "17:15:00",
                endTime: "17:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "DAPBjGgPqd",
                startTime: "17:30:00",
                endTime: "17:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "DAPBjGgPqd",
                startTime: "17:45:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
        ],
    },
    {
        id: "ajlEo56PqA",
        name: "Default test",
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
                id: "ajlEo56PqA",
                startTime: "08:00",
                endTime: "09:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "09:00",
                endTime: "10:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "10:00",
                endTime: "11:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "11:00",
                endTime: "12:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "13:00",
                endTime: "14:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "14:00",
                endTime: "15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "15:00",
                endTime: "16:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "16:00",
                endTime: "17:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "17:00",
                endTime: "18:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "18:00",
                endTime: "19:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "19:00",
                endTime: "20:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "20:00",
                endTime: "21:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ajlEo56PqA",
                startTime: "21:00",
                endTime: "22:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
        ],
    },
    {
        id: "ewGEKbeQVa",
        name: "delet",
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
                id: "ewGEKbeQVa",
                startTime: "08:00:00",
                endTime: "08:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "08:15:00",
                endTime: "08:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "08:30:00",
                endTime: "08:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "08:45:00",
                endTime: "09:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "09:00:00",
                endTime: "09:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "09:15:00",
                endTime: "09:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "09:30:00",
                endTime: "09:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "09:45:00",
                endTime: "10:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "10:00:00",
                endTime: "10:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "10:15:00",
                endTime: "10:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "10:30:00",
                endTime: "10:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "10:45:00",
                endTime: "11:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "11:00:00",
                endTime: "11:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "11:15:00",
                endTime: "11:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "11:30:00",
                endTime: "11:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "11:45:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "12:00:00",
                endTime: "13:00:00",
                status: "blocked" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "13:00:00",
                endTime: "13:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "13:15:00",
                endTime: "13:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "13:30:00",
                endTime: "13:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "13:45:00",
                endTime: "14:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "14:00:00",
                endTime: "14:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "14:15:00",
                endTime: "14:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "14:30:00",
                endTime: "14:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "14:45:00",
                endTime: "15:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "15:00:00",
                endTime: "15:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "15:15:00",
                endTime: "15:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "15:30:00",
                endTime: "15:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "15:45:00",
                endTime: "16:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "16:00:00",
                endTime: "16:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "16:15:00",
                endTime: "16:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "16:30:00",
                endTime: "16:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "16:45:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "17:00:00",
                endTime: "17:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "17:15:00",
                endTime: "17:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "17:30:00",
                endTime: "17:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "ewGEKbeQVa",
                startTime: "17:45:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
        ],
    },
];
