import type { CommonCalendarProps } from "../shared/internal-calendar/types";
import type { TimeSlot } from "../time-slot-bar/types";

/**
 * Props for the `TimeSlotWeekView` component.
 */
export interface TimeSlotWeekViewProps extends CommonCalendarProps {
    // Basic component props
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;

    /**
     * The currently selected date in `YYYY-MM-DD` format.
     * Controls the highlighted day in the week view.
     */
    value?: string | undefined;
    /**
     * Map of date strings (YYYY-MM-DD) to an array of `TimeSlot`
     * entries displayed in that day's column.
     */
    slots?: { [date: string]: TimeSlot[] } | undefined;
    /**
     * Whether to show the month/year picker and the prev/next week navigation
     * arrows above the week grid.
     *
     * @default true
     */
    showNavigationHeader?: boolean | undefined;
    /**
     * When `true`, the user can click a day column to select that date,
     * triggering `onChange`
     */
    enableSelection?: boolean | undefined;
    /**
     * The date used to determine which week is shown on first render, in
     * YYYY-MM-DD format.
     *
     * @remarks Ignored when `value` is set.
     */
    currentCalendarDate?: string | undefined;
    /**
     * Called when the user clicks a time slot cell.
     *
     * @param date The date of the clicked slot, in YYYY-MM-DD format.
     * @param timeSlot The slot that was clicked.
     */
    onSlotClick?: ((date: string, timeSlot: TimeSlot) => void) | undefined;
    /**
     * Called when the user selects a date. Requires `enableSelection` to be
     * `true`.
     *
     * @param value The selected date in YYYY-MM-DD format.
     */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Called when the visible week changes due to navigation.
     *
     * @param value An object describing the newly displayed week
     */
    onWeekDisplayChange?: ((value: YearMonthWeekDisplay) => void) | undefined;
}

/**
 * Payload passed to `onWeekDisplayChange` describing the newly visible week.
 *
 */
export interface YearMonthWeekDisplay {
    /**
     * The first and last days of the newly displayed week in YYYY-MM-DD format.
     */
    week: { firstDayOfWeek: string; lastDayOfWeek: string };
    year: number;
    /** `month` is 1-indexed */
    month: number;
}
