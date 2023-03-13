import { DateInputVariant } from "../date-input";
import { ActionType } from "../date-input/dateInputReducer";

export interface CalendarProps {
    // DateInput component props
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
    /** Called when date is selected, returns value in `YYYY-MM-DD` format or `"Invalid Date"` */
    onSelect?: ((value: string) => void) | undefined;
    /** Called when day cell is hover, returns value in `YYYY-MM-DD` */
    onHover?: ((value: string) => void) | undefined;
    /** Use in input with calendar. */
    isOpen?: boolean | undefined;
    /** Selected start date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /** The display type of the component. Values `standalone` | `input` */
    type?: CalendarType | undefined;

    // DateInput with calendar component props
    /** Selected end date in `YYYY-MM-DD` format */
    endValue?: string | undefined;
    /** Actively between selection. Values as ["2023-03-15", "2023-04-19"] */
    between?: [string, string] | undefined;
    /** The display cancel/done button inside component.*/
    withButton?: boolean | undefined;
    /** Function to handle cancel/done .*/
    onWithButton?: ((action: CalendarAction) => void) | undefined;
    /** Current calendar view inform to date input. .*/
    onCalendarView?: ((view: View) => void) | undefined;
    /** Indicate current focus in the date-input component. */
    currentFocus?: FocusType | undefined;
    /** Indicate current action in the date-input component. */
    currentType?: ActionType | undefined;
    /** Indicate calendar variant from the date input component. */
    variant?: DateInputVariant | undefined;

    // Basic component props
    /** The class selector */
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
}

export type CalendarRef = React.Ref<HTMLDivElement>;

// =============================================================================
// CalendarType - this props use in internal
// =============================================================================
export type CalendarType = "standalone" | "input";
export type View = "default" | "month-options" | "year-options";

// =============================================================================
// Types use in date input with calendar
// =============================================================================
export type CalendarAction = "reset" | "confirmed";
export type FocusType = "start" | "end" | "none";
