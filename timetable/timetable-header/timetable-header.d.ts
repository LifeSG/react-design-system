import { RefObject } from "react";
interface TimeTableHeaderProps {
    selectedDate: string;
    loading: boolean;
    tableContainerRef: RefObject<HTMLDivElement>;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    totalRecords?: number | undefined;
    showDateAsShortForm?: boolean | undefined;
    showCurrentDateAsToday?: boolean | undefined;
    onPreviousDayClick: (currentDate: string) => void | undefined;
    onNextDayClick: (currentDate: string) => void | undefined;
    onRefresh?: (() => void) | undefined;
    onCalendarDateSelect?: ((currentDate: string) => void) | undefined;
}
export declare const TimeTableHeader: ({ selectedDate, loading, tableContainerRef, totalRecords, onPreviousDayClick, onNextDayClick, onRefresh, onCalendarDateSelect, ...otherProps }: TimeTableHeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
