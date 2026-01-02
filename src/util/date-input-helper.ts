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
            const normalized = normalizeDateString(date);

            const day = dayjs(normalized, "YYYY-MM-DD", true);

            if (day.isValid()) {
                return normalized;
            }
        }
        return "";
    };

    const normalizeDateString = (dateString: string): string => {
        const match = dateString.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);

        if (!match) {
            return "";
        }

        const [, year, month, day] = match;

        // Reject if year would be < 100 after padding
        if (year.length <= 2 || parseInt(year, 10) < 100) {
            return "";
        }

        // Pad year to 4 digits with leading zeros
        const paddedYear = year.padStart(4, "0");
        const paddedMonth = month.padStart(2, "0");
        const paddedDay = day.padStart(2, "0");

        return `${paddedYear}-${paddedMonth}-${paddedDay}`;
    };
}
