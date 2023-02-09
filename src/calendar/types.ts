import { Dayjs } from "dayjs";

export type View = "Day" | "Month" | "Year";

export type VariantDay = "default" | "otherMonth" | "today";

export type VariantMonth = "default" | "currentMonth" | "selectedMonth";

export type VariantYear =
    | "default"
    | "currentYear"
    | "otherDecade"
    | "selectedYear";

export interface CalendarProps {
    disabledDates?: string[] | undefined;
    onChange?: ((value: string) => void) | undefined;
    value?: string | undefined; // YYYY-MM-DD
}

export interface CalendarDayProps extends Pick<CalendarProps, "disabledDates"> {
    selectedStartDate: string;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
}

export interface YearMonthBase {
    calendarDate: Dayjs;
    showView: View;
    selectedStartDate: string;
    onSelect: (value: Dayjs) => void;
}

export interface CalendarMonthProps extends YearMonthBase {}
export interface CalendarYearProps extends YearMonthBase {
    onDecadeChange: (value: Dayjs) => void;
}
