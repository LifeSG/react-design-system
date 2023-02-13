import dayjs from "dayjs";
import { CalendarHelper } from "../../src/util/calendar-helper";

describe("CalendarHelper", () => {
    describe("generateDays", () => {
        it("should receive dayjs format value ", () => {
            const dayjsObject = dayjs();

            expect(CalendarHelper.generateDays(dayjsObject)).toBeTruthy();
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
            const dayjsObject = dayjs();
            const correctLength = 12;

            expect(CalendarHelper.generateMonths(dayjsObject).length).toBe(
                correctLength
            );
        });
    });

    describe("generateDecadeOfYears", () => {
        it("should receive twelve value in array", () => {
            const dayjsObject = dayjs();
            const correctLength = 12;

            expect(
                CalendarHelper.generateDecadeOfYears(dayjsObject).length
            ).toBe(correctLength);
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
});
