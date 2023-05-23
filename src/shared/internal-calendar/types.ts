import { ActionComponent, DateInputVariant } from "../../date-input";
import { TimeSlot } from "../../time-slot-bar";

export interface InternalCalendarProps extends CommonCalendarProps {
    /** The display type of the component. Values `standalone` | `input` */
    type: "standalone" | "input" | "weekly";
    /** Selected end date in `YYYY-MM-DD` format */
    endValue?: string | undefined;
    /** Status from date input for calendar. */
    isOpen?: boolean | undefined;
    /** Specifies if done/cancel buttons are visible */
    withButton?: boolean | undefined;
    /** indicate which component makes the changed from the date input component */
    actionComponent?: ActionComponent | undefined;
    /** Indicate current focus in the date-input component. */
    currentFocus?: FocusType | undefined;
    /** Indicate calendar variant from the date input component. */
    variant?: DateInputVariant | undefined;
    /** Specifies any time-bar slots to render in weekly-calendar component */
    slots?: { [date: string]: TimeSlot[] } | undefined;
    /** Specifies should show or hide drop-down buttons and navigation arrows in header*/
    showNavigationHeader?: boolean | undefined;
    /** Specifies should allow selecting date on weekly-calendar component */
    enableSelection?: boolean | undefined;
    /** Specifies which date should be included in the rendered calendar component (date will not be selected) formate: YYYY-DD-MM*/
    currentCalendarDate?: string | undefined;
    /** Specifies any callback to execute when user click on rendered slots on weekly-calendar component */
    onSlotClick?: (timeSlot: TimeSlot) => void | undefined;
    /** Function to handle cancel/done .*/
    onDismiss?: ((action: CalendarAction) => void) | undefined;
    /** Current calendar view inform to date input. .*/
    onCalendarView?: ((view: View) => void) | undefined;
}

export interface CommonCalendarProps {
    /** Selected start date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /** Restrict selection to within this date range,
     * in `YYYY-MM-DD` format. Example: `["2023-03-15", "2023-04-19"]` */
    between?: [string, string] | undefined;
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
    /** Called when date is selected, returns value in `YYYY-MM-DD` format or `"Invalid Date"` */
    onSelect?: ((value: string) => void) | undefined;
    /** Called when day cell is hovered, returns value in `YYYY-MM-DD` */
    onHover?: ((value: string) => void) | undefined;
    /** Called when there is a change in the current visible month and year */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;

    // Basic component props
    /** The class selector */
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
}

export interface CalendarRef {
    defaultView: () => void;
}

// =============================================================================
// Types use in InternalCalendarProps
// =============================================================================
export type CalendarAction = "reset" | "confirmed";
export type CalendarType = "standalone" | "input" | "weekly";
export type FocusType = "start" | "end" | "none";
export type View = "default" | "month-options" | "year-options";

interface YearMonthDisplay {
    year: number;
    month: number;
}
