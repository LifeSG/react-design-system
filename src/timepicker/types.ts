import type { RefObject } from "react";

import type { DropdownAlignmentType } from "../shared/dropdown-wrapper/types";

/**
 * Time display and value format used by `Timepicker`.
 *
 * - 24 hour uses "hh:mm" e.g. `{ start: "13:00", end: "14:00" }`
 * - 12 hour uses "hh:mmA" e.g. `{ start: "01:00PM", end: "02:00PM" }`
 */
export type TimepickerFormat = "12hr" | "24hr";

/**
 * Props for the `Timepicker` component.
 */
export interface TimepickerProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    style?: React.CSSProperties | undefined;

    // Accessibility
    /**
     * ID of an element that labels the timepicker input.
     */
    "aria-labelledby"?: string | undefined;
    /**
     * ID of an element that describes the timepicker input.
     */
    "aria-describedby"?: string | undefined;

    // Input-specific attributes
    "data-testid"?: string | undefined;
    /**
     * The controlled time value as a string.
     *
     * - 24 hour uses "hh:mm" e.g. `{ start: "13:00", end: "14:00" }`
     * - 12 hour uses "hh:mmA" e.g. `{ start: "01:00PM", end: "02:00PM" }`
     */
    value?: string | undefined;
    /**
     * Placeholder text shown when no value is selected.
     *
     * @default `"hh:mm"` for 24-hour format or `"hh:mmA"` for 12-hour format.
     */
    placeholder?: string | undefined;
    /**
     * The time display and input format.
     *
     * @default "24hr"
     */
    format?: TimepickerFormat | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    /**
     * Renders the input in an error state when `true`.
     */
    error?: boolean | undefined;
    /** Aligns the dropdown relative to the trigger element. */
    alignment?: DropdownAlignmentType | undefined;
    /** CSS `z-index` applied to the dropdown overlay. */
    dropdownZIndex?: number | undefined;
    /**
     * The root element that contains the dropdown element.
     *
     * @remarks Specify this if you need to change the parent of the
     * dropdown in the HTML DOM.
     * Possible use case: sharing a stacking context.
     *
     * Note: if a parent of the trigger has a higher `z-index` than the dropdown,
     * the dropdown may be obscured.
     *
     * @default `document.body`
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
    /**
     * Called when the user confirms a selection.
     *
     * @param value The selected time value as a string.
     * - 24 hour uses "hh:mm" e.g. `{ start: "13:00", end: "14:00" }`
     * - 12 hour uses "hh:mmA" e.g. `{ start: "01:00PM", end: "02:00PM" }`
     */
    onChange?: ((value: string) => void) | undefined;
    /**
     * Called when the timepicker input receives focus.
     */
    onFocus?: (() => void) | undefined;
    /** Called when focus leaves both the input and the dropdown. */
    onBlur?: (() => void) | undefined;
}
