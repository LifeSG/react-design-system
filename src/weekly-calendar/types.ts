import { CommonCalendarProps } from "../shared/internal-calendar/types";
import { TimeSlot } from "../time-slot-bar";

export interface WeeklyCalendarProps extends CommonCalendarProps {
    showMonthSwitcher?: boolean; // default true
    shownWeek: string; // date in the week that is displayed (the week is Sun-Sat; any day within the week will show the appropriate week containing the date)
    slots?: { [date: string]: TimeSlot[] } | undefined;
    enableSelection?: boolean | undefined;
    onChange?: (value: string) => void | undefined;
    onSlotClick?: (timeSlot: TimeSlot) => void | undefined;
    minDate?: string | undefined; // minimum allowed date to select format (YYYY-MM-DD)
    maxDate?: string | undefined; // minimum allowed date to select format (YYYY-MM-DD)
}
