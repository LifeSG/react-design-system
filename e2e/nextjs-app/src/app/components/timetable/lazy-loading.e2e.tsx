"use client";
import type { TimeTableRowData } from "@lifesg/react-design-system/timetable";
import { TimeTable } from "@lifesg/react-design-system/timetable";
import { useEffect, useRef, useState } from "react";
import styles from "./timetable.module.css";

const buildRows = (count: number): TimeTableRowData[] => {
    return Array.from({ length: count }, (_, i) => {
        const rowNum = i + 1;
        return {
            id: `row-${rowNum}`,
            name: `Resource ${rowNum}`,
            rowMinTime: "08:00",
            rowMaxTime: "13:00",
            rowCells: [
                {
                    startTime: "08:00",
                    endTime: "13:00",
                    status: rowNum % 2 === 0 ? "filled" : "default",
                },
            ],
        };
    });
};

export default function Story() {
    const [rows] = useState<TimeTableRowData[]>(() => buildRows(10));

    const handleOnPage = async () => {
        await new Promise(() => {
            // simulate long async task, do not resolve
        });
    };

    return (
        <TimeTable
            className={styles["timetable-fixed-height"]}
            data-testid="timetable"
            date="2026-05-20"
            minTime="08:00"
            maxTime="13:00"
            rowData={rows}
            totalRecords={20}
            onNextDayClick={() => {}}
            onPreviousDayClick={() => {}}
            onPage={handleOnPage}
        />
    );
}
