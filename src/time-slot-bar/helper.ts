import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DateHelper, StringHelper } from "src/util";
import { TimeHelper } from "../util/time-helper";
import {
    ESlotStateLabel,
    TimeSlot as TTimeSlot,
    TimeSlotBarVariant,
} from "./types";
// Load plugins
dayjs.extend(customParseFormat);

// ===========================================================================
// HELPER FUNCTIONS
// ===========================================================================

export namespace TimeSlotBarHelper {
    /**
     * Format HH:mm to am/pm display
     * @param timeString input timeString string
     */
    export const formatHourlyDisplay = (timeString: string) => {
        const parsedTime = dayjs(timeString, "HH:mm");
        return parsedTime.format("ha");
    };

    /**
     * Calculate width in px base on the time range in respect the cell width
     * @param start input start string
     * @param end input end string
     * @param cellWidth input cellWidth number
     */
    export const calculateWidth = (
        start: string,
        end: string,
        cellWidth: number
    ) => {
        /**
         * Each CELL_WIDTH is 30min interval
         * Assuming 15 minutes corresponds to a fixed width of x cellWidth pixels (1/2 of CELL_WIDTH)
         */
        return (
            (DateHelper.getTimeDiffInMinutes(start, end) / 15) * (cellWidth / 2)
        );
    };

    /**
     * Based on the time type, adjust the time to the nearest hour or 30 minuites marker.
     * this helps to always show time slot marker properly.
     * @param time - time to be adjusted
     * @param type - "start" or "end" indicating which boundary to adjust
     */
    export const adjustTimeForMarker = (
        time: string,
        type: "start" | "end"
    ): string => {
        const parsedTime = dayjs(time, "HH:mm");
        switch (type) {
            case "start": {
                // For xx:01 to xx:29, adjust to xx:00
                if (parsedTime.minute() > 0 && parsedTime.minute() < 30) {
                    return parsedTime.set("minute", 0).format("HH:mm");
                }
                // For xx:31 to xx:59, adjust to xx:30
                if (parsedTime.minute() > 30 && parsedTime.minute() < 60) {
                    return parsedTime.set("minute", 30).format("HH:mm");
                }
                break;
            }
            case "end": {
                // For xx:01 to xx:29, adjust to xx:30
                if (parsedTime.minute() > 0 && parsedTime.minute() < 30) {
                    return parsedTime.set("minute", 30).format("HH:mm");
                }
                // For xx:31 to xx:59, adjust to next hour xx:00
                if (parsedTime.minute() > 30 && parsedTime.minute() < 60) {
                    const nextHour = parsedTime.add(1, "hour");
                    // If it's 23:xx and rounds up to 24:00
                    if (nextHour.hour() === 0) {
                        return "24:00";
                    }
                    return nextHour.set("minute", 0).format("HH:mm");
                }
                break;
            }
            default:
                return time;
        }
        return time;
    };

    export const getSlotAriaLabel = (
        slotStartTime: string,
        slotEndTime: string,
        isAvail?: boolean,
        label?: string
    ) =>
        StringHelper.joinNonEmptyStrings([
            TimeHelper.formatTimeRange(slotStartTime, slotEndTime),
            isAvail ? ESlotStateLabel.avail : ESlotStateLabel.unavail,
            label,
        ]);

    export const processSlots = (
        slots: TTimeSlot[],
        variant: TimeSlotBarVariant
    ) => {
        const summaryParts: string[] = ["Time slot bar"];
        // Slots including real and phantom slots, all with aria labels
        const computedSlots: (TTimeSlot & {
            ariaLabel?: string;
        })[] = [];

        slots.forEach((slot, index, self) => {
            const {
                startTime: slotStartTime,
                endTime: slotEndTime,
                clickable = true,
                label,
            } = slot;

            const slotAriaLabel = TimeSlotBarHelper.getSlotAriaLabel(
                slotStartTime,
                slotEndTime,
                clickable,
                label
            );

            if (variant === "minified") summaryParts.push(slotAriaLabel);

            computedSlots.push({
                ...slot,
                ariaLabel: variant === "default" ? slotAriaLabel : undefined,
            });

            // Check and create phantom slots if a gap follows current slot
            const { startTime: nextSlotStartTime } = self[index + 1] ?? {};
            const hasGapAfter =
                nextSlotStartTime &&
                !TimeHelper.isSameTime(slotEndTime, nextSlotStartTime);

            if (hasGapAfter) {
                const gapAriaLabel = TimeSlotBarHelper.getSlotAriaLabel(
                    slotEndTime,
                    nextSlotStartTime,
                    false
                );

                if (variant === "minified") summaryParts.push(gapAriaLabel);

                computedSlots.push({
                    id: `${slot.id}-gap`,
                    startTime: slotEndTime,
                    endTime: nextSlotStartTime,
                    clickable: false,
                    ariaLabel: variant === "default" ? gapAriaLabel : undefined,
                    label: undefined,
                    styleAttributes: { backgroundColor: "#00000000" },
                });
            }
        });

        return {
            summary: StringHelper.joinNonEmptyStrings(summaryParts),
            computedSlots,
        };
    };
}
