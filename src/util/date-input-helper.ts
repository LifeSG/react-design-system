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
        if (startDate.length === 0 || endDate.length === 0) {
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

        if (
            between &&
            between.length &&
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
            return false;
        }

        return true;
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
