export interface DateRangeInputProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;

    // Input-specific Attributes
    "data-testid"?: string | undefined;
    value?: string | undefined;
    valueEnd?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    disabledDates?: string[] | undefined;
    withButton?: boolean | undefined;
    between?: [string, string] | undefined;
    onChange?: ((startDate: string, endDate: string) => void) | undefined;
    onBlur?: (() => void) | undefined;
}
