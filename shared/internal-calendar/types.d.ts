import type { Dayjs } from "dayjs";
export interface CommonCalendarProps {
    /**
     * The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.
     */
    minDate?: string | undefined;
    /**
     * The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.
     */
    maxDate?: string | undefined;
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
    /** Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable */
    allowDisabledSelection?: boolean | undefined;
    /** Specifies if the calendar should display only dates for the selected month */
    showActiveMonthDaysOnly?: boolean | undefined;
}
export interface InternalCalendarProps extends CommonCalendarProps {
    /** Selected start date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /** Selected end date in `YYYY-MM-DD` format */
    endValue?: string | undefined;
    /** Specifies if done/cancel buttons are visible */
    withButton?: boolean | undefined;
    /** Indicate current focus in the date-input component. */
    currentFocus?: FocusType | undefined;
    /** Indicate calendar variant from the date input component. */
    variant?: Variant | undefined;
    /** Selection to respect start or end range. */
    selectWithinRange?: boolean | undefined;
    /** The initially visible calendar month */
    initialCalendarDate?: string | undefined;
    /** Function to handle cancel/done .*/
    onDismiss?: ((action: CalendarAction) => void) | undefined;
    /** Called when there is a change in the current visible month and year */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;
    /** Called when date is selected, returns value in `YYYY-MM-DD` format */
    onSelect?: ((value: string) => void) | undefined;
    /** Called when day cell is hovered, returns value in `YYYY-MM-DD` */
    onHover?: ((value: string) => void) | undefined;
    /** Indicate the number of days used in fixed-range variant */
    numberOfDays?: number | undefined;
    /** Indicates whether calendar is focusable */
    isFocusable?: boolean | undefined;
}
export interface CalendarDropdownProps extends InternalCalendarProps {
    width: number;
}
export type CalendarAction = "reset" | "confirmed";
export type Variant = "single" | "range" | "week" | "fixed-range";
export type FocusType = "start" | "end" | "none";
export type View = "default" | "month-options" | "year-options";
export interface YearMonthDisplay {
    year: number;
    month: number;
}
export interface InternalCalendarRef {
    reset: () => void;
    setCalendarDate: (value?: string) => void;
}
export interface CalendarManagerProps extends CommonCalendarProps {
    children: React.ReactNode | ((props: DefaultViewProps) => React.ReactNode);
    initialCalendarDate?: string | undefined;
    currentFocus?: FocusType | undefined;
    selectedStartDate?: string | undefined;
    selectedEndDate?: string | undefined;
    selectWithinRange?: boolean | undefined;
    onCalendarDateChange?: ((calendarDate: Dayjs) => void) | undefined;
    dynamicHeight?: boolean | undefined;
    withButton?: boolean | undefined;
    doneButtonDisabled?: boolean | undefined;
    onDismiss?: ((action: CalendarAction) => void) | undefined;
    showNavigationHeader?: boolean | undefined;
    getLeftArrowDate?: ((current: Dayjs) => Dayjs) | undefined;
    getRightArrowDate?: ((current: Dayjs) => Dayjs) | undefined;
    isLeftArrowDisabled?: ((calendarDate: Dayjs) => boolean) | undefined;
    isRightArrowDisabled?: ((calendarDate: Dayjs) => boolean) | undefined;
    getMonthHeaderLabel?: ((calendarDate: Dayjs) => string) | undefined;
    getYearHeaderLabel?: ((calendarDate: Dayjs) => string) | undefined;
    isFocusable?: boolean | undefined;
}
export interface DefaultViewProps {
    calendarDate: Dayjs;
    currentView: View;
}
export interface CalendarManagerRef {
    defaultView: () => void;
    resetView: () => void;
    setCalendarDate: (date: string | undefined) => void;
}
