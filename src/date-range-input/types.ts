export interface DateRangeInputProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;

    // Input-specific Attributes
    "data-testid"?: string | undefined;
    /**
     * The value of the start date input in "YYYY-MM-DD" or "YYYY-M-D" string format.
     */
    value?: string | undefined;
    /**
     * The value of the end date input in "YYYY-MM-DD" or "YYYY-M-D" string format.
     */
    valueEnd?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
    /**
     * Specifies if the "Done" and "Cancel" action buttons should be rendered.
     * Is restricted to `true` on mobile viewports
     */
    withButton?: boolean | undefined;
    /**
     * The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.
     */
    minDate?: string | undefined;
    /**
     * The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.
     */
    maxDate?: string | undefined;
    /**
     * Function that returns when a valid selection is made. Returns the start and
     * end date in "YYYY-MM-DD" string format.
     */
    onChange?: ((startDate: string, endDate: string) => void) | undefined;
    /**
     * Function that returns when a defocus is made on the field
     */
    onBlur?: (() => void) | undefined;
}
