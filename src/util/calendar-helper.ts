import dayjs, { Dayjs } from "dayjs";

export namespace CalendarHelper {
    export const generateDay = (calendarDate: Dayjs) => {
        const firstDayOfTheMonth = calendarDate.startOf("month");

        const firstDayOfFirstWeekOfMonth =
            dayjs(firstDayOfTheMonth).startOf("week");

        const firstDayOfEachWeek = generateFirstDayOfEachWeek(
            firstDayOfFirstWeekOfMonth
        );

        return firstDayOfEachWeek.map((date) => generateWeek(date));
    };

    export const generateMonth = (calendarDate: Dayjs) => {
        const months: Dayjs[] = [];

        const [yyyy, , dd] = calendarDate.format("YYYY-MM-DD").split("-");

        for (let i = 0; i < 12; i++) {
            let month: Dayjs;
            month = dayjs(calendarDate).month(i);
            const dayInMonth: number = month.daysInMonth();

            if (+dd > dayInMonth) {
                // get last day of the month
                const mmmm = month.format("MMMM");
                month = dayjs(`${yyyy}-${mmmm}-${dayInMonth}`);
            }

            months.push(dayjs(month));
        }

        return months;
    };

    export const generateDecadeOfYear = (calendarDate: Dayjs) => {
        const [yyyy, mm, dd] = calendarDate.format("YYYY-MM-DD").split("-");

        const decade = Math.floor(+yyyy / 10) * 10;
        const years: Dayjs[] = [];

        for (let i = 0; i <= 10; i++) {
            let year: Dayjs;

            if (i === 0) {
                year = dayjs(`${decade}-${mm}-${dd}`).subtract(1, "year");

                years.push(year, dayjs(`${decade}-${mm}-${dd}`));
            }

            if (i !== 0) {
                year = dayjs(`${decade}-${mm}-${dd}`).add(i, "year");
                years.push(year);
            }
        }

        return years;
    };
}

const generateFirstDayOfEachWeek = (day: Dayjs): Dayjs[] => {
    const dates: Dayjs[] = [day];

    for (let i = 1; i < 6; i++) {
        const date = day.add(i, "week");
        dates.push(date);
    }

    return dates;
};

const generateWeek = (day: Dayjs): Dayjs[] => {
    const dates: Dayjs[] = [];

    for (let i = 0; i < 7; i++) {
        const date = day.add(i, "day");
        dates.push(date);
    }

    return dates;
};
