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
                    id: "mixed-intervals",
                    name: "Mixed intervals",
                    rowMinTime: "08:00",
                    rowMaxTime: "13:00",
                    rowCells: [
                        {
                            startTime: "08:00",
                            endTime: "08:15",
                            status: "filled",
                            title: "15 min",
                        },
                        {
                            startTime: "08:15",
                            endTime: "08:45",
                            status: "filled",
                            title: "30 min",
                        },
                        {
                            startTime: "08:45",
                            endTime: "09:30",
                            status: "filled",
                            title: "45 min",
                        },
                        {
                            startTime: "09:30",
                            endTime: "11:00",
                            status: "filled",
                            title: "90 min",
                        },
                        {
                            startTime: "11:00",
                            endTime: "13:00",
                            status: "filled",
                            title: "120 min",
                        },
                    ],
                },
                {
                    id: "non-standard-intervals",
                    name: "Non-standard intervals",
                    rowMinTime: "08:00",
                    rowMaxTime: "13:00",
                    rowCells: [
                        {
                            title: "Rounded down start",
                            startTime: "08:13",
                            endTime: "09:15",
                            status: "filled",
                        },
                        {
                            title: "Rounded up start",
                            startTime: "09:20",
                            endTime: "10:00",
                            status: "blocked",
                        },
                        {
                            title: "Rounded up end",
                            startTime: "10:00",
                            endTime: "11:13",
                            status: "filled",
                        },
                        {
                            title: "Rounded down end",
                            startTime: "11:13",
                            endTime: "12:26",
                            status: "blocked",
                        },
                    ],
                },
            ]}
            onNextDayClick={() => {}}
            onPreviousDayClick={() => {}}
        />
    );
}
