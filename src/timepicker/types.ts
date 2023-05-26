export type TimepickerFormat = "12hr" | "24hr";

export interface TimepickerProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;

    // Input-specific attributes
    "data-testid"?: string | undefined;
    value?: string | undefined;
    placeholder?: string | undefined;
    /**
     * The time input format in `12hr` or `24hr`. Defaults to `24hr`
     */
    format?: TimepickerFormat | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    error?: boolean | undefined;
    /**
     * Called when the user makes a selection and clicks on the "Confirm" button
     * in the time selection box. Returns a string based format.
     * 24 hour uses "hh:mm", while 12 hour uses "hh:mmA"
     */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Called when a defocus is made on the field
     */
    onBlur?: (() => void) | undefined;
}
