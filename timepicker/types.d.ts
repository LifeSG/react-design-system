/// <reference types="react" />
export type TimepickerFormat = "12hr" | "24hr";
export interface TimepickerProps {
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
    "data-testid"?: string | undefined;
    /**
     * The value of the time input in a string based format
     *
     * 24 hour uses "hh:mm" e.g. `"13:00"`
     *
     * 12 hour uses "hh:mmA" e.g. `"01:00PM"`
     */
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
     *
     * 24 hour returns "hh:mm" e.g. `"13:00"`
     *
     * 12 hour returns "hh:mmA" e.g. `"01:00PM"`
     */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Called when the field is focused
     */
    onFocus?: (() => void) | undefined;
    /**
     * Called when a defocus is made on the field
     */
    onBlur?: (() => void) | undefined;
}
