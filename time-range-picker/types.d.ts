/// <reference types="react" />
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";
export type TimeRangePickerFormat = "12hr" | "24hr";
export type TimeRangePickerVariant = "dial" | "combobox";
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
     *
     * Note: combobox variant uses "h:mma" instead.
     */
    value?: TimeRangePickerValue | undefined;
    /**
     * The time input format in `12hr` or `24hr`. Defaults to `24hr`
     */
    format?: TimeRangePickerFormat | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    error?: boolean | undefined;
    /** Specifies the variant for the time range picker */
    variant?: TimeRangePickerVariant | undefined;
    /**
     * Combobox variant specific attributes
     */
    /** Specifies the interval (minutes) between each dropdown option */
    interval?: number | undefined;
    /** Specifies the starting time for the dropdown options */
    startLimit?: string | undefined;
    /** Specifies the ending time for the dropdown options */
    endLimit?: string | undefined;
    /** Specifies the alignment of the dropdown to the left or right of the reference element */
    alignment?: DropdownAlignmentType | undefined;
    /** Specifies the z-index of the dropdown element */
    dropdownZIndex?: number | undefined;
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
