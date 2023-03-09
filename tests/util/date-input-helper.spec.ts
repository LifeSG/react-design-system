import { DateInputHelper } from "../../src/util/date-input-helper";

describe("DateInputHelper", () => {
    describe("validate", () => {
        it("should falsy if lost missed another date value", () => {
            const beginDate = "2023-03-01";
            const afterDate = "";

            const result = DateInputHelper.validate(beginDate, afterDate);

            expect(result).toBeFalsy();
        });

        it("should falsy if exist after date only", () => {
            const beginDate = "";
            const afterDate = "2023-03-15";

            const result = DateInputHelper.validate(beginDate, afterDate);

            expect(result).toBeFalsy();
        });

        it("should validate the begin date and after date", () => {
            const beginDate = "2023-03-01";
            const afterDate = "2023-03-25";

            const resultTruthy = DateInputHelper.validate(beginDate, afterDate);
            const resultFalsy = DateInputHelper.validate(afterDate, beginDate);

            expect(resultTruthy).toBeTruthy();
            expect(resultFalsy).toBeFalsy();
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
            DateInputHelper.sleep(100).then(spy);

            jest.advanceTimersByTime(20);
            await Promise.resolve();
            expect(spy).not.toHaveBeenCalled();

            jest.advanceTimersByTime(100);
            await Promise.resolve();
            expect(spy).toHaveBeenCalled();
        });
    });
});
