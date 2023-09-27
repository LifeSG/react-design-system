import dayjs from "dayjs";

export namespace DateInputHelper {
    export const isDateDisabled = (
        val: string | undefined,
        props: { disabledDates?: string[]; minDate?: string; maxDate?: string }
    ): boolean => {
        const { disabledDates, minDate, maxDate } = props;
        if (
            disabledDates &&
            disabledDates.length &&
            disabledDates.includes(val)
        ) {
            return true;
        }

        if (minDate) {
            if (dayjs(val).isBefore(minDate, "day")) {
                return true;
            }
        }

        if (maxDate) {
            if (dayjs(val).isAfter(maxDate, "day")) {
                return true;
            }
        }

        return false;
    };

    export const sanitizeInput = (date: string): string => {
        if (date) {
            const day = dayjs(date);
            if (day.isValid()) {
                return date;
            }
        }
        return "";
    };
}
