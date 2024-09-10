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
    blockedCellHoverContent?: string | JSX.Element | undefined;
    onEmptyCellClick?: (
        id: string,
        intervalStart: string,
        intervalEnd: string,
        e: React.MouseEvent
    ) => void;
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
    blockedCellHoverContent,
    containerRef,
    onEmptyCellClick,
}: RowBarProps) => {
    const filledCells = rowCells.filter((cell) => cell.status === "filled");
    const rowCellArray: RowCellData[] = [];

    // Handle non-op before hours
    if (dayjs(timetableMinTime, "HH:mm").isBefore(dayjs(rowMinTime, "HH:mm"))) {
        rowCellArray.push({
            id,
            startTime: timetableMinTime,
            endTime: rowMinTime,
            status: "blocked",
        });
    }

    let currentTime = dayjs(rowMinTime, "HH:mm");
    const endTime = dayjs(rowMaxTime, "HH:mm");
    // Pointer for default cell
    let defaultCellStartTime = "";
    while (currentTime.isBefore(endTime)) {
        // Find an occupied cell in current time
        const foundCell = filledCells.find((filledCell) =>
            currentTime.isSame(dayjs(filledCell.startTime, "HH:mm"))
        );

        // If no cell found, it must be a default cell
        if (!foundCell) {
            // If defaultCellStartTime is empty, update it
            if (defaultCellStartTime === "") {
                defaultCellStartTime = currentTime.format("HH:mm");
            }
            // If default cell ends on the hour, push to array
            if (currentTime.add(15, "minutes").get("minutes") === 0) {
                rowCellArray.push({
                    id,
                    startTime: defaultCellStartTime,
                    endTime: currentTime
                        .add(15, "minutes")
                        .format("HH:mm")
                        .toString(),
                    status: "default",
                });
                defaultCellStartTime = "";
            } else if (currentTime.add(15, "minutes").isSame(endTime)) {
                rowCellArray.push({
                    id,
                    startTime: defaultCellStartTime,
                    endTime: rowMaxTime,
                    status: "default",
                });
            }
        } else {
            // If there is a default cell before the found occupied cell, we push to the rowCellArray
            defaultCellStartTime !== "" &&
                rowCellArray.push({
                    id,
                    startTime: defaultCellStartTime,
                    endTime: foundCell.startTime,
                    status: "default",
                });
            // Reset defaultCellStartTime
            defaultCellStartTime = "";
            // Push the found cell
            rowCellArray.push({
                ...foundCell,
            });
            // Set current time to the end of the found occupied cell
            currentTime = dayjs(foundCell.endTime, "HH:mm");
            continue; // Go to the next iteration
        }

        // Increment current time by 15 minutes if no occupied cell found
        currentTime = currentTime.add(15, "minutes");
    }

    // Handle non-op after hours
    if (dayjs(timetableMaxTime, "HH:mm").isAfter(dayjs(rowMaxTime, "HH:mm"))) {
        rowCellArray.push({
            id,
            startTime: rowMaxTime,
            endTime: timetableMaxTime,
            status: "blocked",
        });
    }

    return (
        <RowCellContainer>
            {rowCellArray.map((cell, index) => {
                return (
                    <RowCell
                        key={`${index}-row-cell-key`}
                        {...cell}
                        intervalWidth={intervalWidth}
                        rowBarColor={rowBarColor}
                        containerRef={containerRef}
                        blockedCellHoverContent={blockedCellHoverContent}
                        onEmptyCellClick={onEmptyCellClick}
                    />
                );
            })}
        </RowCellContainer>
    );
};
