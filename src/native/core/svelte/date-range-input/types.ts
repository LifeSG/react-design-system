export type { FocusType } from "../../design-core";

export type View = "default" | "month-options" | "year-options";

export type CalendarAction = "reset" | "confirmed";

export interface DateRangeValue {
    start: string;
    end: string;
}
