/**
 * The time display format used by the Timepicker.
 *
 * - `"12hr"`: 12-hour clock with AM/PM suffix (e.g., `"01:00PM"`).
 * - `"24hr"`: 24-hour clock (e.g., `"13:00"`).
 */
export type TimepickerFormat = "12hr" | "24hr";

/**
 * Props for the Timepicker component - time selection input with clock overlay.
 *
 * Displays a text input that opens a time-selection overlay for picking hours
 * and minutes. Controlled via a formatted string value. Supports both 12-hour
 * (AM/PM) and 24-hour format.
 *
 * @example
 * ```tsx
 * <Timepicker
 *     format="12hr"
 *     value="02:30PM"
 *     onChange={(time) => setTime(time)}
 * />
 * ```
 * @keywords time picker, clock picker, hour minute input, time selector, AM PM picker
 */
export interface TimepickerProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;

    // Input-specific attributes
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
