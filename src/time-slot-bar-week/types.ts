import { CommonCalendarProps } from "../shared/internal-calendar/types";
import { TimeSlot } from "../time-slot-bar/types";

export type TimeSlotCellsVariant = "flexible" | "fixed";

/**
 * Props for the TimeSlotBarWeek component - week-view time slot calendar.
 *
 * Renders a week calendar with per-day `TimeSlotBar` columns and an optional
 * navigation header. Extends `CommonCalendarProps` for min/max date and locale
 * settings.
 *
 * @example
 * ```tsx
 * <TimeSlotBarWeek
 *     slots={slotsByDate}
 *     startTime="08:00"
 *     endTime="18:00"
 *     onSlotClick={(date, slot) => handleSelect(date, slot)}
 * />
 * ```
 * @keywords weekly schedule, week view booking, availability calendar week, weekly time slots
 */
export interface TimeSlotBarWeekProps extends CommonCalendarProps {
    // Basic component props
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;

    /** Time slots to render */
    slots: { [date: string]: TimeSlot[] };
    /** The start time of the time slot cells in HH:mm format */
    startTime?: string | undefined;
    /** The end time of the time slot cells in HH:mm format */
    endTime?: string | undefined;
    /** The value of the selected date in YYYY-MM-DD format */
    value?: string | undefined;
    /** Number of minutes each cell should represent */
    interval?: number | undefined;
    /** Variant for the timeslot cells that will be rendered */
    variant?: TimeSlotCellsVariant | undefined;
    /** Maximum height (px) of the entire timeslot component before it becomes truncated */
    maxVisibleCellHeight?: number | undefined;
    /**  Specifies if the month/year dropdown and navigation arrows should be displayed. */
    showNavigationHeader?: boolean | undefined;
    /** Specifies if date can be selected */
    enableSelection?: boolean | undefined;
    /** The initial date to be visible in the week view in YYYY-DD-MM format */
    currentCalendarDate?: string | undefined;
    /** Called when user clicks on a time slot */
    onSlotClick?: ((date: string, timeSlot: TimeSlot) => void) | undefined;
    /** Called when user clicks on a date */
    onChange?: ((value: string) => void) | undefined;
    /** Called when the current visible week changes */
    onWeekDisplayChange?: ((value: YearMonthWeekDisplay) => void) | undefined;
}

interface YearMonthWeekDisplay {
    week: { firstDayOfWeek: string; lastDayOfWeek: string };
    year: number;
    month: number;
}
