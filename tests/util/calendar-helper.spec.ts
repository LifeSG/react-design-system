import dayjs from "dayjs";
import { CalendarHelper } from "../../src/util/calendar-helper";

describe("CalendarHelper", () => {
    describe("generateDays", () => {
        it("should receive dayjs format value ", () => {
            const dayjsObject = dayjs("2023-01-10");

            expect(CalendarHelper.generateDays(dayjsObject)).toMatchSnapshot();
        });

        it("should exist 29 day in Feb on leap year", () => {
            const isExist = "2028-02-29";
            const checkDate = dayjs("2028-02-29");

            const nestedArray = CalendarHelper.generateDays(checkDate);

            const values = nestedArray
                .map((week) => {
                    return week.map((day) => day.format("YYYY-MM-DD"));
                })
                .flat();

            const result = values.includes(isExist);

            expect(result).toBeTruthy();
        });

        it("should not exist 29 day in Feb in non leap year", () => {
            const isExist = "2027-02-29";
            const checkDate = dayjs("2027-02-29");

            const nestedArray = CalendarHelper.generateDays(checkDate);

            const values = nestedArray
                .map((week) => {
                    return week.map((day) => day.format("YYYY-MM-DD"));
                })
                .flat();

            const result = values.includes(isExist);

            expect(result).toBeFalsy();
        });

        it("should exist 29 day in Feb on leap year", () => {
            const isExist = "2028-02-29";
            const checkDate = dayjs("2028-02-29");

            const nestedArray = CalendarHelper.generateDays(checkDate);

            const values = nestedArray
                .map((week) => {
                    return week.map((day) => day.format("YYYY-MM-DD"));
                })
                .flat();

            const result = values.includes(isExist);

            expect(result).toBeTruthy();
        });

        it("should not exist 29 day in Feb in non leap year", () => {
            const isExist = "2027-02-29";
            const checkDate = dayjs("2027-02-29");

            const nestedArray = CalendarHelper.generateDays(checkDate);

            const values = nestedArray
                .map((week) => {
                    return week.map((day) => day.format("YYYY-MM-DD"));
                })
                .flat();

            const result = values.includes(isExist);

            expect(result).toBeFalsy();
        });
    });

    describe("generateMonths", () => {
        it("should receive twelve value in array", () => {
            const dayjsObject = dayjs("2023-02-01");
            const correctLength = 12;

            expect(CalendarHelper.generateMonths(dayjsObject)).toHaveLength(
                correctLength
            );
        });

        it("should exist 29 day in Feb on leap year", () => {
            const date = dayjs("2024-03-31");
            const isExistDate = "2024-02-29";

            const values = CalendarHelper.generateMonths(date);
            const formatDates = values.map((v) =>
                dayjs(v).format("YYYY-MM-DD")
            );
            const isExist = formatDates.includes(isExistDate);

            expect(isExist).toBeTruthy();
        });
    });

    describe("generateDecadeOfYears", () => {
        it("should receive twelve value in array", () => {
            const dayjsObject = dayjs("2023-04-01");
            const correctLength = 12;

            expect(
                CalendarHelper.generateDecadeOfYears(dayjsObject)
            ).toHaveLength(correctLength);
        });

        it("should return 2019 for start decade of year", () => {
            const correctStarYear = 2019;
            const date = dayjs("2023-01-01");

            const arrayDate = CalendarHelper.generateDecadeOfYears(date);
            const result = +arrayDate[0].format("YYYY");

            expect(result).toEqual(correctStarYear);
        });

        it("should return 2030 for last decade of year", () => {
            const correctEndYear = 2030;
            const date = dayjs("2023-01-01");

            const arrayDate = CalendarHelper.generateDecadeOfYears(date);

            const result = +arrayDate[arrayDate.length - 1].format("YYYY");

            expect(result).toEqual(correctEndYear);
        });
    });

    describe("getStartEndDecade", () => {
        it("should return correct start year and end year in this decade ", () => {
            const startYear = 2020;
            const endYear = 2029;
            const date = dayjs("2024-01-01");

            const { beginDecade, endDecade } =
                CalendarHelper.getStartEndDecade(date);

            expect(startYear).toEqual(beginDecade);
            expect(endYear).toEqual(endDecade);
        });
    });
});
