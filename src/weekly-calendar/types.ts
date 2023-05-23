import { CommonCalendarProps } from "../shared/internal-calendar/types";
import { TimeSlot } from "../time-slot-bar";

export interface WeeklyCalendarProps extends CommonCalendarProps {
    showNavigationHeader?: boolean; // default true: show or hide month/year and arrow dropdowns
    value?: string | undefined; // selected date format (YYYY-MM-DD)
    currentCalendarDate?: string | undefined; // Specifies which date should be included in the rendered calendar component (date will not be selected) formate: YYYY-DD-MM
    slots?: { [date: string]: TimeSlot[] } | undefined;
    enableSelection?: boolean | undefined; // enable date selection
    calendarDate?: string | undefined;
    onChange?: (value: string) => void | undefined;
    onSlotClick?: (timeSlot: TimeSlot) => void | undefined;
    minDate?: string | undefined; // minimum allowed date to select: format (YYYY-MM-DD)
    maxDate?: string | undefined; // maximum allowed date to select: format (YYYY-MM-DD)
}
