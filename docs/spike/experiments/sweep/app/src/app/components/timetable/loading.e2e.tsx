"use client";
import { TimeTable } from "@lifesg/react-design-system/timetable";

export default function Story() {
    return (
        <div className="story-column-container">
            <TimeTable
                data-testid="timetable-with-no-records"
                date="2026-05-20"
                minTime="08:00"
                maxTime="13:00"
                rowData={[]}
                totalRecords={0}
                onNextDayClick={() => {}}
                onPreviousDayClick={() => {}}
                loading
            />
            <TimeTable
                data-testid="timetable-with-records"
                date="2026-05-20"
                minTime="08:00"
                maxTime="13:00"
                rowData={[
                    {
                        id: `row-1`,
                        name: `Resource 1`,
                        rowMinTime: "08:00",
                        rowMaxTime: "13:00",
                        rowCells: [
                            {
                                startTime: "08:00",
                                endTime: "13:00",
                                status: "default",
                            },
                        ],
                    },
                ]}
                totalRecords={1}
                onNextDayClick={() => {}}
                onPreviousDayClick={() => {}}
                loading
            />
        </div>
    );
}
