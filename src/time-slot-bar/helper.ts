import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DateHelper, SimpleIdGenerator, StringHelper } from "src/util";
import { TimeHelper } from "../util/time-helper";
import { TimeSlot as TTimeSlot, TimeSlotBarVariant } from "./types";
// Load plugins
dayjs.extend(customParseFormat);

// ===========================================================================
// INTERNAL TYPES
// ===========================================================================

enum ESlotStateLabel {
    avail = "Available",
    unavail = "Unavailable",
}

// ===========================================================================
// INTERNAL HELPERS
// ===========================================================================

const getSlotAriaLabel = (
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

const buildUnavailableSlot = (
    startTime: string,
    endTime: string,
    id: string
): TTimeSlot & { ariaLabel?: string } => ({
    id,
    startTime,
    endTime,
    clickable: false,
    label: undefined,
    styleAttributes: { backgroundColor: "transparent" },
});

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

    /**
     * Process raw slots and any gaps in the given time range.
     *
     * Builds a summary string and a list of slots that includes:
     * - original slots,
     * - leading/trailing unavailable time gaps,
     * - gap slots inserted between non-contiguous slots.
     *
     * @param range - start/end bounds for the timeslot bar.
     * @param slots - user-provided slots to render.
     * @param variant - display variant controlling summary and aria label behavior.
     * @returns summary for container aria-label and computed slots ready for rendering.
     */
    export const processSlots = (
        range: { start: string; end: string },
        slots: TTimeSlot[],
        variant: TimeSlotBarVariant
    ) => {
        const summaryParts: string[] = ["Time slot bar"];
        // Build visible slots plus any unavailable gaps
        const computedSlots: (TTimeSlot & {
            ariaLabel?: string;
        })[] = [];

        const createAriaLabelAndPushSlot = (slot: TTimeSlot) => {
            const ariaLabel = getSlotAriaLabel(
                slot.startTime,
                slot.endTime,
                slot.clickable ?? true,
                slot.label
            );

            if (variant === "minified") summaryParts.push(ariaLabel);
            computedSlots.push({
                ...slot,
                ariaLabel: variant === "default" ? ariaLabel : undefined,
            });
        };

        if (slots.length < 1) {
            // No real slots: represent the whole range as unavailable
            const fullUnavailSlot = buildUnavailableSlot(
                range.start,
                range.end,
                SimpleIdGenerator.generate()
            );
            createAriaLabelAndPushSlot(fullUnavailSlot);

            return {
                summary: StringHelper.joinNonEmptyStrings(summaryParts),
                computedSlots,
            };
        }

        const sortedSlots = [...slots].sort((a, b) => {
            const timeA = dayjs(a.startTime, "HH:mm");
            const timeB = dayjs(b.startTime, "HH:mm");
            if (timeA.isBefore(timeB)) return -1;
            if (timeA.isAfter(timeB)) return 1;
            return 0;
        });

        if (!TimeHelper.isSameTime(range.start, sortedSlots[0].startTime)) {
            // Add leading unavailable gap before the first slot
            const leadingUnavailSlot = buildUnavailableSlot(
                range.start,
                sortedSlots[0].startTime,
                SimpleIdGenerator.generate()
            );
            createAriaLabelAndPushSlot(leadingUnavailSlot);
        }

        sortedSlots.forEach((slot, index, self) => {
            createAriaLabelAndPushSlot(slot);

            const { endTime: slotEndTime } = slot;
            const { startTime: nextSlotStartTime } = self[index + 1] ?? {};
            const hasGapAfter =
                nextSlotStartTime &&
                !TimeHelper.isSameTime(slotEndTime, nextSlotStartTime);

            if (hasGapAfter) {
                // Add a gap slot between consecutive slots if non-contiguous
                const unavailSlot = buildUnavailableSlot(
                    slotEndTime,
                    nextSlotStartTime,
                    SimpleIdGenerator.generate()
                );
                createAriaLabelAndPushSlot(unavailSlot);
            }
        });

        const lastSlot = sortedSlots[sortedSlots.length - 1];
        if (!TimeHelper.isSameTime(range.end, lastSlot.endTime)) {
            // Add trailing unavailable gap after the last slot
            const trailingUnavailSlot = buildUnavailableSlot(
                lastSlot.endTime,
                range.end,
                SimpleIdGenerator.generate()
            );
            createAriaLabelAndPushSlot(trailingUnavailSlot);
        }

        return {
            summary: StringHelper.joinNonEmptyStrings(summaryParts),
            computedSlots,
        };
    };
}
