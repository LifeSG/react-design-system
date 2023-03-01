export interface CalendarProps {
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
    /** Called when date is selected, returns value in `YYYY-MM-DD` format or `"Invalid Date"` */
    onSelect?: ((value: string, from?: "calendar") => void) | undefined;
    /** Called when day cell is hover, returns value in `YYYY-MM-DD` */
    onHover?: ((value: string) => void) | undefined;
    /** Use in input with calendar. */
    isOpen?: boolean | undefined;
    /** Selected start date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /** Selected end date in `YYYY-MM-DD` format */
    endValue?: string | undefined;
    /** The display type of the component. Values `standalone` | `input` */
    type?: CalendarType | undefined;

    // Integrate with date-input component
    /** The display cancel/done button inside component.*/
    withButton?: boolean | undefined;
    /** Coloring in multiple date selection. */
    currentFocus?: "start" | "end" | "none" | undefined;

    // Basic component props
    /** The class selector */
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
}

// =============================================================================
// CalendarType - this props use in internal
// =============================================================================
export type CalendarType = "standalone" | "input";
