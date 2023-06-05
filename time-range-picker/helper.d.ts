import { TimeRangePickerFormat } from "./types";
export type Period = "am" | "pm";
export interface TimeValues {
    hour: string;
    minute: string;
    period: Period;
}
export declare namespace TimeRangePickerHelper {
    const getTimeValues: (format: TimeRangePickerFormat, value?: string) => TimeValues;
    const updateMinutes: (valueString: string, direction: "add" | "minus") => string;
    const updateHours: (valueString: string, direction: "add" | "minus") => string;
    const convertTo24HourFormat: (values: TimeValues) => string;
    const convertHourTo12HourFormat: (hourValue: string) => string;
    const formatValue: (value: string, format: TimeRangePickerFormat) => string;
}
