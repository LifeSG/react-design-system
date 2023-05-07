import { DateInputHelper } from "../../src/util/date-input-helper";

describe("DateInputHelper", () => {
    describe("range validation", () => {
        describe("validate value", () => {
            it("should return true for valid date range", () => {
                const startDate = "2023-04-01";
                const endDate = "2023-04-25";

                const result = DateInputHelper.validate(startDate, endDate);

                expect(result).toBe(true);
            });

            it("should return false if only one date is selected", () => {
                const startDate = "2023-04-01";
                const endDate = "";

                const result = DateInputHelper.validate(startDate, endDate);

                expect(result).toBe(false);
            });

            it("should return false if start date is after end date", () => {
                const startDate = "2023-04-01";
                const endDate = "2023-04-25";

                const result = DateInputHelper.validate(endDate, startDate);

                expect(result).toBe(false);
            });
        });

        describe("disabled dates", () => {
            it("should return true for valid date range", () => {
                const startDate = "2023-04-01";
                const endDate = "2023-04-25";
                const disabledDates = ["2023-04-15"];

                const result = DateInputHelper.validate(
                    startDate,
                    endDate,
                    disabledDates
                );

                expect(result).toBe(true);
            });

            it("should return false if a disabled date is selected", () => {
                const startDate = "2023-04-01";
                const endDate = "2023-04-15";
                const disabledDates = ["2023-04-15"];

                const result = DateInputHelper.validate(
                    startDate,
                    endDate,
                    disabledDates
                );

                expect(result).toBe(false);
            });
        });

        describe("between range", () => {
            it("should return true if selected dates are within restricted range", () => {
                const startDate = "2023-04-01";
                const endDate = "2023-04-15";
                const disabledDates = undefined;
                const between = ["2023-03-25", "2023-04-23"];

                const result = DateInputHelper.validate(
                    startDate,
                    endDate,
                    disabledDates,
                    between
                );

                expect(result).toBe(true);
            });

            it("should return false if start date is outside of restricted range", () => {
                const startDate = "2023-03-22";
                const endDate = "2023-04-15";
                const disabledDates = undefined;
                const between = ["2023-03-25", "2023-04-23"];

                const result = DateInputHelper.validate(
                    startDate,
                    endDate,
                    disabledDates,
                    between
                );

                expect(result).toBe(false);
            });

            it("should return false if end date is outside of restricted range", () => {
                const startDate = "2023-04-01";
                const endDate = "2023-04-27";
                const disabledDates = undefined;
                const between = ["2023-03-25", "2023-04-23"];

                const result = DateInputHelper.validate(
                    startDate,
                    endDate,
                    disabledDates,
                    between
                );

                expect(result).toBe(false);
            });

            it("should return false if between value format is not YYYY-MM-DD", () => {
                const startDate = "2023-02-12";
                const endDate = "2023-03-17";
                const disabledDates = undefined;
                const between = [undefined, "2023-04-12"];

                const result = DateInputHelper.validate(
                    startDate,
                    endDate,
                    disabledDates,
                    between
                );

                expect(result).toBe(false);
            });
        });
    });

    describe("single validation", () => {
        describe("validate value", () => {
            it("should return true if only one date is selected", () => {
                const startDate = "2023-04-01";

                const result = DateInputHelper.validateSingle(startDate);

                expect(result).toBe(true);
            });
        });

        describe("disabled dates", () => {
            it("should return true for valid date", () => {
                const startDate = "2023-04-01";
                const disabledDates = ["2023-04-15"];

                const result = DateInputHelper.validateSingle(
                    startDate,
                    disabledDates
                );

                expect(result).toBe(true);
            });

            it("should return false for a disabled date is selected", () => {
                const startDate = "2023-04-15";
                const disabledDates = ["2023-04-15"];

                const result = DateInputHelper.validateSingle(
                    startDate,
                    disabledDates
                );

                expect(result).toBe(false);
            });
        });

        describe("between range", () => {
            it("should return true if selected dates are within restricted range", () => {
                const startDate = "2023-04-01";
                const disabledDates = undefined;
                const between = ["2023-04-25", "2023-04-23"];

                const result = DateInputHelper.validateSingle(
                    startDate,
                    disabledDates,
                    between
                );

                expect(result).toBe(false);
            });

            it("should return false if start date is outside of restricted range", () => {
                const startDate = "2023-03-22";
                const disabledDates = undefined;
                const between = ["2023-04-25", "2023-04-23"];

                const result = DateInputHelper.validateSingle(
                    startDate,
                    disabledDates,
                    between
                );

                expect(result).toBe(false);
            });

            it("should return false if between value format is not YYYY-MM-DD", () => {
                const startDate = "2023-02-12";
                const disabledDates = undefined;
                const between = ["2023-04-12", undefined];

                const result = DateInputHelper.validateSingle(
                    startDate,
                    disabledDates,
                    between
                );

                expect(result).toBe(false);
            });
        });
    });

    describe("getFormattedRawValue", () => {
        it("should split each value into field object format", () => {
            const value = { start: "2023-03-10" };
            const values = { start: "2023-03-10", end: "2023-04-05" };
            const expectedFormats = {
                start: {
                    year: "2023",
                    month: "03",
                    day: "10",
                },
                end: {
                    year: "2023",
                    month: "04",
                    day: "05",
                },
            };
            const expectedFormat = {
                start: {
                    year: "2023",
                    month: "03",
                    day: "10",
                },
            };

            const result = DateInputHelper.getFormattedRawValue(value);
            const results = DateInputHelper.getFormattedRawValue(values);

            expect(result).toEqual(expect.objectContaining(expectedFormat));
            expect(results).toEqual(expect.objectContaining(expectedFormats));
        });
    });

    describe("sleep", () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });
        afterEach(() => {
            jest.useRealTimers();
        });

        it("Promise delay 100ms", async () => {
            const spy = jest.fn();
            const controller = new AbortController();

            DateInputHelper.sleep(100, controller).then(spy);

            jest.advanceTimersByTime(20);
            await Promise.resolve();
            expect(spy).not.toHaveBeenCalled();

            jest.advanceTimersByTime(100);
            await Promise.resolve();
            expect(spy).toHaveBeenCalled();
        });
    });
});
