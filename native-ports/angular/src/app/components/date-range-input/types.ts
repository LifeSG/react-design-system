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
    focused: boolean;
}

export interface DayInfo {
    date: string; // YYYY-MM-DD
    day: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    isDisabled: boolean;
    isSelectedStart: boolean;
    isSelectedEnd: boolean;
    isInRange: boolean;
}

export interface DateRangeValue {
    start: string;
    end: string;
}
