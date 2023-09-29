import { CommonCalendarProps, YearMonthDisplay } from "../shared/internal-calendar/types";
export interface DateInputProps extends CommonCalendarProps {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    readOnly?: boolean | undefined;
    /**
     * The value of the date input in "YYYY-MM-DD" or "YYYY-M-D" string format.
     */
    value?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    /**
     * Specifies if the "Done" and "Cancel" action buttons should be rendered.
     * Is restricted to `true` on mobile viewports
     */
    withButton?: boolean | undefined;
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
