import dayjs from "dayjs";
import { RefObject, useMemo } from "react";
import { RowBarColors } from "../const";
import { TimeTableRowCellData, TimeTableRowData } from "../types";
import { RowCellContainer } from "./row-bar.style";
import { RowCell } from "./row-cell";

interface RowBarProps extends TimeTableRowData {
    timetableMinTime: string;
    timetableMaxTime: string;
    intervalWidth: number;
    containerRef: RefObject<HTMLDivElement>;
    rowBarColor: RowBarColors;
}

export const RowBar = ({
    id,
    timetableMinTime,
    timetableMaxTime,
    rowMinTime = timetableMinTime,
    rowMaxTime = timetableMaxTime,
    rowCells,
    rowBarColor,
    intervalWidth,
    containerRef,
    outOfRangeCellPopover,
}: RowBarProps) => {
    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    const isOnTheSameHour = (
        time1: dayjs.Dayjs,
        time2: dayjs.Dayjs
    ): boolean => {
        return time1.get("hour") == time2.get("hour");
    };

    const rowCellArray = useMemo(() => {
        const rowCellArray: TimeTableRowCellData[] = [];

        // Handle non-op before hours
        if (
            dayjs(timetableMinTime, "HH:mm").isBefore(
                dayjs(rowMinTime, "HH:mm")
            )
        ) {
            rowCellArray.push({
                id,
                startTime: timetableMinTime,
                endTime: rowMinTime,
                status: "blocked",
                customPopover: outOfRangeCellPopover,
            });
        }

        const sortedRowCells = [...rowCells].sort((a, b) => {
            const timeA = dayjs(a.startTime, "HH:mm");
            const timeB = dayjs(b.startTime, "HH:mm");
            if (timeA.isBefore(timeB)) return -1;
            if (timeA.isAfter(timeB)) return 1;
            return 0;
        });

        sortedRowCells.forEach((cell, index) => {
            const { endTime } = cell;
            rowCellArray.push(cell);

            const nextSlotStartTime = dayjs(
                rowCells[index + 1]?.startTime || rowMaxTime, // Get next cell start time, if next cell don't exist, use current row max time
                "HH:mm"
            );
            const parsedEndTime = dayjs(endTime, "HH:mm");

            let curr = parsedEndTime;
            while (curr.isBefore(nextSlotStartTime)) {
                if (!isOnTheSameHour(curr, nextSlotStartTime)) {
                    const nextHour = curr.add(1, "hour").startOf("hour"); // Round to the next hour
                    rowCellArray.push({
                        id,
                        startTime: curr.format("HH:mm").toString(),
                        endTime: nextHour.format("HH:mm").toString(),
                        status: "disabled",
                    });
                    curr = nextHour;
                } else {
                    rowCellArray.push({
                        id,
                        startTime: curr.format("HH:mm").toString(),
                        endTime: nextSlotStartTime.format("HH:mm").toString(),
                        status: "disabled",
                    });
                    curr = nextSlotStartTime;
                }
            }
        });

        // Handle non-op after hours
        if (
            dayjs(timetableMaxTime, "HH:mm").isAfter(dayjs(rowMaxTime, "HH:mm"))
        ) {
            rowCellArray.push({
                id,
                startTime: rowMaxTime,
                endTime: timetableMaxTime,
                status: "blocked",
                customPopover: outOfRangeCellPopover,
            });
        }

        return rowCellArray;
    }, [
        id,
        timetableMinTime,
        timetableMaxTime,
        rowMinTime,
        rowMaxTime,
        rowCells,
        outOfRangeCellPopover,
    ]);

    return (
        <RowCellContainer data-testid="timetable-row">
            {rowCellArray.map((cell, index) => {
                return (
                    <RowCell
                        key={`${index}-row-cell-key`}
                        {...cell}
                        intervalWidth={intervalWidth}
                        rowBarColor={rowBarColor}
                        containerRef={containerRef}
                    />
                );
            })}
        </RowCellContainer>
    );
};
