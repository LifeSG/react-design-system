import { Person2Icon } from "@lifesg/react-icons";
import { CellType, TimeTableRowCellData, TimeTableRowData } from "../../src";

export const oddDaysData = [
    {
        id: "9l4P1dOr16",
        name: "Apple",
        rowMinTime: "08:00:00",
        rowMaxTime: "22:30:00",
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
                id: "9l4P1dOr16",
                startTime: "08:00",
                endTime: "08:45",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "08:45:00",
                endTime: "09:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "11:00:00",
                endTime: "11:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "RBP5g87Em6",
                startTime: "12:00:00",
                endTime: "13:00:00",
                title: "Weekly Huddle #7",
                subtitle: "Shawn TAY (GOVTECH)",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "13:00:00",
                endTime: "13:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "13:45:00",
                endTime: "14:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "14:30:00",
                endTime: "15:15:00",
                status: "filled" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "16:45:00",
                endTime: "17:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "17:15:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "18:00:00",
                endTime: "18:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "18:45:00",
                endTime: "19:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "19:30:00",
                endTime: "20:15:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "20:15:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "21:00:00",
                endTime: "21:45:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "9l4P1dOr16",
                startTime: "21:45:00",
                endTime: "22:00:00",
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
        id: "Dy3E3vRQY0",
        name: "Avocado",
        rowMinTime: "08:00:00",
        rowMaxTime: "22:00:00",
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
                id: "Dy3E3vRQY0",
                startTime: "08:00:00",
                endTime: "08:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "08:30:00",
                endTime: "09:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "09:00:00",
                endTime: "09:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "09:30:00",
                endTime: "10:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "10:00:00",
                endTime: "10:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "10:30:00",
                endTime: "11:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "11:00:00",
                endTime: "11:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "11:30:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "12:00:00",
                endTime: "12:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "12:30:00",
                endTime: "13:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "13:00:00",
                endTime: "13:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "13:30:00",
                endTime: "14:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "14:00:00",
                endTime: "14:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "14:30:00",
                endTime: "15:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "15:00:00",
                endTime: "15:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "15:30:00",
                endTime: "16:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "16:00:00",
                endTime: "16:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "16:30:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "17:00:00",
                endTime: "17:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "17:30:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "18:00:00",
                endTime: "18:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "18:30:00",
                endTime: "19:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "19:00:00",
                endTime: "19:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "19:30:00",
                endTime: "20:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "20:00:00",
                endTime: "20:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "20:30:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "21:00:00",
                endTime: "21:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "Dy3E3vRQY0",
                startTime: "21:30:00",
                endTime: "22:00:00",
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
        id: "GN9P0vME6K",
        name: "Banana",
        rowMinTime: "08:00:00",
        rowMaxTime: "22:00:00",
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
                id: "GN9P0vME6K",
                startTime: "08:00:00",
                endTime: "08:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "08:30:00",
                endTime: "09:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "09:00:00",
                endTime: "09:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "09:30:00",
                endTime: "10:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "10:00:00",
                endTime: "10:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "10:30:00",
                endTime: "11:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "11:00:00",
                endTime: "11:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "11:30:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "12:00:00",
                endTime: "12:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "12:30:00",
                endTime: "13:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "13:00:00",
                endTime: "13:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "13:30:00",
                endTime: "14:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "14:00:00",
                endTime: "14:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "14:30:00",
                endTime: "15:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "15:00:00",
                endTime: "15:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "15:30:00",
                endTime: "16:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "16:00:00",
                endTime: "16:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "16:30:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "17:00:00",
                endTime: "17:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "17:30:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "18:00:00",
                endTime: "18:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "18:30:00",
                endTime: "19:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "19:00:00",
                endTime: "19:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "19:30:00",
                endTime: "20:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "20:00:00",
                endTime: "20:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "20:30:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "21:00:00",
                endTime: "21:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vME6K",
                startTime: "21:30:00",
                endTime: "22:00:00",
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
        id: "mx0ExmWr9Y",
        name: "Cantaloupe",
        rowMinTime: "08:00:00",
        rowMaxTime: "22:00:00",
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
                id: "mx0ExmWr9Y",
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
                id: "mx0ExmWr9Y",
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
                id: "mx0ExmWr9Y",
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
                id: "mx0ExmWr9Y",
                startTime: "11:00:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0ExmWr9Y",
                startTime: "12:00:00",
                endTime: "13:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0ExmWr9Y",
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
                id: "mx0ExmWr9Y",
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
                id: "mx0ExmWr9Y",
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
                id: "mx0ExmWr9Y",
                startTime: "16:00:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0ExmWr9Y",
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
                id: "mx0ExmWr9Y",
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
                id: "mx0ExmWr9Y",
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
                id: "mx0ExmWr9Y",
                startTime: "20:00:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "mx0ExmWr9Y",
                startTime: "21:00:00",
                endTime: "22:00:00",
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
        id: "An0rbeOElJ",
        name: "Cherry",
        rowMinTime: "08:00:00",
        rowMaxTime: "22:00:00",
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
                id: "An0rbeOElJ",
                startTime: "08:00:00",
                endTime: "08:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "08:30:00",
                endTime: "09:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "09:00:00",
                endTime: "09:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "09:30:00",
                endTime: "10:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "10:00:00",
                endTime: "10:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "10:30:00",
                endTime: "11:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "11:00:00",
                endTime: "11:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "11:30:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "12:00:00",
                endTime: "12:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "12:30:00",
                endTime: "13:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "13:00:00",
                endTime: "13:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "13:30:00",
                endTime: "14:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "14:00:00",
                endTime: "14:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "14:30:00",
                endTime: "15:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "15:00:00",
                endTime: "15:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "15:30:00",
                endTime: "16:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "16:00:00",
                endTime: "16:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "16:30:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "17:00:00",
                endTime: "17:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "17:30:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "18:00:00",
                endTime: "18:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "18:30:00",
                endTime: "19:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "19:00:00",
                endTime: "19:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "19:30:00",
                endTime: "20:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "20:00:00",
                endTime: "20:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "20:30:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "21:00:00",
                endTime: "21:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "An0rbeOElJ",
                startTime: "21:30:00",
                endTime: "22:00:00",
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
        id: "GN9P0vDE6K",
        name: "Dragonfruit",
        rowMinTime: "08:00:00",
        rowMaxTime: "22:00:00",
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
                id: "GN9P0vDE6K",
                startTime: "08:00:00",
                endTime: "08:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "08:30:00",
                endTime: "09:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "09:00:00",
                endTime: "09:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "09:30:00",
                endTime: "10:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "10:00:00",
                endTime: "10:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "10:30:00",
                endTime: "11:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "11:00:00",
                endTime: "11:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "11:30:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "12:00:00",
                endTime: "12:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "12:30:00",
                endTime: "13:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "13:00:00",
                endTime: "13:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "13:30:00",
                endTime: "14:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "14:00:00",
                endTime: "14:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "14:30:00",
                endTime: "15:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "15:00:00",
                endTime: "15:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "15:30:00",
                endTime: "16:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "16:00:00",
                endTime: "16:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "16:30:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "17:00:00",
                endTime: "17:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "17:30:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "18:00:00",
                endTime: "18:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "18:30:00",
                endTime: "19:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "19:00:00",
                endTime: "19:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "19:30:00",
                endTime: "20:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "20:00:00",
                endTime: "20:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "20:30:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "21:00:00",
                endTime: "21:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "GN9P0vDE6K",
                startTime: "21:30:00",
                endTime: "22:00:00",
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
        id: "vK4rGewQ02",
        name: "Durian",
        rowMinTime: "08:00:00",
        rowMaxTime: "22:00:00",
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
                id: "vK4rGewQ02",
                startTime: "08:00:00",
                endTime: "08:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "08:30:00",
                endTime: "09:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "09:00:00",
                endTime: "09:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "09:30:00",
                endTime: "10:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "10:00:00",
                endTime: "10:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "10:30:00",
                endTime: "11:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "11:00:00",
                endTime: "11:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "11:30:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "12:00:00",
                endTime: "12:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "12:30:00",
                endTime: "13:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "13:00:00",
                endTime: "13:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "13:30:00",
                endTime: "14:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "14:00:00",
                endTime: "14:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "14:30:00",
                endTime: "15:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "15:00:00",
                endTime: "15:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "15:30:00",
                endTime: "16:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "16:00:00",
                endTime: "16:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "16:30:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "17:00:00",
                endTime: "17:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "17:30:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "18:00:00",
                endTime: "18:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "18:30:00",
                endTime: "19:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "19:00:00",
                endTime: "19:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "19:30:00",
                endTime: "20:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "20:00:00",
                endTime: "20:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "20:30:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "21:00:00",
                endTime: "21:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGewQ02",
                startTime: "21:30:00",
                endTime: "22:00:00",
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
        id: "0B8E719Pbp",
        name: "Executive room 1",
        rowMinTime: "08:00:00",
        rowMaxTime: "22:00:00",
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
                id: "0B8E719Pbp",
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
                id: "0B8E719Pbp",
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
                id: "0B8E719Pbp",
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
                id: "0B8E719Pbp",
                startTime: "11:00:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "0B8E719Pbp",
                startTime: "12:00:00",
                endTime: "13:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "0B8E719Pbp",
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
                id: "0B8E719Pbp",
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
                id: "0B8E719Pbp",
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
                id: "0B8E719Pbp",
                startTime: "16:00:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "0B8E719Pbp",
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
                id: "0B8E719Pbp",
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
                id: "0B8E719Pbp",
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
                id: "0B8E719Pbp",
                startTime: "20:00:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "0B8E719Pbp",
                startTime: "21:00:00",
                endTime: "22:00:00",
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
        id: "vK4rGoMr02",
        name: "Executive room 6",
        rowMinTime: "08:00:00",
        rowMaxTime: "22:00:00",
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
                id: "vK4rGoMr02",
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
                id: "vK4rGoMr02",
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
                id: "vK4rGoMr02",
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
                id: "vK4rGoMr02",
                startTime: "11:00:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGoMr02",
                startTime: "12:00:00",
                endTime: "13:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGoMr02",
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
                id: "vK4rGoMr02",
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
                id: "vK4rGoMr02",
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
                id: "vK4rGoMr02",
                startTime: "16:00:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGoMr02",
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
                id: "vK4rGoMr02",
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
                id: "vK4rGoMr02",
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
                id: "vK4rGoMr02",
                startTime: "20:00:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "vK4rGoMr02",
                startTime: "21:00:00",
                endTime: "22:00:00",
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
        id: "YRVPVjVPGe",
        name: "Grape",
        rowMinTime: "08:00:00",
        rowMaxTime: "22:00:00",
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
                id: "YRVPVjVPGe",
                startTime: "08:00:00",
                endTime: "08:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "08:30:00",
                endTime: "09:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "09:00:00",
                endTime: "09:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "09:30:00",
                endTime: "10:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "10:00:00",
                endTime: "10:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "10:30:00",
                endTime: "11:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "11:00:00",
                endTime: "11:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "11:30:00",
                endTime: "12:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "12:00:00",
                endTime: "12:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "12:30:00",
                endTime: "13:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "13:00:00",
                endTime: "13:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "13:30:00",
                endTime: "14:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "14:00:00",
                endTime: "14:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "14:30:00",
                endTime: "15:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "15:00:00",
                endTime: "15:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "15:30:00",
                endTime: "16:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "16:00:00",
                endTime: "16:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "16:30:00",
                endTime: "17:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "17:00:00",
                endTime: "17:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "17:30:00",
                endTime: "18:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "18:00:00",
                endTime: "18:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "18:30:00",
                endTime: "19:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "19:00:00",
                endTime: "19:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "19:30:00",
                endTime: "20:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "20:00:00",
                endTime: "20:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "20:30:00",
                endTime: "21:00:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "21:00:00",
                endTime: "21:30:00",
                status: "default" as CellType,
                onClick: (data: TimeTableRowCellData) => {
                    alert(
                        `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
                    );
                },
            },
            {
                id: "YRVPVjVPGe",
                startTime: "21:30:00",
                endTime: "22:00:00",
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
