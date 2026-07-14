import type { RefObject } from "react";

import type { DropdownAlignmentType } from "../shared/dropdown-wrapper";

/** Time display format: 12-hour clock or 24-hour clock. */
export type TimeRangePickerFormat = "12hr" | "24hr";

/** Picker interaction style: dial spinner input or scrollable combobox dropdowns. */
export type TimeRangePickerVariant = "dial" | "combobox";

/**
 * A selected time range represented as `start` and `end` time strings.
 *
 * Each field is either an empty string (no selection) or a formatted time
 * string.
 *
 * - 24 hour uses "hh:mm" e.g. `{ start: "13:00", end: "14:00" }`
 * - 12 hour uses "hh:mmA" e.g. `{ start: "01:00PM", end: "02:00PM" }`
 *
 * Note: combobox variant uses "h:mma" instead.
 */
export interface TimeRangePickerValue {
    start: string;
    end: string;
}

/**
 * Props for the `TimeRangePicker` component.
 */
export interface TimeRangePickerProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;
    // Accessibility
    "aria-labelledby"?: string | undefined;
    "aria-describedby"?: string | undefined;
    "aria-invalid"?: boolean | undefined;

    // Input-specific attributes
    "data-testid"?: string | undefined;
    /**
     * An object with `start` and `end` values as an empty string or a
     * string based format.
     */
    value?: TimeRangePickerValue | undefined;
    /**
     * The time display and input format.
     *
     * @default "24hr"
     */
    format?: TimeRangePickerFormat | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    error?: boolean | undefined;
    /**
     * The picker interaction style.
     *
     * - `"dial"` renders a dial spinner input picker.
     * - `"combobox"` renders scrollable dropdowns with configurable intervals.
     *
     * @default "dial"
     */
    variant?: TimeRangePickerVariant | undefined;

    // Combobox variant — the following props are only used when variant="combobox"

    /**
     * Minute interval between each option in the combobox dropdowns.
     *
     * @remarks Only applies when `variant` is `"combobox"`.
     */
    interval?: number | undefined;
    /**
     * Earliest selectable time shown in the combobox dropdowns.
     *
     * @remarks Only applies when `variant` is `"combobox"`.
     */
    startLimit?: string | undefined;
    /**
     * Latest selectable time shown in the combobox dropdowns.
     *
     * @remarks Only applies when `variant` is `"combobox"`.
     */
    endLimit?: string | undefined;
    /**
     * The time that the start field dropdown scrolls to on open..
     *
     * @remarks Only applies when `variant` is `"combobox"`.
     */
    initialScrollStartTime?: string | undefined;
    /**
     * The time that the end field dropdown scrolls to on open.
     *
     * @remarks Only applies when `variant` is `"combobox"`.
     */
    initialScrollEndTime?: string | undefined;
    /**
     * Aligns the dropdown relative to the trigger element.
     * - `"left"` — dropdown left-aligns with the trigger
     * - `"right"` — dropdown right-aligns with the trigger
     *
     * @remarks Only applies when `variant` is `"combobox"`.
     */
    alignment?: DropdownAlignmentType | undefined;
    /**
     * CSS `z-index` applied to the dropdown overlay.
     *
     * @remarks Only applies when `variant` is `"combobox"`.
     */
    dropdownZIndex?: number | undefined;
    /**
     * The root element that contains the dropdown element.
     *
     * @remarks
     * Only applies when `variant` is `"combobox"`.
     *
     * Specify this if you need to change the parent of the dropdown in the HTML DOM.
     * Possible use case: sharing a stacking context.
     *
     * Note: if a parent of the trigger has a higher `z-index` than the dropdown,
     * the dropdown may be obscured.
     *
     * @default `document.body`
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;

    /**
     * Called when the selected time range changes.
     *
     * @param value The current `start` and `end` time strings. Each field is
     * either an empty string or a formatted time string based on `format`.
     */
    onChange?: ((value: TimeRangePickerValue) => void) | undefined;
    /**
     * Called when the field receives focus.
     */
    onFocus?: (() => void) | undefined;
    /**
     * Called when the field loses focus.
     */
    onBlur?: (() => void) | undefined;
}
