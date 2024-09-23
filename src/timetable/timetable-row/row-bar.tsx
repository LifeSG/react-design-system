import dayjs from "dayjs";
import { MutableRefObject } from "react";
import { RowCellContainer } from "./row-bar.style";
import { RowCell } from "./row-cell";
import { RowBarColors, RowCellData, RowData } from "../types";

interface RowBarProps extends RowData {
    timetableMinTime: string;
    timetableMaxTime: string;
    intervalWidth: number;
    containerRef: MutableRefObject<HTMLDivElement>;
    rowBarColor: RowBarColors;
    "data-testid"?: string | undefined;
    onCellClick?: (data: RowCellData, e: React.MouseEvent) => void;
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
    outsideOpHoursCellCustomPopover,
    ...optionalProps
}: RowBarProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const rowCellArray: RowCellData[] = [];

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================

    const isOnTheSameHour = (
        time1: dayjs.Dayjs,
        time2: dayjs.Dayjs
    ): boolean => {
        return time1.get("hour") == time2.get("hour");
    };

    // Handle non-op before hours
    if (dayjs(timetableMinTime, "HH:mm").isBefore(dayjs(rowMinTime, "HH:mm"))) {
        rowCellArray.push({
            id,
            startTime: timetableMinTime,
            endTime: rowMinTime,
            status: "blocked",
            customPopover: outsideOpHoursCellCustomPopover,
        });
    }

    rowCells.forEach((cell, index) => {
        const { endTime } = cell;
        rowCellArray.push(cell);

        const nextSlotStartTime = dayjs(
            rowCells[index + 1]?.startTime,
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
                    status: undefined,
                });
                curr = nextHour;
            } else {
                rowCellArray.push({
                    id,
                    startTime: curr.format("HH:mm").toString(),
                    endTime: nextSlotStartTime.format("HH:mm").toString(),
                    status: undefined,
                });
                curr = nextSlotStartTime;
            }
        }
    });

    // Handle non-op after hours
    if (dayjs(timetableMaxTime, "HH:mm").isAfter(dayjs(rowMaxTime, "HH:mm"))) {
        rowCellArray.push({
            id,
            startTime: rowMaxTime,
            endTime: timetableMaxTime,
            status: "blocked",
            customPopover: outsideOpHoursCellCustomPopover,
        });
    }

    return (
        <RowCellContainer data-testid={optionalProps["data-testid"]}>
            {rowCellArray.map((cell, index) => {
                return (
                    <RowCell
                        key={`${index}-row-cell-key`}
                        {...cell}
                        intervalWidth={intervalWidth}
                        rowBarColor={rowBarColor}
                        containerRef={containerRef}
                        onCellClick={optionalProps.onCellClick}
                    />
                );
            })}
        </RowCellContainer>
    );
};
