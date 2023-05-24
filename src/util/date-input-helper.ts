import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export namespace DateInputHelper {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD

    export const isDateDisabled = (
        val: string | undefined,
        props: { disabledDates?: string[]; between?: [string, string] }
    ): boolean => {
        const { disabledDates, between } = props;
        if (
            disabledDates &&
            disabledDates.length &&
            disabledDates.includes(val)
        ) {
            return true;
        }

        if (between && between.length === 2) {
            const [min, max] = between;
            if (!min || !max) {
                console.warn('"between" prop is invalid');
                return true;
            }

            if (!dayjs(val).isBetween(min, max, "day", "[]")) {
                return true;
            }
        }

        return false;
    };

    export const validate = (
        startDate: string | undefined,
        endDate: string | undefined,
        disabledDates?: string[] | undefined,
        between?: string[] | undefined
    ): boolean => {
        if (!startDate || !endDate) {
            return false;
        }

        if (dayjs(startDate).isAfter(endDate)) {
            return false;
        }

        if (
            disabledDates &&
            disabledDates.length &&
            disabledDates.some((value) => [startDate, endDate].includes(value))
        ) {
            return false;
        }

        if (between && between.length) {
            if (
                ![startDate, endDate].every((selectedDate) =>
                    dayjs(selectedDate).isBetween(
                        between[0],
                        between[1],
                        "day",
                        "[]"
                    )
                )
            ) {
                return false;
            }

            if (!between.every((value) => dateFormat.test(value))) {
                return false;
            }
        }

        return true;
    };

    export const validateSingle = (
        value: string,
        disabledDates?: string[] | undefined,
        between?: string[] | undefined
    ) => {
        if (value.length === 0) {
            return false;
        }

        if (
            disabledDates &&
            disabledDates.length &&
            disabledDates.some((disabledDate) => value === disabledDate)
        ) {
            return false;
        }

        if (
            between &&
            between.length &&
            !dayjs(value).isBetween(between[0], between[1], "day", "[]")
        ) {
            if (!dayjs(value).isBetween(between[0], between[1], "day", "[]")) {
                return false;
            }

            if (!between.every((value) => dateFormat.test(value))) {
                return false;
            }
        }

        return true;
    };

    export const getFormattedRawValue = (
        startValue: string,
        endValue?: string
    ): {
        start: string[];
        end: string[] | undefined;
    } => {
        const delimiter = "-";
        const [year, month, day] = startValue.split(delimiter);

        const start = [day, month, year];

        let end = undefined;
        if (endValue) {
            const [endYear, endMonth, endDay] = endValue.split(delimiter);
            end = [endDay, endMonth, endYear];
        }

        return {
            start,
            end,
        };
    };

    export const sleep = (ms: number, controller: AbortController) =>
        new Promise((resolve) => {
            const timeoutId = setTimeout(resolve, ms);

            controller.signal.addEventListener("abort", () => {
                clearTimeout(timeoutId);
            });
        });
}
