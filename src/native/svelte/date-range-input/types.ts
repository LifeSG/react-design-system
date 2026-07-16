export type FocusType = "start" | "end" | "none";

export type View = "default" | "month-options" | "year-options";

export type CalendarAction = "reset" | "confirmed";

export interface DateRangeValue {
    start: string;
    end: string;
}

export interface DateRangeInputProps {
    startDate?: string;
    endDate?: string;
    minDate?: string;
    maxDate?: string;
    disabledDates?: string[];
    disabled?: boolean;
    error?: boolean;
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
