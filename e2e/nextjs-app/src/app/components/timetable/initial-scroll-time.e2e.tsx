"use client";
import { TimeTable } from "@lifesg/react-design-system/timetable";

export default function Story() {
    return (
        <TimeTable
            data-testid="timetable"
            date="2026-05-20"
            minTime="00:00"
            maxTime="24:00"
            initialScrollTime="10:00"
            rowData={[
                {
                    id: "row-1",
                    name: "Resource 1",
                    rowCells: [],
                },
            ]}
            onNextDayClick={() => {}}
            onPreviousDayClick={() => {}}
        />
    );
}
