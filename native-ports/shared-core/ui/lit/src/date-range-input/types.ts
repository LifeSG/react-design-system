export type { FocusType, DateRangeInputState } from "@lifesg/design-core";

export type CalendarAction = "reset" | "confirmed";
export type View = "default" | "month-options" | "year-options";

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
