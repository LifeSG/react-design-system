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
     * The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.
     */
    minDate?: string | undefined;
    /**
     * The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.
     */
    maxDate?: string | undefined;
    /**
     * Function that returns when a valid selection is made. Returns the start
     * date in "YYYY-MM-DD" string format.
     */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Function that returns when a defocus is made on the field
     */
    onBlur?: (() => void) | undefined;
}
