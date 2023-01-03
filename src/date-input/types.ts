export interface DateInputProps extends React.AriaAttributes {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    readOnly?: boolean | undefined;

    // WAI-ARIA
    role?: string | undefined;

    // Input-specific Attributes
    "data-testid"?: string | undefined;
    value?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    onChange?: ((value: string) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on change in an array format
     * as such [day, month, year]
     */
    onChangeRaw?: ((value: string[]) => void) | undefined;
    onBlur?: ((value: string) => void) | undefined;
    /**
     * Function that returns the raw values in the DateInput on blur in an array format
     * as such [day, month, year]
     */
    onBlurRaw?: ((value: string[]) => void) | undefined;
}
