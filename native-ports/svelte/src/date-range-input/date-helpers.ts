import type { Dayjs, OpUnitType } from "dayjs";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export function sanitizeInput(date: string | undefined): string {
    if (!date) return "";
    const normalized = normalizeDateString(date);
    if (!normalized) return "";
    const day = dayjs(normalized, "YYYY-MM-DD", true);
    return day.isValid() ? normalized : "";
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

export function isDateDisabled(
    val: string | undefined,
    props: { disabledDates?: string[]; minDate?: string; maxDate?: string }
): boolean {
    const { disabledDates, minDate, maxDate } = props;
    if (val && disabledDates?.length && disabledDates.includes(val))
        return true;
    if (minDate && dayjs(val).isBefore(minDate, "day")) return true;
    if (maxDate && dayjs(val).isAfter(maxDate, "day")) return true;
    return false;
}

export function padValue(val: string, padOnBlur = false): string {
    if (!val) return val;
    if (padOnBlur && val.length === 1) return val.padStart(2, "0");
    return val.length === 1 ? val.padStart(2, "0") : val;
}

export function generateDays(calendarDate: Dayjs): Dayjs[][] {
    const firstDayOfMonth = calendarDate.startOf("month");
    const firstDayOfFirstWeek = firstDayOfMonth.startOf("week");
    const weeks: Dayjs[][] = [];
    for (let w = 0; w < 6; w++) {
        const weekStart = firstDayOfFirstWeek.add(w, "week");
        const week: Dayjs[] = [];
        for (let d = 0; d < 7; d++) {
            week.push(weekStart.add(d, "day"));
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
    const prev = base.subtract(1, "year");
    const years = [prev, base];
    for (let i = 1; i < 11; i++) {
        years.push(base.add(i, "year"));
    }
    return years;
}

export function getStartEndDecade(calendarDate: Dayjs) {
    const beginDecade = Math.floor(calendarDate.year() / 10) * 10;
    return { beginDecade, endDecade: beginDecade + 9 };
}

export function isWithinRange(
    day: Dayjs,
    minDate?: Dayjs,
    maxDate?: Dayjs,
    unit: OpUnitType = "day"
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
    const withinRange = isWithinRange(
        day,
        minDate ? dayjs(minDate) : undefined,
        maxDate ? dayjs(maxDate) : undefined
    );
    const isDisabledDate =
        disabledDates?.includes(day.format("YYYY-MM-DD")) ?? false;
    return !withinRange || isDisabledDate;
}

export function toDayjs(value?: string): Dayjs {
    if (value) {
        const d = dayjs(value, "YYYY-MM-DD", true);
        if (d.isValid()) return d;
    }
    return dayjs();
}
