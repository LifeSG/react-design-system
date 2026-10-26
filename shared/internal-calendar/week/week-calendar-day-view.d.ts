import { Dayjs } from "dayjs";
import { CommonCalendarProps } from "../types";
interface WeekCalendarDayViewProps extends CommonCalendarProps {
    selectedStartDate: string | undefined;
    calendarDate: Dayjs;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
    setCalendarDate?: ((date: string | undefined) => void) | undefined;
}
export declare const WeekCalendarDayView: ({ calendarDate, disabledDates, selectedStartDate, onSelect, onHover, minDate, maxDate, allowDisabledSelection, setCalendarDate, }: WeekCalendarDayViewProps) => import("react/jsx-runtime").JSX.Element;
export {};
