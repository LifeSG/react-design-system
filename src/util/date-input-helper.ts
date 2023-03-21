import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { INVALID_VALUE } from "../date-input/stand-alone-input";
import { ChangeValueTypes, RawInputValues } from "../date-input";

dayjs.extend(isBetween);

export namespace DateInputHelper {
    export const validate = (
        beginDate: string,
        afterDate: string,
        disabledDates?: string[] | undefined,
        between?: string[]
    ): boolean => {
        let pass = false;

        if (!beginDate?.length || !afterDate?.length) return false;

        if (dayjs(beginDate).isBefore(afterDate)) {
            pass = true;
        }

        if (dayjs(afterDate).isAfter(beginDate)) {
            pass = true;
        }

        if (disabledDates && disabledDates.length) {
            pass = !disabledDates.some((value) =>
                [beginDate, afterDate].includes(value)
            );
        }

        if (between && between.length) {
            const result = [beginDate, afterDate].map((selectedDate) =>
                dayjs(selectedDate).isBetween(
                    between[0],
                    between[1],
                    "day",
                    "[]"
                )
            );

            pass = result.every(Boolean);
        }

        if (dayjs(beginDate).isAfter(afterDate)) {
            pass = false;

            return pass;
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
