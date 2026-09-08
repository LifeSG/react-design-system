import type { Dayjs, OpUnitType } from "dayjs";
export declare class DateHelper {
    /**
     * Ensures that the given value is transformed into a logical day number (i.e. 1 - 31 days)
     * @param day input day number
     * @param month input month number
     * @param month input year number
     */
    static clampDay(day: string, month: string, year: string): string;
    /**
     * Ensures that the given value is transformed into a logical month number (i.e. 1 - 12 months)
     * @param month input month number
     */
    static clampMonth(month: string): string;
    /**
     * Checks if the specified year is a leap year
     * @param year input year number
     */
    static isLeapYear(year: number): boolean;
    /**
     * Calculate the difference in minutes between two times
     * @param start input start string
     * @param end input end string
     * @param format the time format, defaults to "HH:mm"
     */
    static getTimeDiffInMinutes(start: string, end: string, format?: string): number;
    static toDayjs(date: string | undefined): Dayjs;
    /**
     * Add time in minutes to a given start time
     * @param start input start string
     * @param minutes input time to be added in minutes
     * @param format the time format, defaults to "HH:mm"
     */
    static addMinutesToTime(time: string, minutes: number, format?: string): string;
    /**
     * Compares two date params to check if they are the same, to a precision level
     * @param date1 The first date input param
     * @param date2 The second date input param
     * @param precision The precision/granular level to check if dates are the same, defaults to "day"
     * @returns
     */
    static isSame(date1: string | Dayjs, date2: string | Dayjs, precision?: OpUnitType): boolean;
}
