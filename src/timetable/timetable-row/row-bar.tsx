import dayjs from "dayjs";
import { MutableRefObject, useMemo } from "react";
import { TimeHelper } from "../../util/time-helper";
import { ROW_INTERVAL } from "../const";
import { InternalTimeTableRowCellData, RowBarColors } from "../internal-types";
import { TimeTableRowData } from "../types";
import { RowCellContainer } from "./row-bar.style";
import { RowCell } from "./row-cell";

interface RowBarProps extends TimeTableRowData {
    timetableMinTime: string;
    timetableMaxTime: string;
    intervalWidth: number;
    containerRef: MutableRefObject<HTMLDivElement>;
    rowBarColor: RowBarColors;
}

export const RowBar = ({
    id,
    timetableMinTime,
    timetableMaxTime,
    rowMinTime,
    rowMaxTime,
    rowCells,
    rowBarColor,
    intervalWidth,
    containerRef,
    outOfRangeCellPopover,
    ...otherProps
}: RowBarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"] || "timetable-row";
    const roundedMinTime = rowMinTime
        ? TimeHelper.roundToNearestInterval(rowMinTime, ROW_INTERVAL)
        : timetableMinTime;
    const roundedMaxTime = rowMaxTime
        ? TimeHelper.roundToNearestInterval(rowMaxTime, ROW_INTERVAL, true)
        : timetableMaxTime;

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
        const rowCellArray: InternalTimeTableRowCellData[] = [];

        // Handle non-op before hours
        if (
            roundedMinTime &&
            dayjs(timetableMinTime, "HH:mm").isBefore(
                dayjs(roundedMinTime, "HH:mm")
            )
        ) {
            rowCellArray.push({
                id,
                startTime: timetableMinTime,
                endTime: roundedMinTime,
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
            const { startTime, endTime } = cell;
            const roundedStartTime = TimeHelper.roundToNearestInterval(
                startTime,
                ROW_INTERVAL,
                index !== 0
            );
            const roundedEndTime = TimeHelper.roundToNearestInterval(
                endTime,
                ROW_INTERVAL,
                true
            );
            rowCellArray.push({ ...cell, roundedStartTime, roundedEndTime });

            const nextSlotStartTime =
                rowCells[index + 1]?.startTime || roundedMaxTime; // Get next cell start time, if next cell don't exist, use current row max time
            const roundedNextSlotStartTime = dayjs(
                TimeHelper.roundToNearestInterval(
                    nextSlotStartTime,
                    ROW_INTERVAL,
                    true
                ),
                "HH:mm"
            );
            const parsedEndTime = dayjs(roundedEndTime, "HH:mm");

            let curr = parsedEndTime;
            while (curr.isBefore(roundedNextSlotStartTime)) {
                if (!isOnTheSameHour(curr, roundedNextSlotStartTime)) {
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
                        endTime: roundedNextSlotStartTime
                            .format("HH:mm")
                            .toString(),
                        status: "disabled",
                    });
                    curr = roundedNextSlotStartTime;
                }
            }
        });

        // Handle non-op after hours
        if (
            roundedMaxTime &&
            dayjs(timetableMaxTime, "HH:mm").isAfter(
                dayjs(roundedMaxTime, "HH:mm")
            )
        ) {
            rowCellArray.push({
                id,
                startTime: roundedMaxTime,
                endTime: timetableMaxTime,
                status: "blocked",
                customPopover: outOfRangeCellPopover,
            });
        }

        // Handle empty row cells and no min/max time to block from timetable min to max
        if (sortedRowCells.length === 0 && !rowMinTime && !rowMaxTime) {
            rowCellArray.push({
                id,
                startTime: timetableMinTime,
                endTime: timetableMaxTime,
                status: "blocked",
                customPopover: outOfRangeCellPopover,
            });
        }
        return rowCellArray;
    }, [
        roundedMinTime,
        timetableMinTime,
        rowCells,
        roundedMaxTime,
        timetableMaxTime,
        rowMinTime,
        rowMaxTime,
        id,
        outOfRangeCellPopover,
    ]);

    return (
        <RowCellContainer data-testid={testId} {...otherProps}>
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
