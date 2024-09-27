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
    const toMinutesSeconds: (_seconds: number) => {
        minutes: number;
        seconds: number;
    };
    const to24Hour: (time: string) => string;
    const generateTimings: (interval: number, format?: TimeFormat, startTime?: string | undefined, endTime?: string | undefined) => string[];
    const parseInput: (input: string, format?: TimeFormat) => string | undefined;
    const findClosestFlooredTime: (inputTime: string, timeArray: string[]) => string;
    const timeToMinutes: (time: string) => number;
}
