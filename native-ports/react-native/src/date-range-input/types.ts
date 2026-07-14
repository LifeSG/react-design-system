export type FocusType = "start" | "end" | "none";
export type CalendarAction = "reset" | "confirmed";
export type View = "default" | "month-options" | "year-options";

export interface DateRangeInputState {
    initialStart: string;
    initialEnd: string;
    selectedStart: string;
    selectedEnd: string;
    currentFocus: FocusType;
    calendarOpen: boolean;
}

export interface DateRangeInputProps {
    value?: string;
    valueEnd?: string;
    minDate?: string;
    maxDate?: string;
    disabledDates?: string[];
    disabled?: boolean;
    error?: boolean;
    withButton?: boolean;
    onChange?: (startDate: string, endDate: string) => void;
}
