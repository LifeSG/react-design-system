import type { TimeSlotWeekViewProps } from "./types";
/**
 * A week calendar grid that displays slot availability within each day column.
 *
 * Use `TimeSlotWeekView` for a day-level overview of slot availability across
 * a week. For detailed time-of-day scheduling with a time axis, use
 * `TimeSlotBarWeek` instead.
 */
export declare const TimeSlotWeekView: ({ disabledDates, onWeekDisplayChange, onChange, value, minDate, maxDate, slots, showNavigationHeader, enableSelection, onSlotClick, currentCalendarDate, ...otherProps }: TimeSlotWeekViewProps) => import("react/jsx-runtime").JSX.Element;
