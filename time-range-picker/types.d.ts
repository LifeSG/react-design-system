/// <reference types="react" />
export type TimeRangePickerFormat = "12hr" | "24hr";
export interface TimeRangePickerValue {
    start: string;
    end: string;
}
export interface TimeRangePickerProps {
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
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
     * Called when a defocus is made on the field
     */
    onBlur?: (() => void) | undefined;
}
