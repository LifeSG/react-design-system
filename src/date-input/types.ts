import type { RefObject } from "react";

import type {
    CommonCalendarProps,
    YearMonthDisplay,
} from "../shared/internal-calendar/types";

/** Props for the `DateInput` component. */
export interface DateInputProps extends CommonCalendarProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;
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

    // Input-specific Attributes
    "data-testid"?: string | undefined;
    readOnly?: boolean | undefined;
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
    /** Renders the input in an error state. */
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    /**
     * Whether to show "Done" and "Cancel" action buttons inside the calendar dropdown.
     * When `false`, a selection immediately commits and closes the calendar.
     *
     * @default true
     */
    withButton?: boolean | undefined;
    /** The z-index of the calendar dropdown. */
    zIndex?: number | undefined;
    /**
     * Called when the user commits a date selection. Receives the selected date
     * as a `"YYYY-MM-DD"` string, or an empty string when the selection is cleared.
     *
     * @remarks When `withButton` is `true`, this fires only after the user
     * confirms via the "Done" button. When `withButton` is `false`, it fires
     * immediately on each selection.
     */
    onChange?: ((value: string) => void) | undefined;
    /** Called when the input receives focus. */
    onFocus?: (() => void) | undefined;
    /** Called when focus leaves both the input and the calendar dropdown. */
    onBlur?: (() => void) | undefined;
    /** Called when the visible month or year in the calendar changes. */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;
}
