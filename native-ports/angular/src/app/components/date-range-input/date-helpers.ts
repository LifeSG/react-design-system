import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export { dayjs, Dayjs };

export function toDayjs(date: string | undefined): Dayjs {
    return date ? dayjs(date) : dayjs();
}

export function sanitizeInput(date: string | undefined): string {
    if (!date) return "";
    const match = date.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);
    if (!match) return "";
    const [, year, month, day] = match;
    if (year.length <= 2 || parseInt(year, 10) < 100) return "";
    const padded = `${year.padStart(4, "0")}-${month.padStart(
        2,
        "0"
    )}-${day.padStart(2, "0")}`;
    return dayjs(padded, "YYYY-MM-DD", true).isValid() ? padded : "";
}

export function isDateDisabled(
    val: string | undefined,
    props: { disabledDates?: string[]; minDate?: string; maxDate?: string }
): boolean {
    if (!val) return false;
    const { disabledDates, minDate, maxDate } = props;
    if (disabledDates?.length && disabledDates.includes(val)) return true;
    if (minDate && dayjs(val).isBefore(minDate, "day")) return true;
    if (maxDate && dayjs(val).isAfter(maxDate, "day")) return true;
    return false;
}

export function padValue(val: string): string {
    if (val.length === 1) return `0${val}`;
    return val;
}

export function generateDays(calendarDate: Dayjs): Dayjs[][] {
    const firstDayOfMonth = calendarDate.startOf("month");
    const firstDayOfFirstWeek = firstDayOfMonth.startOf("week");
    const weeks: Dayjs[][] = [];
    for (let w = 0; w < 6; w++) {
        const week: Dayjs[] = [];
        for (let d = 0; d < 7; d++) {
            week.push(firstDayOfFirstWeek.add(w * 7 + d, "day"));
        }
        weeks.push(week);
    }
    return weeks;
}

export function generateMonths(calendarDate: Dayjs): Dayjs[] {
    const months: Dayjs[] = [];
    for (let i = 0; i < 12; i++) {
        months.push(calendarDate.month(i));
    }
    return months;
}

export function generateDecadeOfYears(calendarDate: Dayjs): Dayjs[] {
    const year = calendarDate.year();
    const decade = Math.floor(year / 10) * 10;
    const base = calendarDate.year(decade);
    const years = [base.subtract(1, "year"), base];
    for (let i = 1; i < 11; i++) {
        years.push(base.add(i, "year"));
    }
    return years;
}

export function isWithinRange(
    day: Dayjs,
    minDate?: Dayjs,
    maxDate?: Dayjs,
    unit: dayjs.OpUnitType = "day"
): boolean {
    if (!minDate && !maxDate) return true;
    if (minDate && maxDate) return day.isBetween(minDate, maxDate, unit, "[]");
    if (minDate) return day.isSameOrAfter(minDate, unit);
    return day.isSameOrBefore(maxDate!, unit);
}

export function isDisabledDay(
    day: Dayjs,
    disabledDates?: string[],
    minDate?: string,
    maxDate?: string
): boolean {
    const inRange = isWithinRange(
        day,
        minDate ? dayjs(minDate) : undefined,
        maxDate ? dayjs(maxDate) : undefined
    );
    const isDisabledDate =
        disabledDates && disabledDates.includes(day.format("YYYY-MM-DD"));
    return !inRange || !!isDisabledDate;
}
