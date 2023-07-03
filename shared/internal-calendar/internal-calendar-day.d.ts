/// <reference types="react" />
import { Dayjs } from "dayjs";
import { CalendarType, FocusType, InternalCalendarProps } from "./types";
export type DayVariant = "default" | "other-month" | "today";
interface CalendarDayProps extends Pick<InternalCalendarProps, "disabledDates" | "variant" | "between"> {
    selectedStartDate: string;
    selectedEndDate: string;
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    type: CalendarType;
    isNewSelection: boolean;
    onSelect: (value: Dayjs) => void;
    onHover: (value: string) => void;
}
export declare const InternalCalendarDay: ({ calendarDate, currentFocus, disabledDates, selectedStartDate, selectedEndDate, onSelect, onHover, type, isNewSelection, between, variant, }: CalendarDayProps) => JSX.Element;
export {};
