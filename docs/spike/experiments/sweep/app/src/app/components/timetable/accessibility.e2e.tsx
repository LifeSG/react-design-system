"use client";
import { TimeTable } from "@lifesg/react-design-system/timetable";

export default function Story() {
    return (
        <TimeTable
            data-testid="timetable"
            date="2026-05-20"
            minTime="08:00"
            maxTime="13:00"
            rowData={[
                {
                    id: "row-1",
                    name: "Resource A",
                    rowMinTime: "08:00",
                    rowMaxTime: "13:00",
                    rowCells: [
                        {
                            startTime: "08:00",
                            endTime: "10:00",
                            status: "filled",
                            title: "Booked",
                        },
                        {
                            startTime: "10:00",
                            endTime: "13:00",
                            status: "default",
                            title: "Available",
                        },
                    ],
                },
                {
                    id: "row-2",
                    name: "Resource B",
                    subtitle: "Level 2",
                    rowMinTime: "08:00",
                    rowMaxTime: "13:00",
                    rowCells: [
                        {
                            startTime: "08:00",
                            endTime: "13:00",
                            status: "blocked",
                            title: "Blocked",
                        },
                    ],
                },
                {
                    id: "row-3",
                    name: "Resource C",
                    rowMinTime: "08:00",
                    rowMaxTime: "13:00",
                    rowCells: [
                        {
                            startTime: "08:00",
                            endTime: "11:00",
                            status: "pending",
                            title: "Pending",
                        },
                        {
                            startTime: "11:00",
                            endTime: "13:00",
                            status: "disabled",
                            title: "Disabled",
                        },
                    ],
                },
            ]}
            onNextDayClick={() => {}}
            onPreviousDayClick={() => {}}
        />
    );
}
