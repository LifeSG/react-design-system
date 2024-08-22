import dayjs from "dayjs";
import { RowCellContainer } from "./row-bar.style";
import { RowCell, RowCellProps } from "./row-cell";
import { RowBlock, RowData } from "./types";

export interface RowBarProps extends RowData {
    rowBlocks: RowBlock[];
    timetableMinTime: string;
    timetableMaxTime: string;
    bgColour: string;
    blockUnit: number;
    isFirst?: boolean | undefined;
    // Redirect user to url (resource detail page)
    onNameClick?: (() => void) | undefined;
}

export const RowBar = ({
    id,
    name,
    subtitle,
    rowMinTime,
    rowMaxTime,
    rowBlocks,
    bgColour,
    blockUnit,
    isFirst,
    onNameClick,
    timetableMinTime,
    timetableMaxTime,
}: RowBarProps) => {
    const bookings = rowBlocks.filter((block) => block.status === "OCCUPIED");

    const rowCellArray: RowCellProps[] = [];
    // Handle non-op before hours
    if (dayjs(timetableMinTime, "HH:mm").isBefore(dayjs(rowMinTime, "HH:mm"))) {
        rowCellArray.push({
            startTime: timetableMinTime,
            endTime: rowMinTime,
            status: "DISABLED",
            blockUnit,
            bgColour,
        });
    }

    let currentTime = dayjs(rowMinTime, "HH:mm");
    const endTime = dayjs(rowMaxTime, "HH:mm");
    // Pointer for available slot
    let availableSlotStartTime = "";
    while (currentTime.isBefore(endTime)) {
        // Find a booking in current time
        const foundBooking = bookings.find((booking) =>
            currentTime.isSame(dayjs(booking.startTime, "HH:mm"))
        );

        // If no booking found, it must be an available slot
        if (!foundBooking) {
            // If availableSlotStart is empty, update it
            if (availableSlotStartTime === "") {
                availableSlotStartTime = currentTime.format("HH:mm");
            }
            // If available slot ends on the hour, push to array
            if (currentTime.add(15, "minutes").get("minutes") === 0) {
                rowCellArray.push({
                    startTime: availableSlotStartTime,
                    endTime: currentTime
                        .add(15, "minutes")
                        .format("HH:mm")
                        .toString(),
                    status: "DEFAULT",
                    blockUnit,
                    bgColour,
                });
                availableSlotStartTime = "";
            } else if (currentTime.add(15, "minutes").isSame(endTime)) {
                rowCellArray.push({
                    startTime: availableSlotStartTime,
                    endTime: rowMaxTime,
                    status: "DEFAULT",
                    blockUnit,
                    bgColour,
                });
            }
        } else {
            // If there is an available slot before the found booking, we push to the rowCellArray
            availableSlotStartTime !== "" &&
                rowCellArray.push({
                    startTime: availableSlotStartTime,
                    endTime: foundBooking.startTime,
                    status: "DEFAULT",
                    blockUnit,
                    bgColour,
                });
            // Reset availableSlotStartTime
            availableSlotStartTime = "";
            // Push the found booking
            rowCellArray.push({ ...foundBooking, blockUnit, bgColour });
            // Set current time to the end of the found booking
            currentTime = dayjs(foundBooking.endTime, "HH:mm");
            continue; // Go to the next iteration
        }

        // Increment current time by 15 minutes if no booking found
        currentTime = currentTime.add(15, "minutes");
    }

    // Handle non-op after hours
    if (dayjs(timetableMaxTime, "HH:mm").isAfter(dayjs(rowMaxTime, "HH:mm"))) {
        rowCellArray.push({
            startTime: rowMaxTime,
            endTime: timetableMaxTime,
            status: "DISABLED",
            blockUnit,
            bgColour,
        });
    }

    return (
        <RowCellContainer $isFirst={isFirst}>
            {rowCellArray.map((cell) => {
                return (
                    <RowCell
                        key={`${cell.title}-key`}
                        startTime={cell.startTime}
                        endTime={cell.endTime}
                        title={cell.title}
                        subtitle={cell.subtitle}
                        status={cell.status}
                        blockUnit={cell.blockUnit}
                        bgColour={cell.bgColour}
                    />
                );
            })}
        </RowCellContainer>
    );
};
