import { DateInputHelper } from "../../src/util/date-input-helper";

describe("DateInputHelper", () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("26 Oct 2023 12:00:00 GMT"));
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

    describe("sanitizeInput", () => {
        it("should return empty string for undefined input", () => {
            expect(DateInputHelper.sanitizeInput(undefined)).toBe("");
        });

        it("should return empty string for empty string input", () => {
            expect(DateInputHelper.sanitizeInput("")).toBe("");
        });

        it("should normalize and return valid 4-digit year dates", () => {
            expect(DateInputHelper.sanitizeInput("2025-12-22")).toBe(
                "2025-12-22"
            );
            expect(DateInputHelper.sanitizeInput("1925-01-15")).toBe(
                "1925-01-15"
            );
        });

        it("should pad 3-digit years to 4 digits", () => {
            expect(DateInputHelper.sanitizeInput("925-12-22")).toBe(
                "0925-12-22"
            );
            expect(DateInputHelper.sanitizeInput("100-01-01")).toBe(
                "0100-01-01"
            );
        });

        it("should pad single-digit months and days", () => {
            expect(DateInputHelper.sanitizeInput("2025-1-5")).toBe(
                "2025-01-05"
            );
            expect(DateInputHelper.sanitizeInput("925-6-9")).toBe("0925-06-09");
        });

        it("should reject years starting with '00' (years < 100)", () => {
            expect(DateInputHelper.sanitizeInput("0099-12-22")).toBe("");
            expect(DateInputHelper.sanitizeInput("0025-06-15")).toBe("");
            expect(DateInputHelper.sanitizeInput("0001-01-01")).toBe("");
        });

        it("should reject 2-digit years", () => {
            expect(DateInputHelper.sanitizeInput("99-12-22")).toBe("");
            expect(DateInputHelper.sanitizeInput("25-06-15")).toBe("");
        });

        it("should reject invalid date formats", () => {
            expect(DateInputHelper.sanitizeInput("2025/12/22")).toBe(""); // Wrong separator
            expect(DateInputHelper.sanitizeInput("22-12-2025")).toBe(""); // Wrong order
            expect(DateInputHelper.sanitizeInput("invalid")).toBe("");
            expect(DateInputHelper.sanitizeInput("2025-12")).toBe(""); // Missing day
        });
    });
});
