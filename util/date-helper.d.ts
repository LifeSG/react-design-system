import { Dayjs } from "dayjs";
export declare namespace DateHelper {
    /**
     * Ensures that the given value is transformed into a logical day number (i.e. 1 - 31 days)
     * @param day input day number
     * @param month input month number
     * @param month input year number
     */
    const clampDay: (day: string, month: string, year: string) => string;
    /**
     * Ensures that the given value is transformed into a logical month number (i.e. 1 - 12 months)
     * @param month input month number
     */
    const clampMonth: (month: string) => string;
    /**
     * Checks if the specified year is a leap year
     * @param year input year number
     */
    const isLeapYear: (year: number) => boolean;
    /**
     * Calculate the difference in minutes between two times
     * @param start input start string
     * @param end input end string
     * @param format the time format, defaults to "HH:mm"
     */
    const getTimeDiffInMinutes: (start: string, end: string, format?: string) => number;
    const toDayjs: (date: string) => Dayjs;
    /**
     * Add time in minutes to a given start time
     * @param start input start string
     * @param minutes input time to be added in minutes
     * @param format the time format, defaults to "HH:mm"
     */
    const addMinutesToTime: (time: string, minutes: number, format?: string) => string;
}
