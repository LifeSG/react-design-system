import { RefObject } from "react";
import { DropdownAlignmentType } from "../shared/dropdown-wrapper/types";

export type TimepickerFormat = "12hr" | "24hr";

/**
 * Props for the Timepicker component, a time entry field supporting dial-based selection
 * in 12-hour or 24-hour formats.
 *
 * @keywords timepicker, time, 12hr, 24hr, dial, dropdown, selection
 */
export interface TimepickerProps {
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
    // Input-specific attributes
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /**
     * The value of the time input in a string based format
     *
     * 24 hour uses "hh:mm" e.g. `"13:00"`
     *
     * 12 hour uses "hh:mmA" e.g. `"01:00PM"`
     */
    value?: string | undefined;
    /** Placeholder text displayed when no value is selected. */
    placeholder?: string | undefined;
    /**
     * The time input format in `12hr` or `24hr`. Defaults to `24hr`
     */
    format?: TimepickerFormat | undefined;
    /** When `true`, the picker is disabled and cannot be interacted with. */
    disabled?: boolean | undefined;
    /** When `true`, the picker is read-only and cannot be changed by the user. */
    readOnly?: boolean | undefined;
    /** Applies error styling to indicate an invalid value. */
    error?: boolean | undefined;
    /** Alignment of the time selection dropdown relative to the input field. */
    alignment?: DropdownAlignmentType | undefined;
    /** CSS z-index applied to the dropdown overlay. */
    dropdownZIndex?: number | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     * Specify when a parent container has a higher z-index and would obscure the dropdown.
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;
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
