import dayjs, { Dayjs } from "dayjs";

export namespace DateInputHelper {
    export const validate = (beginDate: string, afterDate: string): boolean => {
        let pass = false;

        if (!beginDate.length || !afterDate.length) return true;

        if (dayjs(beginDate).isBefore(afterDate)) {
            pass = true;
        }

        if (dayjs(beginDate).isAfter(afterDate)) {
            pass = false;

            return pass;
        }

        return pass;
    };

    export const sleep = (ms) =>
        new Promise((resolve) => setTimeout(resolve, ms));
}
