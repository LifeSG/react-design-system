import { RefObject } from "react";
import {
    CommonCalendarProps,
    Variant,
    YearMonthDisplay,
} from "../shared/internal-calendar/types";

export interface DateRangeInputProps extends CommonCalendarProps {
    // Standard HTML Attributes
    className?: string | undefined;
    id?: string | undefined;

    // Input-specific Attributes
    "data-testid"?: string | undefined;
    hideInputKeyboard?: boolean | undefined;
    /**
     * The value of the start date input in "YYYY-MM-DD" or "YYYY-M-D" string format.
     */
    value?: string | undefined;
    /**
     * The value of the end date input in "YYYY-MM-DD" or "YYYY-M-D" string format.
     */
    valueEnd?: string | undefined;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    /** Indicate calendar variant from the date input component. */
    variant?: Exclude<Variant, "single"> | undefined;
    /** Set the number of days for fixed-range variant */
    numberOfDays?: number;
    /**
     * Specifies if the "Done" and "Cancel" action buttons should be rendered.
     * Is restricted to `true` on mobile viewports
     */
    withButton?: boolean | undefined;
    /** The z-index of the calendar dropdown */
    zIndex?: number | undefined;
    /**
     * The root element that contains the popover element. Defaults to the document body.
     *
     * If the parent that contains the trigger element has a higher z-index than the popover,
     * the popover may not be visible. Specify the parent element here instead
     */
    rootNode?: RefObject<HTMLElement> | undefined;
    /**
     * Function that returns when a valid selection is made. Returns the start and
     * end date in "YYYY-MM-DD" string format.
     */
    onChange?: ((startDate: string, endDate: string) => void) | undefined;
    /**
     * Called when field is focused
     */
    onFocus?: (() => void) | undefined;
    /**
     * Function that returns when a defocus is made on the field
     */
    onBlur?: (() => void) | undefined;
    /** Called when there is a change in the current visible month and year */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;
}
