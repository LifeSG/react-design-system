import dayjs from "dayjs";
import { CELL_HEIGHT, SLOT_INTERVAL } from "../const";
import { TimeHelper } from "../../util/time-helper";
import { ScheduleSlotProps } from "../types";

/**
 * Calculates the vertical offset (in pixels) for the current time indicator (timeline)
 * within the scheduler view, based on the provided minimum and maximum time bounds.
 * Returns null if the current time is outside the given range.
 *
 * @param minTime - The earliest time displayed in the scheduler (format: "HH:mm").
 * @param maxTime - The latest time displayed in the scheduler (format: "HH:mm").
 * @returns The pixel offset from the top for the timeline, or null if out of range.
 */
export function getTimelineOffset(
    minTime: string,
    maxTime: string
): number | null {
    const now = dayjs();
    const min = dayjs(now.format("YYYY-MM-DD") + " " + minTime);
    const max = dayjs(now.format("YYYY-MM-DD") + " " + maxTime);
    if (now.isBefore(min) || now.isAfter(max)) return null;
    const minutesSinceMin = now.diff(min, "minute");
    const totalMinutes = max.diff(min, "minute");
    const totalHeight = (totalMinutes / SLOT_INTERVAL) * CELL_HEIGHT;
    const offset = (minutesSinceMin / totalMinutes) * totalHeight;
    return offset;
}

/**
 * Calculates the scroll position for a given time relative to the minimum time.
 *
 * @param minTime - The earliest time displayed in the scheduler (format: "HH:mm").
 * @param targetTime - The time to scroll to (format: "HH:mm").
 * @returns The pixel offset from the top for scrolling, or null if target is before minTime.
 */
export function calculateScrollPosition(
    minTime: string,
    targetTime: string
): number | null {
    const min = dayjs(`2024-01-01 ${minTime}`);
    const target = dayjs(`2024-01-01 ${targetTime}`);

    // Only calculate if the target time is within or after the minimum time
    if (target.isAfter(min) || target.isSame(min)) {
        const minutesFromMin = target.diff(min, "minute");
        return (minutesFromMin / SLOT_INTERVAL) * CELL_HEIGHT;
    }

    return null;
}

/**
 * Converts minutes to time string (HH:MM format)
 *
 * @param minutes - The number of minutes to convert
 * @returns Time string in HH:MM format
 */
export function minutesToTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}`;
}

/**
 * Calculate offset position within a 30-minute time cell
 *
 * @param slotStartTime - The start time of the slot (format: "HH:mm")
 * @param timeSlotStart - The start time of the time cell (format: "HH:mm")
 * @returns The vertical offset in pixels
 */
export function calculateSlotOffset(
    slotStartTime: string,
    timeSlotStart: string
): number {
    const slotStartMinutes = TimeHelper.timeToMinutes(slotStartTime);
    const timeSlotStartMinutes = TimeHelper.timeToMinutes(timeSlotStart);
    const offsetMinutes = slotStartMinutes - timeSlotStartMinutes;
    return (offsetMinutes / 30) * CELL_HEIGHT;
}

/**
 * Find all slots that start within a specific time range
 *
 * @param slots - Array of slots to filter
 * @param startTime - Start time of the range (format: "HH:mm")
 * @param endTime - End time of the range (format: "HH:mm")
 * @param targetDate - Optional date filter (format: "YYYY-MM-DD")
 * @returns Array of slots that start within the time range
 */
export function findSlotsStartingInTimeRange(
    slots: ScheduleSlotProps[],
    startTime: string,
    endTime: string,
    targetDate?: string
): ScheduleSlotProps[] {
    const rangeStartMinutes = TimeHelper.timeToMinutes(startTime);
    const rangeEndMinutes = TimeHelper.timeToMinutes(endTime);

    return slots.filter((slot) => {
        if (targetDate && slot.date !== targetDate) return false;

        const slotStartMinutes = TimeHelper.timeToMinutes(slot.startTime);
        return (
            slotStartMinutes >= rangeStartMinutes &&
            slotStartMinutes < rangeEndMinutes
        );
    });
}

/**
 * Find all slots that overlap with a specific time range
 *
 * @param slots - Array of slots to filter
 * @param startTime - Start time of the range (format: "HH:mm")
 * @param endTime - End time of the range (format: "HH:mm")
 * @param targetDate - Optional date filter (format: "YYYY-MM-DD")
 * @returns Array of slots that overlap with the time range
 */
export function findSlotsInTimeRange(
    slots: ScheduleSlotProps[],
    startTime: string,
    endTime: string,
    targetDate?: string
): ScheduleSlotProps[] {
    const rangeStartMinutes = TimeHelper.timeToMinutes(startTime);
    const rangeEndMinutes = TimeHelper.timeToMinutes(endTime);

    return slots.filter((slot) => {
        if (targetDate && slot.date !== targetDate) return false;

        const slotStartMinutes = TimeHelper.timeToMinutes(slot.startTime);
        const slotEndMinutes = TimeHelper.timeToMinutes(slot.endTime);

        // Slot overlaps if it starts before range ends and ends after range starts
        return (
            slotStartMinutes < rangeEndMinutes &&
            slotEndMinutes > rangeStartMinutes
        );
    });
}

/**
 * Check if a time cell is covered by any existing slots
 *
 * @param slots - Array of slots to check against
 * @param timeCell - Time cell to check (format: "HH:mm")
 * @returns True if the time cell is covered by any slot
 */
export function isTimeCellCovered(
    slots: ScheduleSlotProps[],
    timeCell: string
): boolean {
    const timeCellMinutes = TimeHelper.timeToMinutes(timeCell);

    return slots.some((slot) => {
        const slotStartMinutes = TimeHelper.timeToMinutes(slot.startTime);
        const slotEndMinutes = TimeHelper.timeToMinutes(slot.endTime);

        return (
            timeCellMinutes >= slotStartMinutes &&
            timeCellMinutes < slotEndMinutes
        );
    });
}
