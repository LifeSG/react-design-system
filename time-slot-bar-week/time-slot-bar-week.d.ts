import type { TimeSlotBarWeekProps } from "./types";
/**
 * A week calendar grid with a time axis, rendering detailed slot bars within
 * each day column.
 *
 * Use `TimeSlotBarWeek` for detailed time-of-day scheduling where each cell
 * represents a configurable time interval. For a simpler day-level overview
 * without a time axis, use `TimeSlotWeekView` instead.
 * @keywords availability, calendar, scheduling, weekly
 */
export declare const TimeSlotBarWeek: ({ disabledDates, onWeekDisplayChange, onChange, value, minDate, maxDate, startTime, endTime, slots, interval, variant, maxVisibleCellHeight, showNavigationHeader, enableSelection, onSlotClick, currentCalendarDate, ...otherProps }: TimeSlotBarWeekProps) => import("react/jsx-runtime").JSX.Element;
