import type {
    CommonCalendarProps,
    CommonDateFieldProps,
    YearMonthDisplay,
} from "../shared/internal-calendar/types";

/** Props for the `DateInput` component. */
export interface DateInputProps
    extends CommonCalendarProps,
        CommonDateFieldProps {
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
