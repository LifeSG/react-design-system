import dayjs, { Dayjs } from "dayjs";

export namespace CalendarHelper {
    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    export const generateDays = (calendarDate: Dayjs): Dayjs[][] => {
        const firstDayOfTheMonth = calendarDate.startOf("month");

        const firstDayOfFirstWeekOfMonth =
            dayjs(firstDayOfTheMonth).startOf("week");

        const firstDayOfEachWeek = generateFirstDayOfEachWeek(
            firstDayOfFirstWeekOfMonth
        );

        return firstDayOfEachWeek.map((date) => generateWeek(date));
    };

    export const generateMonths = (
        calendarDate: Dayjs,
        selectedStartDate: string
    ): Dayjs[] => {
        let monthCalendarValue = calendarDate;
        const months: Dayjs[] = [];

        if (selectedStartDate) {
            const [yyyy, , dd] = selectedStartDate.split("-");
            const month = calendarDate.month();

            monthCalendarValue = dayjs(`${yyyy}-${month + 1}-${dd}`);
        }

        for (let i = 0; i < 12; i++) {
            const monthForSelectedDay = monthCalendarValue.month(i);
            months.push(dayjs(monthForSelectedDay));
        }

        return months;
    };

    export const generateDecadeOfYears = (
        calendarDate: Dayjs,
        selectedStartDate: string
    ): Dayjs[] => {
        let yearCalendarValue = calendarDate;

        const year = yearCalendarValue.year();
        const decade = Math.floor(year / 10) * 10;

        if (selectedStartDate) {
            const [, mm, dd] = selectedStartDate.split("-");
            yearCalendarValue = dayjs(`${year}-${mm}-${dd}`);
        }

        const base = yearCalendarValue.year(decade);
        const prev = base.subtract(1, "year");

        const years: Dayjs[] = [prev, base];

        for (let i = 1; i < 11; i++) {
            years.push(base.add(i, "year"));
        }

        return years;
    };

    export const getStartEndDecade = (calendarDate: Dayjs) => {
        const beginDecade = Math.floor(+calendarDate.format("YYYY") / 10) * 10;
        const endDecade = +dayjs(`${beginDecade + 9}-01-01`).format("YYYY");

        return {
            beginDecade,
            endDecade,
        };
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
