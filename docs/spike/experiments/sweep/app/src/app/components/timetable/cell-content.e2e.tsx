"use client";
import { TimeTable } from "@lifesg/react-design-system/timetable";

export default function Story() {
    return (
        <div className="story-background">
            <TimeTable
                data-testid="timetable"
                date="2026-05-20"
                minTime="08:00"
                maxTime="10:00"
                rowData={[
                    {
                        id: "title-only",
                        name: "Title only",
                        rowCells: [
                            {
                                startTime: "08:00",
                                endTime: "09:00",
                                status: "default",
                                title: "Cell title",
                            },
                        ],
                    },
                    {
                        id: "subtitle-only",
                        name: "Subtitle only",
                        rowCells: [
                            {
                                startTime: "08:00",
                                endTime: "09:00",
                                status: "default",
                                subtitle: "Cell subtitle",
                            },
                        ],
                    },
                    {
                        id: "title-and-subtitle",
                        name: "Title and subtitle",
                        rowCells: [
                            {
                                startTime: "08:00",
                                endTime: "09:00",
                                status: "default",
                                title: "Cell title",
                                subtitle: "Cell subtitle",
                            },
                        ],
                    },
                    {
                        id: "title-and-subtitle",
                        name: "Long title and subtitle",
                        rowCells: [
                            {
                                startTime: "08:00",
                                endTime: "09:00",
                                status: "default",
                                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                subtitle:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                            },
                        ],
                    },
                ]}
                onNextDayClick={() => {}}
                onPreviousDayClick={() => {}}
            />
        </div>
    );
}
