import dayjs from "dayjs";
import { CalendarHelper } from "../../src/util/calendar-helper";
import slotsData from "./slots-data.json";
import slotsDataMin from "./slots-data-minimum.json";
export const getSlots = () => {
    const [weekdays] = CalendarHelper.generateDaysForCurrentWeek(dayjs());
    const slots = {};
    let i = 0;
    for (const key in slotsData) {
        slots[weekdays[i].format("YYYY-MM-DD")] = slotsData[key];
        i++;
    }
    return slots;
};

export const getSlotsMin = () => {
    const [weekdays] = CalendarHelper.generateDaysForCurrentWeek(dayjs());
    const slots = {};
    let i = 0;
    for (const key in slotsDataMin) {
        slots[weekdays[i].format("YYYY-MM-DD")] = slotsDataMin[key];
        i++;
    }
    return slots;
};
