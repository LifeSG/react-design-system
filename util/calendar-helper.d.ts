import { Dayjs } from "dayjs";
export declare namespace CalendarHelper {
    const generateDays: (calendarDate: Dayjs) => Dayjs[][];
    const generateMonths: (calendarDate: Dayjs) => Dayjs[];
    const generateDecadeOfYears: (calendarDate: Dayjs) => Dayjs[];
    const getStartEndDecade: (calendarDate: Dayjs) => {
        beginDecade: number;
        endDecade: number;
    };
}
