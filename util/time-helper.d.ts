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
    /**
     * Rounds time to the nearest hour, e.g 6:30 will be clamped to 6:00
     * @param time the input time in HH:mm format
     * @param toNextHour to clamp to next hour instead, e.g. 6:30 will be clamped to 7:00
     * @returns
     */
    const roundToNearestHour: (time: string, toNextHour?: boolean) => string;
    const generateHourlyIntervals: (startTime: string, endTime: string, generatedFormat?: string) => string[];
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
