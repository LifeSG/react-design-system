/**
 * The time display format used by TimeRangePicker.
 *
 * - `"12hr"`: 12-hour clock with AM/PM suffix.
 * - `"24hr"`: 24-hour clock.
 */
export type TimeRangePickerFormat = "12hr" | "24hr";

/**
 * The controlled value shape for TimeRangePicker.
 */
export interface TimeRangePickerValue {
    /** The start time as a formatted string (e.g., `"13:00"` or `"01:00PM"`). */
    start: string;
    /** The end time as a formatted string (e.g., `"14:00"` or `"02:00PM"`). */
    end: string;
}

/**
 * Props for the TimeRangePicker component - dual time picker with clock overlays.
 *
 * Renders two linked time inputs (start and end) for selecting a time range.
 * Controlled via a `{ start, end }` value object using formatted time strings.
 * Supports both 12-hour and 24-hour formats.
 *
 * @example
 * ```tsx
 * <TimeRangePicker
 *     value={{ start: "09:00", end: "17:00" }}
 *     onChange={(range) => setRange(range)}
 * />
 * ```
 * @keywords from to time, start end time, dual time input, time span picker, time interval
 */
export interface TimeRangePickerProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;

    // Input-specific attributes
    "data-testid"?: string | undefined;
    /**
     * An object with `start` and `end` values as an empty string or a
     * string based format.
     *
     * 24 hour uses "hh:mm" e.g. `{ start: "13:00", end: "14:00" }`
     *
     * 12 hour uses "hh:mmA" e.g. `{ start: "01:00PM", end: "02:00PM" }`
     */
    value?: TimeRangePickerValue | undefined;
    /**
     * The time input format in `12hr` or `24hr`. Defaults to `24hr`
     */
    format?: TimeRangePickerFormat | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    error?: boolean | undefined;
    /**
     * Called when a selection is made. Returns an object with `start` and
     * `end` values as an empty string or a string based format.
     *
     * 24 hour returns "hh:mm" e.g. `{ start: "13:00", end: "14:00" }`
     *
     * 12 hour returns "hh:mmA" e.g. `{ start: "01:00PM", end: "02:00PM" }`
     */
    onChange?: ((value: TimeRangePickerValue) => void) | undefined;
    /**
     * Called when the field is focused
     */
    onFocus?: (() => void) | undefined;
    /**
     * Called when a defocus is made on the field
     */
    onBlur?: (() => void) | undefined;
}
