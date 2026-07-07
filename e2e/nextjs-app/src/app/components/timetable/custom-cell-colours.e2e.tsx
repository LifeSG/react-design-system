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
                    id: "custom-colours-default-style",
                    name: "Custom colours",
                    rowMinTime: "08:00",
                    rowMaxTime: "13:00",
                    rowCells: [
                        {
                            startTime: "08:00",
                            endTime: "10:30",
                            status: "filled",
                            title: "Custom filled",
                            onClick: () => {},
                            cellStyleAttributes: {
                                backgroundColor: "#E3F2FD",
                                altBackgroundColor: "#FCFCFC",
                            },
                        },
                        {
                            startTime: "10:30",
                            endTime: "13:00",
                            status: "blocked",
                            title: "Custom blocked",
                            onClick: () => {},
                            cellStyleAttributes: {
                                backgroundColor: "#FFE5E5",
                                altBackgroundColor: "#FFCCCC",
                            },
                        },
                    ],
                },
                {
                    id: "custom-colours-default-style",
                    name: "Custom hover colours",
                    rowMinTime: "08:00",
                    rowMaxTime: "13:00",
                    rowCells: [
                        {
                            startTime: "08:00",
                            endTime: "10:30",
                            status: "filled",
                            title: "Custom hover filled",
                            onClick: () => {},
                            cellStyleAttributes: {
                                backgroundColor: "#E3F2FD",
                                hoverBackgroundColor: "#FFF9C4",
                            },
                        },
                        {
                            startTime: "10:30",
                            endTime: "13:00",
                            status: "blocked",
                            title: "Custom hover blocked",
                            onClick: () => {},
                            cellStyleAttributes: {
                                backgroundColor: "#FFE5E5",
                                altBackgroundColor: "#FFCCCC",
                                hoverBackgroundColor: "#FFF9C4",
                                altHoverBackgroundColor: "#FFEE8D",
                            },
                        },
                    ],
                },
                {
                    id: "custom-style-type",
                    name: "Custom style type",
                    rowMinTime: "08:00",
                    rowMaxTime: "13:00",
                    rowCells: [
                        {
                            startTime: "08:00",
                            endTime: "10:30",
                            status: "filled",
                            title: "Striped",
                            cellStyleAttributes: {
                                backgroundColor: "#E3F2FD",
                                altBackgroundColor: "#FCFCFC",
                                styleType: "stripes",
                            },
                        },
                        {
                            startTime: "10:30",
                            endTime: "13:00",
                            status: "blocked",
                            title: "Solid",
                            cellStyleAttributes: {
                                backgroundColor: "#FFE5E5",
                                altBackgroundColor: "#FFCCCC",
                                styleType: "solid",
                            },
                        },
                    ],
                },
            ]}
            onNextDayClick={() => {}}
            onPreviousDayClick={() => {}}
        />
    );
}
