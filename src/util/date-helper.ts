import dayjs, { Dayjs } from "dayjs";

const MONTHS_WITH_31_DAYS = [1, 3, 5, 7, 8, 10, 12];
const MONTHS_WITH_30_DAYS = [4, 6, 9, 11];

export namespace DateHelper {
    /**
     * Ensures that the given value is transformed into a logical day number (i.e. 1 - 31 days)
     * @param day input day number
     * @param month input month number
     * @param month input year number
     */
    export const clampDay = (
        day: string,
        month: string,
        year: string
    ): string => {
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
            return isLeapYear(yearNumber)
                ? Math.min(dayNumber, 29).toString()
                : Math.min(dayNumber, 28).toString();
        }

        return day;
    };

    /**
     * Ensures that the given value is transformed into a logical month number (i.e. 1 - 12 months)
     * @param month input month number
     */
    export const clampMonth = (month: string): string => {
        const monthNumber = parseInt(month);

        if (monthNumber == 0) {
            return "1";
        }

        if (monthNumber > 12) {
            return "12";
        }
        return month;
    };

    /**
     * Checks if the specified year is a leap year
     * @param year input year number
     */
    export const isLeapYear = (year: number): boolean => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    /**
     * Calculate the difference in minutes between two times
     * @param start input start string
     * @param end input end string
     * @param format the time format, defaults to "HH:mm"
     */
    export const getTimeDiffInMinutes = (
        start: string,
        end: string,
        format = "HH:mm"
    ) => {
        const startTime = dayjs(start, format);
        const endTime = dayjs(end, format);
        return endTime.diff(startTime, "minute");
    };

    export const toDayjs = (date: string): Dayjs => {
        return date ? dayjs(date) : dayjs();
    };
}
