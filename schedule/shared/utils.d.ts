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
export declare function getTimelineOffset(minTime: string, maxTime: string): number | null;
/**
 * Calculates the scroll position for a given time relative to the minimum time.
 *
 * @param minTime - The earliest time displayed in the scheduler (format: "HH:mm").
 * @param targetTime - The time to scroll to (format: "HH:mm").
 * @returns The pixel offset from the top for scrolling, or null if target is before minTime.
 */
export declare function calculateScrollPosition(minTime: string, targetTime: string): number | null;
/**
 * Converts minutes to time string (HH:MM format)
 *
 * @param minutes - The number of minutes to convert
 * @returns Time string in HH:MM format
 */
export declare function minutesToTime(minutes: number): string;
/**
 * Calculate offset position within a 30-minute time cell
 *
 * @param slotStartTime - The start time of the slot (format: "HH:mm")
 * @param timeSlotStart - The start time of the time cell (format: "HH:mm")
 * @returns The vertical offset in pixels
 */
export declare function calculateSlotOffset(slotStartTime: string, timeSlotStart: string): number;
/**
 * Find all slots that start within a specific time range
 *
 * @param slots - Array of slots to filter
 * @param startTime - Start time of the range (format: "HH:mm")
 * @param endTime - End time of the range (format: "HH:mm")
 * @param targetDate - Optional date filter (format: "YYYY-MM-DD")
 * @returns Array of slots that start within the time range
 */
export declare function findSlotsStartingInTimeRange(slots: ScheduleSlotProps[], startTime: string, endTime: string, targetDate?: string): ScheduleSlotProps[];
/**
 * Find all slots that overlap with a specific time range
 *
 * @param slots - Array of slots to filter
 * @param startTime - Start time of the range (format: "HH:mm")
 * @param endTime - End time of the range (format: "HH:mm")
 * @param targetDate - Optional date filter (format: "YYYY-MM-DD")
 * @returns Array of slots that overlap with the time range
 */
export declare function findSlotsInTimeRange(slots: ScheduleSlotProps[], startTime: string, endTime: string, targetDate?: string): ScheduleSlotProps[];
/**
 * Check if a time cell is covered by any existing slots
 *
 * @param slots - Array of slots to check against
 * @param timeCell - Time cell to check (format: "HH:mm")
 * @returns True if the time cell is covered by any slot
 */
export declare function isTimeCellCovered(slots: ScheduleSlotProps[], timeCell: string): boolean;
