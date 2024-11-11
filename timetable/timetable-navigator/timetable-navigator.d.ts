import { MutableRefObject } from "react";
interface TimeTableNavigatorProps {
    selectedDate: string;
    loading: boolean;
    tableContainerRef: MutableRefObject<HTMLDivElement>;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    totalRecords?: number | undefined;
    onLeftArrowClick?: (currentDate: string) => void | undefined;
    onRightArrowClick?: (currentDate: string) => void | undefined;
    onRefresh?: (() => void) | undefined;
}
export declare const TimeTableNavigator: ({ selectedDate, loading, tableContainerRef, totalRecords, onLeftArrowClick, onRightArrowClick, onRefresh, ...otherProps }: TimeTableNavigatorProps) => import("react/jsx-runtime").JSX.Element;
export {};
