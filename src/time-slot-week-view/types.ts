import {
    CommonCalendarProps,
    InternalCalendarProps,
} from "../shared/internal-calendar/types";
import { TimeSlot } from "../time-slot-bar";

export interface TimeSlotWeekProps {
    /** Specifies any time-bar slots to render in weekly-calendar component */
    slots?: { [date: string]: TimeSlot[] } | undefined;
    /** Specifies should show or hide drop-down buttons and navigation arrows in header*/
    showNavigationHeader?: boolean | undefined;
    /** Specifies should allow selecting date on weekly-calendar component */
    enableSelection?: boolean | undefined;
    /** Specifies which date should be included in the rendered calendar component (date will not be selected) formate: YYYY-DD-MM*/
    currentCalendarDate?: string | undefined;
    /** Specifies any callback to execute when user click on rendered slots on weekly-calendar component */
    onSlotClick?: (timeSlot: TimeSlot) => void | undefined;
}

export interface TimeSlotWeekViewProps
    extends CommonCalendarProps,
        TimeSlotWeekProps {
    value?: string | undefined; // selected date format (YYYY-MM-DD)
    calendarDate?: string | undefined;
    onChange?: (value: string) => void | undefined;
    minDate?: string | undefined; // minimum allowed date to select: format (YYYY-MM-DD)
    maxDate?: string | undefined; // maximum allowed date to select: format (YYYY-MM-DD)
}

export interface TimeSlotWeekCalendarProps
    extends TimeSlotWeekProps,
        InternalCalendarProps {}
