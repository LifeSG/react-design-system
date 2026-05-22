"use client";
import { TimeTable } from "@lifesg/react-design-system/timetable";

export default function Story() {
    return (
        <div className="story-background">
            <TimeTable
                data-testid="timetable"
                date="2026-05-20"
                minTime="08:00"
                maxTime="13:00"
                totalRecords={0}
                rowData={[]}
                onNextDayClick={() => {}}
                onPreviousDayClick={() => {}}
            />
        </div>
    );
}
