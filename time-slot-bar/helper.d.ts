import { TimeSlot as TTimeSlot, TimeSlotBarVariant } from "./types";
export declare namespace TimeSlotBarHelper {
    /**
     * Format HH:mm to am/pm display
     * @param timeString input timeString string
     */
    const formatHourlyDisplay: (timeString: string) => string;
    /**
     * Calculate width in px base on the time range in respect the cell width
     * @param start input start string
     * @param end input end string
     * @param cellWidth input cellWidth number
     */
    const calculateWidth: (start: string, end: string, cellWidth: number) => number;
    /**
     * Based on the time type, adjust the time to the nearest hour or 30 minuites marker.
     * this helps to always show time slot marker properly.
     * @param time - time to be adjusted
     * @param type - "start" or "end" indicating which boundary to adjust
     */
    const adjustTimeForMarker: (time: string, type: "start" | "end") => string;
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
    const processSlots: (range: {
        start: string;
        end: string;
    }, slots: TTimeSlot[], variant: TimeSlotBarVariant) => {
        summary: string;
        computedSlots: (TTimeSlot & {
            ariaLabel?: string;
        })[];
    };
}
