import dayjs from "dayjs";

export namespace DateInputHelper {
    export const validate = (beginDate: string, afterDate: string): boolean => {
        let pass = false;

        if (!beginDate.length || !afterDate.length) return false;

        if (dayjs(beginDate).isAfter(afterDate)) {
            pass = false;

            return pass;
        }

        if (dayjs(afterDate).isBefore(beginDate)) {
            pass = false;

            return pass;
        }

        if (dayjs(beginDate).isBefore(afterDate)) {
            pass = true;
        }

        if (dayjs(afterDate).isAfter(afterDate)) {
            pass = true;
        }

        return pass;
    };

    export const sleep = (ms) =>
        new Promise((resolve) => setTimeout(resolve, ms));
}
