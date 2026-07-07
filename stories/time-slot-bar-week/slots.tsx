import dayjs from "dayjs";
import type { TimeSlot } from "src/time-slot-bar";
import { CalendarHelper } from "src/util/calendar-helper";

import slotsData from "./slots-data.json";
import slotsDataMin from "./slots-data-minimum.json";

export const getSlots = () => {
    const weekdays = CalendarHelper.generateDaysForCurrentWeek(dayjs());
    const slots: Record<string, TimeSlot[]> = {};
    let i = 0;
    weekdays.push(weekdays[weekdays.length - 1].add(1, "day"));
    for (const key in slotsData) {
        if (i < weekdays.length)
            slots[weekdays[i].format("YYYY-MM-DD")] = (slotsData as any)[key];
        i++;
    }
    return slots;
};

export const getSlotsMin = () => {
    const weekdays = CalendarHelper.generateDaysForCurrentWeek(dayjs());
    const slots: Record<string, TimeSlot[]> = {};
    let i = 0;
    for (const key in slotsDataMin) {
        if (i < weekdays.length)
            slots[weekdays[i].format("YYYY-MM-DD")] = (slotsDataMin as any)[
                key
            ];
        i++;
    }
    return slots;
};
