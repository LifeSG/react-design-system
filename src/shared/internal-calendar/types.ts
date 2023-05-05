import { ActionType } from "../../date-input/date-input-reducer";
import { ActionComponent, DateInputVariant } from "../../date-input";

export interface InternalCalendarProps extends CommonCalendarProps {
    /** The display type of the component. Values `standalone` | `input` */
    type: "standalone" | "input";
    /** Selected end date in `YYYY-MM-DD` format */
    endValue?: string | undefined;
    /** Status from date input for calendar. */
    isOpen?: boolean | undefined;
    /** The display cancel/done button inside component.*/
    withButton?: boolean | undefined;
    /** indicate which component makes the changed from the date input component */
    actionComponent?: ActionComponent | undefined;
    /** Indicate current focus in the date-input component. */
    currentFocus?: FocusType | undefined;
    /** Indicate current action in the date-input component. */
    currentType?: ActionType | undefined;
    /** Indicate calendar variant from the date input component. */
    variant?: DateInputVariant | undefined;
    /** Function to handle cancel/done .*/
    onWithButton?: ((action: CalendarAction) => void) | undefined;
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
    /** Called when day cell is hover, returns value in `YYYY-MM-DD` */
    onHover?: ((value: string) => void) | undefined;

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
export type CalendarType = "standalone" | "input";
export type FocusType = "start" | "end" | "none";
export type View = "default" | "month-options" | "year-options";
