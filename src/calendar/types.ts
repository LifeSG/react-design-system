import {
    CommonCalendarProps,
    YearMonthDisplay,
} from "../shared/internal-calendar/types";

/**
 * Props for the Calendar component - standalone date picker.
 *
 * Renders a full calendar view for selecting a single date. Extends
 * `CommonCalendarProps` which provides min/max dates, disabled dates,
 * and locale settings.
 *
 * @example
 * ```tsx
 * <Calendar
 *     value={selectedDate}
 *     onSelect={(date) => setSelectedDate(date)}
 * />
 * ```
 * @keywords date picker, monthly view, date selector, date grid, day picker
 */
export interface CalendarProps extends CommonCalendarProps {
    // Basic component props
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;

    /** Specifies if the component should have a border around it. Values `no-border` | `bordered` */
    styleType?: "no-border" | "bordered" | undefined;
    /** Selected date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /** Called when day cell is hovered, returns value in `YYYY-MM-DD` */
    onHover?: ((value: string) => void) | undefined;
    /** Called when date is selected, returns value in `YYYY-MM-DD` format */
    onSelect?: ((value: string) => void) | undefined;
    /** Called when there is a change in the current visible month and year */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;
}
