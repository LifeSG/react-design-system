import { Dayjs, OpUnitType } from "dayjs";
export declare namespace CalendarHelper {
    const generateDays: (calendarDate: Dayjs) => Dayjs[][];
    const generateDaysForCurrentWeek: (calendarDate: Dayjs) => Dayjs[];
    const generateMonths: (calendarDate: Dayjs) => Dayjs[];
    const generateDecadeOfYears: (calendarDate: Dayjs) => Dayjs[];
    const getStartEndDecade: (calendarDate: Dayjs) => {
        beginDecade: number;
        endDecade: number;
    };
    const convertTo12HourFormat: (time: string) => string;
    /**
     * Returns if a date is within a min and max date (inclusive)
     *
     * If only minDate is provided, then it will return true if
     * same or after.
     *
     * If only maxDate is provided, then it will return true if
     * same or before.
     */
    const isWithinRange: (day: Dayjs, minDate?: Dayjs, maxDate?: Dayjs, unit?: OpUnitType) => boolean;
    /**
     * If the previous month of this date is within min date
     */
    const isPreviousMonthWithinRange: (day: Dayjs, minDate: Dayjs) => boolean;
    /**
     * If the previous year of this date is within min date
     */
    const isPreviousYearWithinRange: (day: Dayjs, minDate: Dayjs) => boolean;
    /**
     * If the previous decade of this date is within min date
     */
    const isPreviousDecadeWithinRange: (day: Dayjs, minDate: Dayjs) => boolean;
    /**
     * If the next month of this date is within max date
     */
    const isNextMonthWithinRange: (day: Dayjs, maxDate: Dayjs) => boolean;
    /**
     * If the next year of this date is within max date
     */
    const isNextYearWithinRange: (day: Dayjs, maxDate: Dayjs) => boolean;
    /**
     * If the next decade of this date is within max date
     */
    const isNextDecadeWithinRange: (day: Dayjs, maxDate: Dayjs) => boolean;
    const getWeekStartEnd: (day: Dayjs) => {
        start: string;
        end: string;
    };
    const getFixedRangeStartEnd: (day: Dayjs, numberOfDays: number) => {
        start: string;
        end: string;
    };
    const isDisabledDay: (day: Dayjs, disabledDates?: string[] | undefined, minDate?: string | undefined, maxDate?: string | undefined) => boolean;
}
