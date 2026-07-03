import type { RefObject } from "react";

import type {
    CommonCalendarProps,
    Variant,
    YearMonthDisplay,
} from "../shared/internal-calendar/types";

/** Props for `DateRangeInput`. */
export interface DateRangeInputProps extends CommonCalendarProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;

    // Input-specific Attributes
    "data-testid"?: string | undefined;
    /**
     * When `true`, suppresses the native on-screen keyboard on mobile devices
     * while still allowing the calendar picker to open.
     */
    hideInputKeyboard?: boolean | undefined;
    /**
     * The controlled value of the date input in `"YYYY-MM-DD"` or `"YYYY-M-D"` string format.
     *
     * @remarks Passing `undefined` or an invalid string clears the selection.
     */
    value?: string | undefined;
    /**
     * The controlled value of the end date input in `"YYYY-MM-DD"` or `"YYYY-M-D"` string format.
     *
     * @remarks Passing `undefined` or an invalid string clears the selection.
     */
    valueEnd?: string | undefined;
    /** Renders the input in an error state. */
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    /**
     * Selection model used by the calendar.
     * - `"range"` — user picks a free-form start and end date independently.
     * - `"week"` — selecting any day automatically expands the selection to the full calendar week.
     * - `"fixed-range"` — selecting a start date automatically sets the end date to `numberOfDays - 1` days later.
     *
     * @default "range"
     */
    variant?: Exclude<Variant, "single" | "multi"> | undefined;
    /**
     * Number of days in the selection window when `variant` is `"fixed-range"`.
     * The end date is calculated as the selected start date plus `numberOfDays - 1` days.
     *
     * @default 7
     */
    numberOfDays?: number;
    /**
     * Whether to show "Done" and "Cancel" action buttons inside the calendar dropdown.
     * When `false`, a selection immediately commits and closes the calendar.
     *
     * @default true
     */
    withButton?: boolean | undefined;
    /** The z-index of the calendar dropdown */
    zIndex?: number | undefined;
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
     * Called when the user completes a valid date range selection.
     * Both dates are provided in `"YYYY-MM-DD"` format. An empty string is passed
     * for either date when the selection is cleared.
     *
     * @remarks When `withButton` is `true`, this fires only after the user
     * confirms via the "Done" button.
     */
    onChange?: ((startDate: string, endDate: string) => void) | undefined;
    /**
     * Called when the input receives focus.
     */
    onFocus?: (() => void) | undefined;
    /**
     * Called when focus leaves both the input and the calendar dropdown.
     */
    onBlur?: (() => void) | undefined;
    /**
     * Called when the visible month or year in the calendar changes.
     */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;
}
