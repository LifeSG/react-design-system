import { DateInputHelper } from "../../src/util/date-input-helper";

describe("DateInputHelper", () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("26 Oct 2023 12:00:00 GMT").getTime());
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    describe("isDateDisabled", () => {
        it("should return false when no dates are disabled", () => {
            const date = "2023-04-01";

            const result = DateInputHelper.isDateDisabled(date, {});

            expect(result).toBe(false);
        });

        it("should return false when date is not disabled", () => {
            const date = "2023-04-01";
            const disabledDates = ["2023-03-31", "2023-04-02"];

            const result = DateInputHelper.isDateDisabled(date, {
                disabledDates,
            });

            expect(result).toBe(false);
        });

        it("should return true when date is disabled", () => {
            const date = "2023-04-01";
            const disabledDates = ["2023-04-01"];

            const result = DateInputHelper.isDateDisabled(date, {
                disabledDates,
            });

            expect(result).toBe(true);
        });

        it("should return false when date is within range (inclusive check)", () => {
            const minDate = "2023-01-01";
            const maxDate = "2023-02-01";

            const sameAsMaxCheck = DateInputHelper.isDateDisabled(maxDate, {
                minDate,
                maxDate,
            });
            const sameAsMinCheck = DateInputHelper.isDateDisabled(minDate, {
                minDate,
                maxDate,
            });

            expect(sameAsMaxCheck).toBe(false);
            expect(sameAsMinCheck).toBe(false);
        });

        it("should return true when date is out of range", () => {
            const minDate = "2023-01-01";
            const maxDate = "2023-02-01";

            const isBeforeRange = DateInputHelper.isDateDisabled("2022-12-31", {
                minDate,
                maxDate,
            });
            const isAfterRange = DateInputHelper.isDateDisabled("2023-02-02", {
                minDate,
                maxDate,
            });

            expect(isBeforeRange).toBe(true);
            expect(isAfterRange).toBe(true);
        });

        it("should return true when date is before minDate", () => {
            const date = "2023-03-31";
            const minDate = "2023-04-01";

            const result = DateInputHelper.isDateDisabled(date, {
                minDate,
            });

            expect(result).toBe(true);
        });

        it("should return true when date is after maxRange", () => {
            const date = "2023-04-02";
            const maxDate = "2023-04-01";

            const result = DateInputHelper.isDateDisabled(date, {
                maxDate,
            });

            expect(result).toBe(true);
        });
    });
});
