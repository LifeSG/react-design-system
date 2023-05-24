export type DateInputVariant = "single" | "range";

export interface DateInputProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;

    // Input-specific Attributes
    "data-testid"?: string | undefined;
    readOnly?: boolean | undefined;
    /**
     * The value of the date input in "YYYY-MM-DD" or "YYYY-M-D" string format.
     */
    value?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
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
    onChange?: ((value: string) => void) | undefined;
    /**
     * Function that returns when a defocus is made on the field. Returns the start and
     * end date in "YYYY-MM-DD" string format.
     */
    onBlur?: (() => void) | undefined;
}
