import { TimeSlot } from "../time-slot-bar/types";

export interface TimeSlotWeekViewProps {
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;

    value?: string | undefined; // selected date format (YYYY-MM-DD)
    /** minimum allowed date to select: format (YYYY-MM-DD) **/
    minDate?: string | undefined;
    /** maximum allowed date to select: format (YYYY-MM-DD) **/
    maxDate?: string | undefined;
    /** Specifies any time-bar slots to render in weekly-calendar component */
    slots?: { [date: string]: TimeSlot[] } | undefined;
    /** Specifies should show or hide drop-down buttons and navigation arrows in header*/
    showNavigationHeader?: boolean | undefined;
    /** Specifies should allow selecting date on weekly-calendar component */
    enableSelection?: boolean | undefined;
    /** Specifies which date should be included in the rendered calendar component (date will not be selected) formate: YYYY-DD-MM*/
    currentCalendarDate?: string | undefined;
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
    /** Specifies any callback to execute when user click on rendered slots on weekly-calendar component */
    onSlotClick?: (date: string, timeSlot: TimeSlot) => void | undefined;
    onChange?: (value: string) => void | undefined;
    onWeekDisplayChange?: ((value: YearMonthWeekDisplay) => void) | undefined;
}

interface YearMonthWeekDisplay {
    week: { firstDayOfWeek: string; lastDayOfWeek: string };
    year: number;
    month: number;
}
