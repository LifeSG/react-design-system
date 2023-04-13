import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { INVALID_VALUE } from "../date-input/stand-alone-input";
import { ChangeValueTypes, RawInputValues } from "../date-input";

dayjs.extend(isBetween);

export namespace DateInputHelper {
    export const validate = (
        startDate: string,
        endDate: string,
        disabledDates?: string[] | undefined,
        between?: string[] | undefined
    ): boolean => {
        let pass = false;

        if (startDate.length === 0 || endDate.length === 0) return false;

        if (dayjs(startDate).isBefore(endDate)) {
            pass = true;
        }

        if (disabledDates && disabledDates.length) {
            pass = !disabledDates.some((value) =>
                [startDate, endDate].includes(value)
            );

            if (!pass) return false;
        }

        if (between && between.length) {
            const result = [startDate, endDate].map((selectedDate) =>
                dayjs(selectedDate).isBetween(
                    between[0],
                    between[1],
                    "day",
                    "[]"
                )
            );

            pass = result.every(Boolean);

            if (!pass) return false;
        }

        if (dayjs(startDate).isAfter(endDate)) {
            pass = false;

            return pass;
        }

        return pass;
    };

    export const singleValidation = (
        value: string,
        disabledDates?: string[] | undefined,
        between?: string[] | undefined
    ) => {
        let pass = true;

        if (value.length === 0) return false;

        if (disabledDates && disabledDates.length) {
            pass = !disabledDates.some(
                (disabledDate) => value === disabledDate
            );
            if (!pass) return false;
        }

        if (between && between.length) {
            pass = dayjs(value).isBetween(between[0], between[1], "day", "[]");

            if (!pass) return false;
        }

        return pass;
    };

    export const getFormattedRawValue = (
        values: ChangeValueTypes
    ): RawInputValues => {
        const returnValue = Object.keys(values).reduce((acc, key) => {
            if (acc[key] == null) acc[key] = {};

            if (!values[key]) {
                acc[key] = { year: "", month: "", day: "" };

                return acc;
            }

            if (values[key] === INVALID_VALUE) {
                acc[key] = {
                    year: INVALID_VALUE,
                    month: INVALID_VALUE,
                    day: INVALID_VALUE,
                };

                return acc;
            }

            const [year, month, day] = values[key].split("-");

            acc[key] = {
                year,
                month,
                day,
            };

            return acc;
        }, {});

        return returnValue;
    };

    export const sleep = (ms: number, controller: AbortController) =>
        new Promise((resolve) => {
            const timeoutId = setTimeout(resolve, ms);

            controller.signal.addEventListener("abort", () => {
                clearTimeout(timeoutId);
            });
        });
}
