import dayjs from "dayjs";
import { RowCellContainer } from "./row-bar.style";
import { RowCell } from "./row-cell";
import { RowBarProps, RowCellProps } from "./types";

export const RowBar = ({
    id,
    name,
    subtitle,
    rowMinTime,
    rowMaxTime,
    rowCells,
    rowBarColor,
    intervalWidth,
    timetableMinTime,
    timetableMaxTime,
    containerRef,
    disabledCellHoverContent,
    onEmptyCellClick,
}: RowBarProps) => {
    const occupiedCells = rowCells.filter((cell) => cell.status === "OCCUPIED");
    const rowCellArray: RowCellProps[] = [];

    // Handle non-op before hours
    if (dayjs(timetableMinTime, "HH:mm").isBefore(dayjs(rowMinTime, "HH:mm"))) {
        rowCellArray.push({
            id,
            startTime: timetableMinTime,
            endTime: rowMinTime,
            status: "DISABLED",
            intervalWidth,
            rowBarColor,
            containerRef,
        });
    }

    let currentTime = dayjs(rowMinTime, "HH:mm");
    const endTime = dayjs(rowMaxTime, "HH:mm");
    // Pointer for default cell
    let defaultCellStartTime = "";
    while (currentTime.isBefore(endTime)) {
        // Find an occupied cell in current time
        const foundCell = occupiedCells.find((occupiedCell) =>
            currentTime.isSame(dayjs(occupiedCell.startTime, "HH:mm"))
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
                    status: "DEFAULT",
                    intervalWidth,
                    rowBarColor,
                    containerRef,
                });
                defaultCellStartTime = "";
            } else if (currentTime.add(15, "minutes").isSame(endTime)) {
                rowCellArray.push({
                    id,
                    startTime: defaultCellStartTime,
                    endTime: rowMaxTime,
                    status: "DEFAULT",
                    intervalWidth,
                    rowBarColor,
                    containerRef,
                });
            }
        } else {
            // If there is a default cell before the found occupied cell, we push to the rowCellArray
            defaultCellStartTime !== "" &&
                rowCellArray.push({
                    id,
                    startTime: defaultCellStartTime,
                    endTime: foundCell.startTime,
                    status: "DEFAULT",
                    intervalWidth,
                    rowBarColor,
                    containerRef,
                });
            // Reset defaultCellStartTime
            defaultCellStartTime = "";
            // Push the found cell
            rowCellArray.push({
                ...foundCell,
                intervalWidth,
                rowBarColor,
                containerRef,
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
            status: "DISABLED",
            intervalWidth,
            rowBarColor,
            containerRef,
        });
    }

    return (
        <RowCellContainer>
            {rowCellArray.map((cell, index) => {
                return (
                    <RowCell
                        id={cell.id}
                        key={`${index}-row-cell-key`}
                        startTime={cell.startTime}
                        endTime={cell.endTime}
                        title={cell.title}
                        subtitle={cell.subtitle}
                        status={cell.status}
                        intervalWidth={cell.intervalWidth}
                        rowBarColor={cell.rowBarColor}
                        onEmptyCellClick={onEmptyCellClick}
                        containerRef={containerRef}
                        disabledCellHoverContent={disabledCellHoverContent}
                    />
                );
            })}
        </RowCellContainer>
    );
};
