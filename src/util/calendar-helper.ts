import dayjs, { Dayjs } from "dayjs";

export const generateCalendar = (calendarDate: Dayjs) => {
    const firstDayOfTheMonth = calendarDate.clone().startOf("month");

    const firstDayOfFirstWeekOfMonth =
        dayjs(firstDayOfTheMonth).startOf("week");

    const generateFirstDayOfEachWeek = (day: Dayjs): Dayjs[] => {
        const dates: Dayjs[] = [day];

        for (let i = 1; i < 6; i++) {
            const date = day.clone().add(i, "week");
            dates.push(date);
        }

        return dates;
    };

    const generateWeek = (day: Dayjs): Dayjs[] => {
        const dates: Dayjs[] = [];

        for (let i = 0; i < 7; i++) {
            const date = day.clone().add(i, "day");
            dates.push(date);
        }

        return dates;
    };

    const firstDayOfEachWeek = generateFirstDayOfEachWeek(
        firstDayOfFirstWeekOfMonth
    );

    return firstDayOfEachWeek.map((date) => generateWeek(date));
};
