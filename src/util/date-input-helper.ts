import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

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
            if (dayjs(val).isBefore(minDate)) {
                return true;
            }
        }

        if (maxDate) {
            if (dayjs(val).isAfter(maxDate)) {
                return true;
            }
        }

        return false;
    };
}
