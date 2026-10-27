"use client";
import { Schedule } from "@lifesg/react-design-system/schedule";

export default function Story() {
    return (
        <div className="story-background">
            <Schedule
                data-testid="schedule"
                date="2026-06-01"
                serviceData={[
                    {
                        id: "service-d",
                        name: "Service D",
                        slots: [
                            {
                                id: "d1",
                                date: "2026-06-01",
                                startTime: "09:00",
                                endTime: "10:00",
                                status: "pending",
                                capacity: 4,
                                booked: 2,
                            },
                            {
                                id: "d2",
                                date: "2026-06-01",
                                startTime: "15:00",
                                endTime: "16:00",
                                status: "available",
                                capacity: 4,
                                booked: 0,
                            },
                        ],
                    },
                ]}
                loading={true}
                onPreviousDayClick={() => {}}
                onNextDayClick={() => {}}
                onCalendarDateSelect={() => {}}
                onTodayClick={() => {}}
            />
        </div>
    );
}
