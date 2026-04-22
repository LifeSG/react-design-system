import { RefObject } from "react";
import {
    CommonCalendarProps,
    YearMonthDisplay,
} from "../shared/internal-calendar/types";

/**
 * Props for the DateInput component - single date picker with calendar overlay.
 *
 * Displays a text input that opens an inline calendar for selecting a single
 * date. Controlled via a `"YYYY-MM-DD"` string value. Supports optional
 * confirmation buttons, disabled and read-only modes, and focus/blur callbacks.
 *
 * @example
 * ```tsx
 * <DateInput
 *     value={selectedDate}
 *     onChange={(date) => setSelectedDate(date)}
 *     withButton
 * />
 * ```
 * @keywords date field, calendar input, date entry, date selector, single date
 */
export interface DateInputProps extends CommonCalendarProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
    /**
     * The root element that contains the dropdown element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the dropdown,
     * the dropdown may not be visible. Specify the parent element here instead
     */
    dropdownRootNode?: RefObject<HTMLElement> | undefined;

    // Input-specific Attributes
    /** Sets the `data-testid` attribute for targeting the element in automated tests. */
    "data-testid"?: string | undefined;
    /** When true, the input is read-only and cannot be modified by the user. @default false */
    readOnly?: boolean | undefined;
    /** When true, suppresses the on-screen keyboard on mobile devices. @default false */
    hideInputKeyboard?: boolean | undefined;
    /**
     * The value of the date input in "YYYY-MM-DD" or "YYYY-M-D" string format.
     */
    value?: string | undefined;
    /** When true, renders the input in an error state. @default false */
    error?: boolean | undefined;
    /** When true, disables the input and prevents user interaction. @default false */
    disabled?: boolean | undefined;
    /**
     * Specifies if the "Done" and "Cancel" action buttons should be rendered.
     * Is restricted to `true` on mobile viewports
     */
    withButton?: boolean | undefined;
    /** The z-index of the calendar dropdown */
    zIndex?: number | undefined;
    /**
     * Function that returns when a valid selection is made. Returns the start
     * date in "YYYY-MM-DD" string format.
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
    /** Called when there is a change in the current visible month and year */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;
}
