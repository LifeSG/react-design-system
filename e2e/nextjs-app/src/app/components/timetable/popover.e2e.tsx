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
                    name: "Room A",
                    rowMinTime: "09:00",
                    rowMaxTime: "11:00",
                    rowHeaderPopover: {
                        trigger: "hover",
                        content: "Room A — Level 1, capacity: 10",
                    },
                    outOfRangeCellPopover: {
                        trigger: "hover",
                        content: "Outside operating hours",
                    },
                    rowCells: [
                        {
                            startTime: "09:00",
                            endTime: "10:00",
                            status: "filled",
                            title: "Booked",
                            customPopover: {
                                trigger: "hover",
                                content: "This slot is booked",
                            },
                        },
                        {
                            startTime: "10:00",
                            endTime: "11:00",
                            status: "default",
                            title: "Available",
                            customPopover: {
                                trigger: "hover",
                                content: "This slot is available",
                            },
                        },
                    ],
                },
                {
                    id: "row-2",
                    name: "Room B",
                    rowCells: [],
                },
            ]}
            onNextDayClick={() => {}}
            onPreviousDayClick={() => {}}
        />
    );
}
