"use client";
import {
    TimeTable,
    TimeTableRowCellData,
} from "@lifesg/react-design-system/timetable";

const rowCells: TimeTableRowCellData[] = [
    {
        startTime: "08:00",
        endTime: "09:00",
        status: "filled",
    },
    {
        startTime: "09:00",
        endTime: "10:00",
        status: "blocked",
    },
    {
        startTime: "10:00",
        endTime: "11:00",
        status: "default",
    },
    {
        startTime: "11:00",
        endTime: "12:00",
        status: "disabled",
    },
    {
        startTime: "12:00",
        endTime: "13:00",
        status: "pending",
    },
];

export default function Story() {
    return (
        <div className="story-background">
            <TimeTable
                data-testid="timetable"
                date="2026-05-20"
                minTime="08:00"
                maxTime="13:00"
                rowData={[
                    {
                        id: "row-1",
                        name: "Row 1",
                        rowCells,
                    },
                    {
                        id: "row-2",
                        name: "Row 2",
                        rowCells,
                    },
                    {
                        id: "row-3",
                        name: "Row 3",
                        rowCells,
                    },
                    {
                        id: "row-4",
                        name: "Row 4",
                        rowCells,
                    },
                    {
                        id: "row-5",
                        name: "Row 5",
                        rowCells,
                    },
                ]}
                onNextDayClick={() => {}}
                onPreviousDayClick={() => {}}
            />
        </div>
    );
}
