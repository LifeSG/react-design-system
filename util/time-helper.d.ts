export type TimeFormat = "12hr" | "24hr";
export declare enum EPeriod {
    AM = "AM",
    PM = "PM"
}
export interface TimeValues {
    hour: string;
    minute: string;
    period: EPeriod;
}
export declare namespace TimeHelper {
    const getTimeValues: (format: TimeFormat, value?: string) => TimeValues;
    const updateMinutes: (valueString: string, direction: "add" | "minus") => string;
    const updateHours: (valueString: string, direction: "add" | "minus") => string;
    const convertTo24HourFormat: (values: TimeValues) => string;
    const convertHourTo12HourFormat: (hourValue: string) => string;
    const formatDisplayValue: (value: string, format: TimeFormat) => string;
}
