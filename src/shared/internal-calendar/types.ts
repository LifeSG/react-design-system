import { ActionComponent } from "../../date-input";

export interface InternalCalendarProps extends CommonCalendarProps {
    /** The display type of the component. Values `standalone` | `input` */
    type: "standalone" | "input";
    /** Selected end date in `YYYY-MM-DD` format */
    endValue?: string | undefined;
    /** Specifies if done/cancel buttons are visible */
    withButton?: boolean | undefined;
    /** indicate which component makes the changed from the date input component */
    actionComponent?: ActionComponent | undefined;
    /** Indicate current focus in the date-input component. */
    currentFocus?: FocusType | undefined;
    /** Indicate calendar variant from the date input component. */
    variant?: Variant | undefined;
    /** Selection to respect start or end range. */
    selectWithinRange?: boolean | undefined;
    /** Function to handle cancel/done .*/
    onDismiss?: ((action: CalendarAction) => void) | undefined;
    /** Current calendar view inform to date input. .*/
    onCalendarView?: ((view: View) => void) | undefined;
}

export interface AnimatedInternalCalendarProps extends InternalCalendarProps {
    /** Status from date input for calendar. */
    isOpen?: boolean | undefined;
}

export interface CommonCalendarProps {
    /** Selected start date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /**
     * The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.
     */
    minDate?: string | undefined;
    /**
     * The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.
     */
    maxDate?: string | undefined;
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
    resetView: () => void;
}

// =============================================================================
// Types use in InternalCalendarProps
// =============================================================================
export type CalendarAction = "reset" | "confirmed";
export type CalendarType = "standalone" | "input";
export type Variant = "single" | "range";
export type FocusType = "start" | "end" | "none";
export type View = "default" | "month-options" | "year-options";

interface YearMonthDisplay {
    year: number;
    month: number;
}
