import dayjs from "dayjs";

export interface DisabledDateConfig {
    disabledDates?: string[];
    minDate?: string;
    maxDate?: string;
}

export function isDateDisabled(
    val: string | undefined,
    config: DisabledDateConfig
): boolean {
    const { disabledDates, minDate, maxDate } = config;

    if (val && disabledDates?.length && disabledDates.includes(val)) {
        return true;
    }
    if (minDate && dayjs(val).isBefore(minDate, "day")) {
        return true;
    }
    if (maxDate && dayjs(val).isAfter(maxDate, "day")) {
        return true;
    }
    return false;
}

export function sanitizeInput(date: string | undefined): string {
    if (date) {
        const normalized = normalizeDateString(date);
        const day = dayjs(normalized, "YYYY-MM-DD", true);
        if (day.isValid()) {
            return normalized;
        }
    }
    return "";
}

function normalizeDateString(dateString: string): string {
    const match = dateString.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);
    if (!match) return "";

    const [, year, month, day] = match;
    if (year.length <= 2 || parseInt(year, 10) < 100) return "";

    return `${year.padStart(4, "0")}-${month.padStart(2, "0")}-${day.padStart(
        2,
        "0"
    )}`;
}
