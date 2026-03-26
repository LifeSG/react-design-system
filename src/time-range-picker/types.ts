import { RefObject } from "react";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper";

export type TimeRangePickerFormat = "12hr" | "24hr";
export type TimeRangePickerVariant = "dial" | "combobox";

/**
 * Represents a time range with separate start and end time strings.
 * Format depends on the `format` prop of the picker (`"hh:mm"` for 24 hr, `"hh:mmA"` for 12 hr).
 */
export interface TimeRangePickerValue {
    /** The start time string. */
    start: string;
    /** The end time string. */
    end: string;
}

/**
 * Props for the TimeRangePicker component, a dual time-entry field supporting dial and combobox
 * variants in 12-hour or 24-hour formats.
 *
 * @keywords time-range, time-picker, start, end, 12hr, 24hr, combobox, dial
 */
export interface TimeRangePickerProps {
    // Standard HTML Attributes
    /** Additional CSS class names applied to the root element. */
    className?: string | undefined;
    /** Unique HTML identifier for the root element. */
    id?: string | undefined;
    /** Inline styles applied to the root element. */
    style?: React.CSSProperties | undefined;
    // Accessibility
    /** References the id of the element that labels this picker. */
    "aria-labelledby"?: string | undefined;
    /** References the id of the element that describes this picker. */
    "aria-describedby"?: string | undefined;
    /** Indicates whether the picker's current value is invalid. */
    "aria-invalid"?: boolean | undefined;

    // Input-specific attributes
    /** Test identifier for automated testing. */
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
    /** When `true`, all inputs are disabled and cannot be interacted with. */
    disabled?: boolean | undefined;
    /** When `true`, all inputs are read-only and cannot be changed by the user. */
    readOnly?: boolean | undefined;
    /** Applies error styling to indicate an invalid value. */
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
     * Use this when the parent container has a higher z-index
     * and the dropdown would otherwise be hidden.
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;

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
