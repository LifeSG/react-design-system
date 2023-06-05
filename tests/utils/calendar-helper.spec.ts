import dayjs, { Dayjs } from "dayjs";
import { CalendarHelper } from "../../src/util/calendar-helper";

describe("CalendarHelper", () => {
    describe("generateDays", () => {
        it("should generate 6 weeks from the specified month", () => {
            const date = dayjs("2023-01-10");

            const values = CalendarHelper.generateDays(date);

            expect(values).toHaveLength(6);
            expect(values).toMatchSnapshot();
        });

        it("should generate Feb 29 in a leap year", () => {
            const date = dayjs("2028-02-01");
            const leapDay = "2028-02-29";

            const values = CalendarHelper.generateDays(date);

            expect(containsDate(values.flat(), leapDay)).toBeTruthy();
        });

        it("should generate Feb 28 in a non leap year", () => {
            const date = dayjs("2027-02-01");
            const leapDay = "2028-02-29";

            const values = CalendarHelper.generateDays(date);

            expect(containsDate(values.flat(), leapDay)).toBeFalsy();
        });
    });

    describe("generateMonths", () => {
        it("should generate the date for each month in the specified year", () => {
            const date = dayjs("2023-02-01");
            const correctLength = 12;

            const months = CalendarHelper.generateMonths(date);

            expect(months).toHaveLength(correctLength);
            expect(months).toMatchSnapshot();
        });

        it("should generate Feb 29 in a leap year", () => {
            const date = dayjs("2024-03-31");
            const leapDay = "2024-02-29";

            const values = CalendarHelper.generateMonths(date);

            expect(containsDate(values, leapDay)).toBeTruthy();
        });

        it("should generate the last day of the month if it has less days than the specified month", () => {
            const date = dayjs("2023-03-31");
            const lastDayOfFeb = "2023-02-28";
            const lastDayOfApr = "2023-04-30";

            const values = CalendarHelper.generateMonths(date);

            expect(containsDate(values, lastDayOfFeb)).toBeTruthy();
            expect(containsDate(values, lastDayOfApr)).toBeTruthy();
        });
    });

    describe("generateDecadeOfYears", () => {
        it("should generate the date for the decade and 2 years before", () => {
            const date = dayjs("2023-04-01");
            const correctLength = 12;

            const values = CalendarHelper.generateDecadeOfYears(date);

            expect(values).toHaveLength(correctLength);
            expect(values[0].year()).toEqual(2019);
            expect(values[11].year()).toEqual(2030);
            expect(values).toMatchSnapshot();
        });

        it("should return Feb 28 in non leap years", () => {
            const date = dayjs("2024-02-29");
            const lastDayOfTheMonth = "2023-02-28";

            const values = CalendarHelper.generateDecadeOfYears(date);

            expect(containsDate(values, lastDayOfTheMonth)).toBeTruthy();
        });
    });

    describe("getStartEndDecade", () => {
        it("should return correct start year and end year in this decade", () => {
            const startYear = 2020;
            const endYear = 2029;
            const date = dayjs("2024-01-01");

            const { beginDecade, endDecade } =
                CalendarHelper.getStartEndDecade(date);

            expect(startYear).toEqual(beginDecade);
            expect(endYear).toEqual(endDecade);
        });
    });

    describe("isWithinRange", () => {
        it("should return true if the date is within range", () => {
            const date = dayjs("2023-01-04");
            const minDate = dayjs("2023-01-01");
            const maxDate = dayjs("2023-02-01");

            const isWithinRange = CalendarHelper.isWithinRange(
                date,
                minDate,
                maxDate
            );

            expect(isWithinRange).toBe(true);
        });

        it("should return true if the date is within range (inclusive check)", () => {
            const minDate = dayjs("2023-01-01");
            const maxDate = dayjs("2023-02-01");

            const sameAsMaxCheck = CalendarHelper.isWithinRange(
                maxDate,
                minDate,
                maxDate
            );
            const sameAsMinCheck = CalendarHelper.isWithinRange(
                minDate,
                minDate,
                maxDate
            );

            expect(sameAsMaxCheck).toBe(true);
            expect(sameAsMinCheck).toBe(true);
        });

        it("should return false if the date is out of range", () => {
            const date = dayjs("2023-03-04");
            const minDate = dayjs("2023-01-01");
            const maxDate = dayjs("2023-02-01");

            const isWithinRange = CalendarHelper.isWithinRange(
                date,
                minDate,
                maxDate
            );

            expect(isWithinRange).toBe(false);
        });

        it("should return true if date is same or after minDate (if only minDate provided)", () => {
            const date = dayjs("2023-01-02");
            const minDate = dayjs("2023-01-02");

            const isWithinRange = CalendarHelper.isWithinRange(date, minDate);
            const isMonthWithinRange = CalendarHelper.isWithinRange(
                date,
                minDate,
                undefined,
                "month"
            );

            expect(isWithinRange).toBe(true);
            expect(isMonthWithinRange).toBe(true);
        });

        it("should return true if date is same or before maxDate (if only maxDate provided)", () => {
            const date = dayjs("2023-01-02");
            const maxDate = dayjs("2023-01-02");

            const isWithinRange = CalendarHelper.isWithinRange(
                date,
                undefined,
                maxDate
            );

            const isMonthWithinRange = CalendarHelper.isWithinRange(
                date,
                undefined,
                maxDate,
                "month"
            );

            expect(isWithinRange).toBe(true);
            expect(isMonthWithinRange).toBe(true);
        });
    });

    describe("isPreviousMonthWithinRange", () => {
        it("should return true if the previous month of date is within minDate", () => {
            const prevMonth = dayjs("2023-04-15");
            const currentMonth = dayjs("2023-05-01");
            const nextMonth = dayjs("2023-06-15");
            const minDate = dayjs("2023-05-15");

            expect(
                CalendarHelper.isPreviousMonthWithinRange(prevMonth, minDate)
            ).toBe(false);
            expect(
                CalendarHelper.isPreviousMonthWithinRange(currentMonth, minDate)
            ).toBe(false);
            expect(
                CalendarHelper.isPreviousMonthWithinRange(nextMonth, minDate)
            ).toBe(true);
        });
    });

    describe("isPreviousYearWithinRange", () => {
        it("should return true if the previous year of date is within minDate", () => {
            const prevYear = dayjs("2022-12-31");
            const currentYear = dayjs("2023-01-01");
            const nextYear = dayjs("2024-01-01");
            const minDate = dayjs("2023-05-15");

            expect(
                CalendarHelper.isPreviousYearWithinRange(prevYear, minDate)
            ).toBe(false);
            expect(
                CalendarHelper.isPreviousYearWithinRange(currentYear, minDate)
            ).toBe(false);
            expect(
                CalendarHelper.isPreviousYearWithinRange(nextYear, minDate)
            ).toBe(true);
        });
    });

    describe("isPreviousDecadeWithinRange", () => {
        it("should return true if the previous decade of date is within minDate", () => {
            const prevDecade = dayjs("2018-12-31");
            const currentDecade = dayjs("2019-05-15");
            const nextDecade = dayjs("2031-01-01");
            const minDate = dayjs("2024-05-15");

            expect(
                CalendarHelper.isPreviousDecadeWithinRange(prevDecade, minDate)
            ).toBe(false);
            expect(
                CalendarHelper.isPreviousDecadeWithinRange(
                    currentDecade,
                    minDate
                )
            ).toBe(false);
            expect(
                CalendarHelper.isPreviousDecadeWithinRange(nextDecade, minDate)
            ).toBe(true);
        });
    });

    describe("isNextMonthWithinRange", () => {
        it("should return true if the next month of date is within maxDate", () => {
            const prevMonth = dayjs("2023-04-15");
            const currentMonth = dayjs("2023-05-01");
            const nextMonth = dayjs("2023-06-15");
            const maxDate = dayjs("2023-05-15");

            expect(
                CalendarHelper.isNextMonthWithinRange(prevMonth, maxDate)
            ).toBe(true);
            expect(
                CalendarHelper.isNextMonthWithinRange(currentMonth, maxDate)
            ).toBe(false);
            expect(
                CalendarHelper.isNextMonthWithinRange(nextMonth, maxDate)
            ).toBe(false);
        });
    });

    describe("isNextYearWithinRange", () => {
        it("should return true if the next year of date is within maxDate", () => {
            const prevYear = dayjs("2022-12-31");
            const currentYear = dayjs("2023-12-31");
            const nextYear = dayjs("2024-01-01");
            const maxDate = dayjs("2023-05-15");

            expect(
                CalendarHelper.isNextYearWithinRange(prevYear, maxDate)
            ).toBe(true);
            expect(
                CalendarHelper.isNextYearWithinRange(currentYear, maxDate)
            ).toBe(false);
            expect(
                CalendarHelper.isNextYearWithinRange(nextYear, maxDate)
            ).toBe(false);
        });
    });

    describe("isNextDecadeWithinRange", () => {
        it("should return true if the next decade of date is within maxDate", () => {
            const prevDecade = dayjs("2018-12-31");
            const currentDecade = dayjs("2030-05-15");
            const nextDecade = dayjs("2031-01-01");
            const maxDate = dayjs("2024-05-15");

            expect(
                CalendarHelper.isNextDecadeWithinRange(prevDecade, maxDate)
            ).toBe(true);
            expect(
                CalendarHelper.isNextDecadeWithinRange(currentDecade, maxDate)
            ).toBe(false);
            expect(
                CalendarHelper.isNextDecadeWithinRange(nextDecade, maxDate)
            ).toBe(false);
        });
    });
});

// =============================================================================
// TEST HELPER
// =============================================================================
function containsDate(dates: Dayjs[], expectedDate: string) {
    const formattedDates = dates.map((day) => day.format("YYYY-MM-DD"));
    return formattedDates.includes(expectedDate);
}
