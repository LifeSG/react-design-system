import { Dayjs } from "dayjs";

export interface CalendarProps {}

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
    disabledDate?: string[];
    onChange?: ((value: string) => void) | undefined;
    value?: string; // YYYY-MM-DD
}

export interface YearMonthBase {
    calendarDate: Dayjs;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    showView: View;
    selectedStartDate: string;
}

export interface CalendarMonthProps extends YearMonthBase {}
export interface CalendarYearProps extends YearMonthBase {}
