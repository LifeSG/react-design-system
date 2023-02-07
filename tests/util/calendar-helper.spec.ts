import dayjs from "dayjs";
import { CalendarHelper } from "../../src/util/calendar-helper";

describe("CalendarHelper", () => {
    describe("generateDay", () => {
        it("should receive dayjs format value ", () => {
            const dayjsObject = dayjs();

            expect(CalendarHelper.generateDay(dayjsObject)).toBeTruthy();
        });
    });

    describe("generateMonth", () => {
        it("should receive twelve value in array", () => {
            const dayjsObject = dayjs();
            const correctLength = 12;

            expect(CalendarHelper.generateMonth(dayjsObject).length).toBe(
                correctLength
            );
        });
    });

    describe("generateDecadeYear", () => {
        it("should receive twelve value in array", () => {
            const dayjsObject = dayjs();
            const correctLength = 12;

            expect(
                CalendarHelper.generateDecadeOfYear(dayjsObject).length
            ).toBe(correctLength);
        });

        it("should return 2019 for start decade of year", () => {
            const correctStarYear = 2019;
            const date = dayjs("2023-01-01");

            const arrayDate = CalendarHelper.generateDecadeOfYear(date);
            const result = +arrayDate[0].format("YYYY");

            expect(result).toEqual(correctStarYear);
        });

        it("should return 2030 for last decade of year", () => {
            const correctEndYear = 2030;
            const date = dayjs("2023-01-01");

            const arrayDate = CalendarHelper.generateDecadeOfYear(date);

            const result = +arrayDate[arrayDate.length - 1].format("YYYY");

            expect(result).toEqual(correctEndYear);
        });
    });
});
