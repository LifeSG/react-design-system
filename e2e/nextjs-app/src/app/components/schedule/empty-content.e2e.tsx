"use client";
import { Schedule } from "@lifesg/react-design-system/schedule";

export default function Story() {
    return (
        <div className="story-background">
            <Schedule
                data-testid="schedule"
                date="2026-06-01"
                serviceData={[]}
                emptyContentMessage="No services available for this date."
                onPreviousDayClick={() => {}}
                onNextDayClick={() => {}}
                onCalendarDateSelect={() => {}}
                onTodayClick={() => {}}
            />
        </div>
    );
}
