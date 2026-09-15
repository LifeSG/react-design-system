import { ScheduleView } from "../types";
export interface ScheduleHeaderProps {
    id?: string | undefined;
    date: string;
    view: ScheduleView;
    minDate?: string | undefined;
    maxDate?: string | undefined;
    onPreviousDayClick: (currentDate: string) => void;
    onNextDayClick: (currentDate: string) => void;
    onCalendarDateSelect?: (currentDate: string) => void;
    onViewChange?: (view: ScheduleView) => void;
    onTodayClick?: () => void;
}
export declare const ScheduleHeader: ({ date, view, minDate, maxDate, onPreviousDayClick, onNextDayClick, onCalendarDateSelect, onViewChange, onTodayClick, ...otherProps }: ScheduleHeaderProps) => import("react/jsx-runtime").JSX.Element;
