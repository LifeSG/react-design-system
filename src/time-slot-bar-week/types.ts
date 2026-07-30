import type { CommonCalendarProps } from "../shared/internal-calendar/types";
import type { TimeSlot } from "../time-slot-bar/types";

/**
 * Controls how time slot cells are sized within a day column.
 *
 * - `"flexible"` — cells expand proportionally to fill available height.
 * - `"fixed"` — all cells have equal, fixed height regardless of content.
 */
export type TimeSlotCellsVariant = "flexible" | "fixed";

/**
 * Props for the `TimeSlotBarWeek` component.
 */
export interface TimeSlotBarWeekProps extends CommonCalendarProps {
    // Basic component props
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;

    /**
     * Map of date strings (YYYY-MM-DD) to the time slot arrays to render for
     * that date.
     */
    slots: { [date: string]: TimeSlot[] };
    /**
     * The start boundary of the visible time range, in HH:mm format.
     */
    startTime?: string | undefined;
    /**
     * The end boundary of the visible time range, in HH:mm format.
     */
    endTime?: string | undefined;
    /**
     * The currently selected date in YYYY-MM-DD format. Controls the
     * highlighted day column.
     */
    value?: string | undefined;
    /**
     * Duration in minutes that each time slot cell represents.
     *
     * @default 30
     */
    interval?: number | undefined;
    /**
     * Controls how time slot cells are sized within each day column.
     *
     * @default "flexible"
     */
    variant?: TimeSlotCellsVariant | undefined;
    /**
     * Maximum height in pixels for the time slot area before it becomes
     * truncated.
     */
    maxVisibleCellHeight?: number | undefined;
    /**
     * Whether to show the month/year pickers and the prev/next week navigation
     * arrows above the week grid.
     *
     * @default true
     */
    showNavigationHeader?: boolean | undefined;
    /**
     * When `true`, the user can click a day column to select that date,
     * triggering `onChange`.
     *
     * @default true
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
interface YearMonthWeekDisplay {
    /**
     * The first and last days of the newly displayed week in YYYY-MM-DD format.
     */
    week: { firstDayOfWeek: string; lastDayOfWeek: string };
    year: number;
    /** `month` is 1-indexed */
    month: number;
}
