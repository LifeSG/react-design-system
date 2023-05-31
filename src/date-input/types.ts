import { CommonCalendarProps } from "../shared/internal-calendar/types";

export interface DateInputProps extends CommonCalendarProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;

    // Input-specific Attributes
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
     * Function that returns when a defocus is made on the field
     */
    onBlur?: (() => void) | undefined;
}
