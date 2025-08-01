import dayjs from "dayjs";
import { CELL_HEIGHT, SLOT_INTERVAL } from "../const";

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
