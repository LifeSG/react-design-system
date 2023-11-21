import customParseFormat from "dayjs/plugin/customParseFormat";
import timezone from "dayjs/plugin/timezone";
import dayjs, { Dayjs, OpUnitType } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

dayjs.extend(customParseFormat);
dayjs.extend(timezone);
export namespace CalendarHelper {
    export const generateDays = (calendarDate: Dayjs): Dayjs[][] => {
        const firstDayOfTheMonth = calendarDate.startOf("month");

        const firstDayOfFirstWeekOfMonth =
            dayjs(firstDayOfTheMonth).startOf("week");

        const firstDayOfEachWeek = generateFirstDayOfEachWeek(
            firstDayOfFirstWeekOfMonth
        );

        return firstDayOfEachWeek.map((date) => generateWeek(date));
    };

    export const generateDaysForCurrentWeek = (
        calendarDate: Dayjs
    ): Dayjs[] => {
        const firstDayOfWeek = calendarDate.startOf("week");

        return generateWeek(firstDayOfWeek);
    };

    export const generateMonths = (calendarDate: Dayjs): Dayjs[] => {
        const months: Dayjs[] = [];

        for (let i = 0; i < 12; i++) {
            const monthForSelectedDay = calendarDate.month(i);
            months.push(dayjs(monthForSelectedDay));
        }

        return months;
    };

    export const generateDecadeOfYears = (calendarDate: Dayjs): Dayjs[] => {
        const year = calendarDate.year();
        const decade = Math.floor(year / 10) * 10;

        const base = calendarDate.year(decade);
        const prev = base.subtract(1, "year");

        const years = [prev, base];

        for (let i = 1; i < 11; i++) {
            years.push(base.add(i, "year"));
        }

        return years;
    };

    export const getStartEndDecade = (calendarDate: Dayjs) => {
        const beginDecade = Math.floor(+calendarDate.format("YYYY") / 10) * 10;
        const endDecade = +dayjs(`${beginDecade + 9}-01-01`).format("YYYY");

        return {
            beginDecade,
            endDecade,
        };
    };

    export const convertTo12HourFormat = (time: string): string => {
        const parsedTime = dayjs(time, "HH:mm");
        if (!parsedTime.isValid()) {
            return "";
        }
        return parsedTime.format("h:mm a");
    };
    /**
     * Returns if a date is within a min and max date (inclusive)
     *
     * If only minDate is provided, then it will return true if
     * same or after.
     *
     * If only maxDate is provided, then it will return true if
     * same or before.
     */
    export const isWithinRange = (
        day: Dayjs,
        minDate?: Dayjs,
        maxDate?: Dayjs,
        unit: OpUnitType = "day"
    ) => {
        if (!minDate && !maxDate) {
            return true;
        } else if (minDate && maxDate) {
            return day.isBetween(minDate, maxDate, unit, "[]");
        } else if (minDate) {
            return day.isSameOrAfter(minDate, unit);
        } else {
            return day.isSameOrBefore(maxDate, unit);
        }
    };

    /**
     * If the previous month of this date is within min date
     */
    export const isPreviousMonthWithinRange = (day: Dayjs, minDate: Dayjs) => {
        return CalendarHelper.isWithinRange(
            day.subtract(1, "month"),
            minDate,
            undefined,
            "month"
        );
    };

    /**
     * If the previous year of this date is within min date
     */
    export const isPreviousYearWithinRange = (day: Dayjs, minDate: Dayjs) => {
        return CalendarHelper.isWithinRange(
            day.subtract(1, "year"),
            minDate,
            undefined,
            "year"
        );
    };

    /**
     * If the previous decade of this date is within min date
     */
    export const isPreviousDecadeWithinRange = (day: Dayjs, minDate: Dayjs) => {
        const { beginDecade } = CalendarHelper.getStartEndDecade(day);
        return CalendarHelper.isWithinRange(
            day.year(beginDecade).subtract(1, "year"),
            minDate,
            undefined,
            "year"
        );
    };

    /**
     * If the next month of this date is within max date
     */
    export const isNextMonthWithinRange = (day: Dayjs, maxDate: Dayjs) => {
        return CalendarHelper.isWithinRange(
            day.add(1, "month"),
            undefined,
            maxDate,
            "month"
        );
    };

    /**
     * If the next year of this date is within max date
     */
    export const isNextYearWithinRange = (day: Dayjs, maxDate: Dayjs) => {
        return CalendarHelper.isWithinRange(
            day.add(1, "year"),
            undefined,
            maxDate,
            "year"
        );
    };

    /**
     * If the next decade of this date is within max date
     */
    export const isNextDecadeWithinRange = (day: Dayjs, maxDate: Dayjs) => {
        const { endDecade } = CalendarHelper.getStartEndDecade(day);
        return CalendarHelper.isWithinRange(
            day.year(endDecade).add(1, "year"),
            undefined,
            maxDate,
            "year"
        );
    };

    export const getWeekStartEnd = (day: Dayjs) => {
        const firstDayOfWeek = day.startOf("week").format("YYYY-MM-DD");
        const lastDayOfWeek = day.endOf("week").format("YYYY-MM-DD");

        return {
            start: firstDayOfWeek,
            end: lastDayOfWeek,
        };
    };

    export const getFixedRangeStartEnd = (day: Dayjs, numberOfDays: number) => {
        return {
            start: day.format("YYYY-MM-DD"),
            end: day.add(numberOfDays - 1, "day").format("YYYY-MM-DD"),
        };
    };

    export const isDisabledDay = (
        day: Dayjs,
        disabledDates?: string[] | undefined,
        minDate?: string | undefined,
        maxDate?: string | undefined
    ): boolean => {
        const isWithinRange = CalendarHelper.isWithinRange(
            day,
            minDate ? dayjs(minDate) : undefined,
            maxDate ? dayjs(maxDate) : undefined
        );

        const isDisabledDate =
            disabledDates && disabledDates.includes(day.format("YYYY-MM-DD"));

        return !isWithinRange || !!isDisabledDate;
    };
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const generateFirstDayOfEachWeek = (day: Dayjs): Dayjs[] => {
    const dates: Dayjs[] = [day];

    for (let i = 1; i < 6; i++) {
        const date = day.add(i, "week");
        dates.push(date);
    }

    return dates;
};

const generateWeek = (day: Dayjs): Dayjs[] => {
    const dates: Dayjs[] = [];

    for (let i = 0; i < 7; i++) {
        const date = day.add(i, "day");
        dates.push(date);
    }

    return dates;
};
