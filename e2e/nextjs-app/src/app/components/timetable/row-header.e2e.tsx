"use client";
import { TimeTable } from "@lifesg/react-design-system/timetable";
import styles from "./timetable.module.css";

export default function Story() {
    return (
        <div className="story-background">
            <TimeTable
                data-testid="timetable"
                date="2026-05-20"
                minTime="08:00"
                maxTime="13:00"
                rowData={[
                    {
                        id: "no-subtitle",
                        name: "Row without subtitle",
                        rowMinTime: "08:00",
                        rowMaxTime: "13:00",
                        rowCells: [
                            {
                                startTime: "08:00",
                                endTime: "13:00",
                                status: "filled",
                            },
                        ],
                    },
                    {
                        id: "with-subtitle",
                        name: "Row with subtitle",
                        subtitle: "This is a subtitle",
                        rowMinTime: "08:00",
                        rowMaxTime: "13:00",
                        rowCells: [
                            {
                                startTime: "08:00",
                                endTime: "13:00",
                                status: "filled",
                            },
                        ],
                    },
                    {
                        id: "with-custom-subtitle",
                        name: "Row with custom subtitle",
                        subtitle: (
                            <span className={styles["custom-element"]}>
                                Custom
                            </span>
                        ),
                        rowMinTime: "08:00",
                        rowMaxTime: "13:00",
                        rowCells: [
                            {
                                startTime: "08:00",
                                endTime: "13:00",
                                status: "filled",
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
