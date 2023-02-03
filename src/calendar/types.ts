import { Dayjs } from "dayjs";

export type View = "Day" | "Month" | "Year";

export type VariantDay = "default" | "nextMonth" | "today";

export type VariantMonth =
    | "default"
    | "currentMonth"
    | "nextMonth"
    | "selectedMonth";

export type VariantYear =
    | "default"
    | "currentYear"
    | "nextDecaded"
    | "selectedYear";

export interface CalendarProps {
    disabledDates?: string[] | undefined;
    onChange?: ((value: string) => void) | undefined;
    value?: string | undefined; // YYYY-MM-DD
}

export interface YearMonthBase {
    calendarDate: Dayjs;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    showView: View;
    selectedStartDate: string;
}

export interface CalendarMonthProps extends YearMonthBase {}
export interface CalendarYearProps extends YearMonthBase {}
