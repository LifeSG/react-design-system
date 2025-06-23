import { Dayjs } from "dayjs";
import { CommonCalendarProps, FocusType } from "../types";
export type DayVariant = "default" | "other-month" | "today";
interface CalendarDayViewProps extends CommonCalendarProps {
    selectedStartDate: string | undefined;
    selectedEndDate: string | undefined;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
    setCalendarDate?: (date: string | undefined) => void | undefined;
}
export declare const StandardCalendarDayView: ({ calendarDate, currentFocus, disabledDates, selectedStartDate, selectedEndDate, onSelect, onHover, isNewSelection, minDate, maxDate, allowDisabledSelection, showActiveMonthDaysOnly, setCalendarDate, }: CalendarDayViewProps) => import("react/jsx-runtime").JSX.Element;
export {};
