export type TimeRangePickerFormat = "12hr" | "24hr";

export interface TimeRangePickerValue {
    start: string;
    end: string;
}

export interface TimeRangePickerProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;

    // Input-specific attributes
    "data-testid"?: string | undefined;
    /**
     * An object with `start` and `end` values. Can be an empty string or a
     * string based format. 24 hour uses "hh:mm", while 12 hour uses "hh:mma"
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
     * `end` values. Can be an empty string or a string based format.
     * 24 hour uses "hh:mm", while 12 hour uses "hh:mma"
     */
    onChange?: ((value: TimeRangePickerValue) => void) | undefined;
    /**
     * Called when a defocus is made on the field
     */
    onBlur?: (() => void) | undefined;
}
