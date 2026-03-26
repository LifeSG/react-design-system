import { CommonCalendarProps } from "../shared/internal-calendar/types";
import { TimeSlot } from "../time-slot-bar/types";

/**
 * Props for the TimeSlotWeekView component - week-view availability grid.
 *
 * Renders a calendar week grid that overlays time slot availability on each
 * day. Unlike `TimeSlotBarWeek`, slots are optional and the component focuses
 * on date selection. Extends `CommonCalendarProps`.
 *
 * @example
 * ```tsx
 * <TimeSlotWeekView
 *     value={selectedDate}
 *     slots={availabilityByDate}
 *     onChange={(date) => setSelectedDate(date)}
 * />
 * ```
 * @keywords weekly calendar, availability week grid, schedule week view, date availability
 */
export interface TimeSlotWeekViewProps extends CommonCalendarProps {
    // Basic component props
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;

    /** The value of the selected date in YYYY-MM-DD format */
    value?: string | undefined;
    /** Time slots to render */
    slots?: { [date: string]: TimeSlot[] } | undefined;
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
