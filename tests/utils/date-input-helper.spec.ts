import { DateInputHelper } from "../../src/util/date-input-helper";

describe("DateInputHelper", () => {
    describe("validate", () => {
        it("should falsy if only exist one date in range selection", () => {
            const resultOne = DateInputHelper.validate("2023-03-01", "");
            const resultTwo = DateInputHelper.validate("", "2023-03-01");

            expect(resultOne).toBeFalsy();
            expect(resultTwo).toBeFalsy();
        });

        it("should validate the begin date and after date", () => {
            const beginDate = "2023-03-01";
            const afterDate = "2023-03-25";

            const resultTruthy = DateInputHelper.validate(beginDate, afterDate);
            const resultFalsy = DateInputHelper.validate(afterDate, beginDate);

            expect(resultTruthy).toBeTruthy();
            expect(resultFalsy).toBeFalsy();
        });

        it("should return truthy if not matching disabled dates", () => {
            const beginDate = "2023-03-01";
            const afterDate = "2023-03-15";
            const disabledDates = ["2023-03-10"];

            const result = DateInputHelper.validate(
                beginDate,
                afterDate,
                disabledDates
            );

            expect(result).toBeTruthy();
        });

        it("should return falsy if matching disabled dates", () => {
            const beginDate = "2023-03-01";
            const afterDate = "2023-03-15";
            const disabledDates = ["2023-03-15"];

            const result = DateInputHelper.validate(
                beginDate,
                afterDate,
                disabledDates
            );

            expect(result).toBeFalsy();
        });

        it("should return truthy if selected within restrict selection", () => {
            const beginDate = "2023-03-10";
            const afterDate = "2023-03-17";
            const between = ["2023-03-10", "2023-03-28"];
            const disabledDates = undefined;

            const result = DateInputHelper.validate(
                beginDate,
                afterDate,
                disabledDates,
                between
            );

            expect(result).toBeTruthy();
        });

        it("should return falsy if selected date is out of restrict selection", () => {
            const beginDate = "2023-02-12";
            const afterDate = "2023-03-17";
            const between = ["2023-03-10", "2023-03-28"];
            const disabledDates = undefined;

            const result = DateInputHelper.validate(
                beginDate,
                afterDate,
                disabledDates,
                between
            );

            expect(result).toBeFalsy();
        });

        it("should return falsy if between props are undefined", () => {
            const beginDate = "2023-02-12";
            const afterDate = "2023-03-17";
            const between = [undefined, undefined];
            const disabledDates = undefined;

            const result = DateInputHelper.validate(
                beginDate,
                afterDate,
                disabledDates,
                between
            );

            expect(result).toBeFalsy();
        });

        it("should pass if undefined in disabled date", () => {
            const beginDate = "2023-03-01";
            const afterDate = "2023-03-15";
            const disabledDates = undefined;

            const result = DateInputHelper.validate(
                beginDate,
                afterDate,
                disabledDates
            );

            expect(result).toBeTruthy();
        });
    });

    describe("single validation", () => {
        it("should return truthy if selected within restrict selection", () => {
            const value = "2023-03-10";
            const between = ["2023-03-10", "2023-03-28"];
            const disabledDates = undefined;

            const result = DateInputHelper.singleValidation(
                value,
                disabledDates,
                between
            );

            expect(result).toBeTruthy();
        });

        it("should return truthy if not matching disabled dates", () => {
            const value = "2023-03-01";
            const disabledDates = ["2023-03-10"];

            const result = DateInputHelper.singleValidation(
                value,
                disabledDates
            );

            expect(result).toBeTruthy();
        });

        it("should falsy if matching disabled dates", () => {
            const value = "2023-03-01";
            const disabledDates = ["2023-03-01"];

            const result = DateInputHelper.singleValidation(
                value,
                disabledDates
            );

            expect(result).toBeFalsy();
        });

        it("should return falsy if selected date is not between actively date", () => {
            const value = "2023-02-12";
            const between = ["2023-03-10", "2023-03-28"];
            const disabledDates = undefined;

            const result = DateInputHelper.singleValidation(
                value,
                disabledDates,
                between
            );

            expect(result).toBeFalsy();
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
