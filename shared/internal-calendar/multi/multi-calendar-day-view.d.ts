import { Dayjs } from "dayjs";
import { CommonCalendarProps } from "../types";
interface MultiCalendarDayViewProps extends CommonCalendarProps {
    selectedDates: string[];
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
    setCalendarDate?: ((date: string | undefined) => void) | undefined;
}
export declare const MultiCalendarDayView: ({ calendarDate, disabledDates, selectedDates, onSelect, onHover, minDate, maxDate, allowDisabledSelection, showActiveMonthDaysOnly, setCalendarDate, }: MultiCalendarDayViewProps) => import("react/jsx-runtime").JSX.Element;
export {};
