import type { Dayjs, OpUnitType } from "dayjs";
import dayjs from "dayjs";

const MONTHS_WITH_31_DAYS = [1, 3, 5, 7, 8, 10, 12];
const MONTHS_WITH_30_DAYS = [4, 6, 9, 11];

export class DateHelper {
    /**
     * Ensures that the given value is transformed into a logical day number (i.e. 1 - 31 days)
     * @param day input day number
     * @param month input month number
     * @param month input year number
     */
    public static clampDay(day: string, month: string, year: string): string {
        const dayNumber = parseInt(day);
        const monthNumber = parseInt(month);
        const yearNumber = parseInt(year);

        if (dayNumber == 0) {
            return "1";
        }

        if (MONTHS_WITH_31_DAYS.includes(monthNumber)) {
            return Math.min(dayNumber, 31).toString();
        }

        if (MONTHS_WITH_30_DAYS.includes(monthNumber)) {
            return Math.min(dayNumber, 30).toString();
        }

        if (monthNumber === 2) {
            return DateHelper.isLeapYear(yearNumber)
                ? Math.min(dayNumber, 29).toString()
                : Math.min(dayNumber, 28).toString();
        }

        return day;
    }

    /**
     * Ensures that the given value is transformed into a logical month number (i.e. 1 - 12 months)
     * @param month input month number
     */
    public static clampMonth(month: string): string {
        const monthNumber = parseInt(month);

        if (monthNumber == 0) {
            return "1";
        }

        if (monthNumber > 12) {
            return "12";
        }
        return month;
    }

    /**
     * Checks if the specified year is a leap year
     * @param year input year number
     */
    public static isLeapYear(year: number): boolean {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    /**
     * Calculate the difference in minutes between two times
     * @param start input start string
     * @param end input end string
     * @param format the time format, defaults to "HH:mm"
     */
    public static getTimeDiffInMinutes(
        start: string,
        end: string,
        format = "HH:mm"
    ): number {
        const startTime = dayjs(start, format);
        const endTime = dayjs(end, format);
        return endTime.diff(startTime, "minute");
    }

    public static toDayjs(date: string | undefined): Dayjs {
        return date ? dayjs(date) : dayjs();
    }

    /**
     * Add time in minutes to a given start time
     * @param start input start string
     * @param minutes input time to be added in minutes
     * @param format the time format, defaults to "HH:mm"
     */
    public static addMinutesToTime(
        time: string,
        minutes: number,
        format = "HH:mm"
    ): string {
        const newTime = dayjs(time, format)
            .add(minutes, "minutes")
            .format(format);
        return newTime;
    }

    /**
     * Compares two date params to check if they are the same, to a precision level
     * @param date1 The first date input param
     * @param date2 The second date input param
     * @param precision The precision/granular level to check if dates are the same, defaults to "day"
     * @returns
     */
    public static isSame(
        date1: string | Dayjs,
        date2: string | Dayjs,
        precision: OpUnitType = "day"
    ): boolean {
        return dayjs(date1).isSame(dayjs(date2), precision);
    }
}
