"use client";
import { TimeTable } from "@lifesg/react-design-system/timetable";

export default function Story() {
    return (
        <TimeTable
            data-testid="timetable"
            date="2026-05-20"
            minTime="08:00"
            maxTime="12:00"
            rowData={[
                {
                    id: "row-1",
                    name: "Min time only",
                    rowMinTime: "09:00",
                    rowCells: [
                        {
                            startTime: "09:00",
                            endTime: "10:00",
                            status: "filled",
                        },
                    ],
                },
                {
                    id: "row-2",
                    name: "Max time only",
                    rowMaxTime: "11:00",
                    rowCells: [
                        {
                            startTime: "08:00",
                            endTime: "09:00",
                            status: "filled",
                        },
                    ],
                },
                {
                    id: "row-3",
                    name: "Min and max time",
                    rowMinTime: "09:00",
                    rowMaxTime: "11:00",
                    rowCells: [
                        {
                            startTime: "09:00",
                            endTime: "10:00",
                            status: "filled",
                        },
                    ],
                },
            ]}
            onNextDayClick={() => {}}
            onPreviousDayClick={() => {}}
        />
    );
}
