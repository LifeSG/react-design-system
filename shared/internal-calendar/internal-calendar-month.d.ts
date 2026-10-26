import { Dayjs } from "dayjs";
import { FocusType, InternalCalendarProps } from "./types";
export type MonthVariant = "default" | "current-month" | "selected-month";
interface Props extends Pick<InternalCalendarProps, "minDate" | "maxDate" | "allowDisabledSelection"> {
    calendarDate: Dayjs;
    currentFocus?: FocusType | undefined;
    selectedStartDate: string | undefined;
    selectedEndDate?: string | undefined;
    viewCalendarDate: Dayjs;
    isNewSelection: boolean;
    onMonthSelect: (value: Dayjs) => void;
}
export declare const InternalCalendarMonth: ({ calendarDate, currentFocus, selectedStartDate, selectedEndDate, viewCalendarDate, isNewSelection, minDate, maxDate, allowDisabledSelection, onMonthSelect, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
