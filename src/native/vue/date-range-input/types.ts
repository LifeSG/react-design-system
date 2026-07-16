export type FocusType = "start" | "end" | "none";

export type View = "default" | "month-options" | "year-options";

export type CalendarAction = "reset" | "confirmed";

export interface DateRangeValue {
    start: string;
    end: string;
}

export interface DateRangeInputProps {
    /** Current start date in YYYY-MM-DD format */
    startDate?: string;
    /** Current end date in YYYY-MM-DD format */
    endDate?: string;
    /** Minimum selectable date in YYYY-MM-DD format */
    minDate?: string;
    /** Maximum selectable date in YYYY-MM-DD format */
    maxDate?: string;
    /** Array of disabled dates in YYYY-MM-DD format */
    disabledDates?: string[];
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Whether the input is in error state */
    error?: boolean;
    /** Label text displayed above the input */
    label?: string;
}

export interface DateRangeState {
    initialStart: string;
    initialEnd: string;
    selectedStart: string;
    selectedEnd: string;
    currentFocus: FocusType;
    calendarOpen: boolean;
    focused: boolean;
}
