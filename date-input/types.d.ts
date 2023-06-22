/// <reference types="react" />
export type DateInputVariant = "single" | "range";
export interface DateInputProps extends React.AriaAttributes {
    className?: string | undefined;
    id?: string | undefined;
    readOnly?: boolean | undefined;
    role?: React.AriaRole | undefined;
    "data-testid"?: string | undefined;
    /**
     * The value of the date input in "YYYY-MM-DD" or "YYYY-M-D" string format.
     * In the range variant, it serves as the start value
     */
    value?: string | undefined;
    /**
     * The end value of the date input in "YYYY-MM-DD" or "YYYY-M-D"
     * string format. Only relevant to range variant
     */
    valueEnd?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
    /** The variant of the component. Values `single` | `range` */
    variant?: DateInputVariant | undefined;
    /**
     * Specifies if the "Done" and "Cancel" action buttons should be rendered.
     * Is restricted to `true` on mobile viewports
     */
    withButton?: boolean | undefined;
    /**
     * Restrict selection to within this date range, in `YYYY-MM-DD` format.
     * Example: `["2023-03-15", "2023-04-19"]
     */
    between?: [string, string] | undefined;
    /**
     * Function that returns when a valid selection is made. Returns the start and
     * end date in "YYYY-MM-DD" string format.
     */
    onChange?: ((startDate: string, endDate: string | undefined) => void) | undefined;
    /**
     * Function that returns when a valid selection is made. Returns the start
     * and end date in a string array format [day, month, year]
     */
    onChangeRaw?: ((startDate: string[], endDate: string[] | undefined) => void) | undefined;
    /**
     * Function that returns when a defocus is made on the field. Returns the start and
     * end date in "YYYY-MM-DD" string format.
     */
    onBlur?: ((startDate: string, endDate: string | undefined) => void) | undefined;
    /**
     * Function that returns when a defocus is made on the field. Returns the start
     * and end date in a string array format [day, month, year]
     */
    onBlurRaw?: ((startDate: string[], endDate: string[] | undefined) => void) | undefined;
}
