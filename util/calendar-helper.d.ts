import type { Dayjs, OpUnitType } from "dayjs";
export declare class CalendarHelper {
    static generateDays(calendarDate: Dayjs): Dayjs[][];
    static generateDaysForCurrentWeek(calendarDate: Dayjs): Dayjs[];
    static generateMonths(calendarDate: Dayjs): Dayjs[];
    static generateDecadeOfYears(calendarDate: Dayjs): Dayjs[];
    static getStartEndDecade(calendarDate: Dayjs): {
        beginDecade: number;
        endDecade: number;
    };
    static convertTo12HourFormat(time: string): string;
    /**
     * Returns if a date is within a min and max date (inclusive)
     *
     * If only minDate is provided, then it will return true if
     * same or after.
     *
     * If only maxDate is provided, then it will return true if
     * same or before.
     */
    static isWithinRange(day: Dayjs, minDate?: Dayjs, maxDate?: Dayjs, unit?: OpUnitType): boolean;
    /**
     * If the previous month of this date is within min date
     */
    static isPreviousMonthWithinRange(day: Dayjs, minDate: Dayjs): boolean;
    /**
     * If the previous year of this date is within min date
     */
    static isPreviousYearWithinRange(day: Dayjs, minDate: Dayjs): boolean;
    /**
     * If the previous decade of this date is within min date
     */
    static isPreviousDecadeWithinRange(day: Dayjs, minDate: Dayjs): boolean;
    /**
     * If the next month of this date is within max date
     */
    static isNextMonthWithinRange(day: Dayjs, maxDate: Dayjs): boolean;
    /**
     * If the next year of this date is within max date
     */
    static isNextYearWithinRange(day: Dayjs, maxDate: Dayjs): boolean;
    /**
     * If the next decade of this date is within max date
     */
    static isNextDecadeWithinRange(day: Dayjs, maxDate: Dayjs): boolean;
    static getWeekStartEnd(day: Dayjs): {
        start: string;
        end: string;
    };
    static getFixedRangeStartEnd(day: Dayjs, numberOfDays: number): {
        start: string;
        end: string;
    };
    static isDisabledDay(day: Dayjs, disabledDates?: string[] | undefined, minDate?: string | undefined, maxDate?: string | undefined): boolean;
}
