import dayjs from "dayjs";
import { RefObject, useMemo } from "react";
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
    containerRef: RefObject<HTMLDivElement>;
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
}: RowBarProps) => {
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
        let lastRoundedEndTime: string | undefined;

        sortedRowCells.forEach((cell, index) => {
            const { startTime, endTime } = cell;
            let roundedStartTime = TimeHelper.roundToNearestInterval(
                startTime,
                ROW_INTERVAL
            );

            // NOTE - Prevent overlapping rounded start time and end time cells
            const isStartTimeBeforePreviousEndTime =
                lastRoundedEndTime &&
                dayjs(roundedStartTime, "HH:mm").isBefore(
                    dayjs(lastRoundedEndTime, "HH:mm")
                );
            if (isStartTimeBeforePreviousEndTime) {
                roundedStartTime = TimeHelper.roundToNearestInterval(
                    startTime,
                    ROW_INTERVAL,
                    true
                );
            }

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
                    ROW_INTERVAL
                ),
                "HH:mm"
            );
            const parsedEndTime = dayjs(roundedEndTime, "HH:mm");

            let curr = parsedEndTime;

            // Auto block slots between cell time gaps
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
            lastRoundedEndTime = curr.format("HH:mm").toString();
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
