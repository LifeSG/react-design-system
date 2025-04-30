import dayjs from "dayjs";
import { StringHelper } from "./string-helper";

// =============================================================================
// INTERFACES
// =============================================================================
export type TimeFormat = "12hr" | "24hr";

export enum EPeriod {
    AM = "AM",
    PM = "PM",
}

export interface TimeValues {
    hour: string;
    minute: string;
    period: EPeriod;
}

// unexportable
interface TimeValuesPlain {
    hour: string;
    minute: string;
    period?: string;
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export namespace TimeHelper {
    /**
     * Rounds time to the nearest interval, e.g 6:30 will be clamped to 6:00 when interval = 60
     * @param time the input time in HH:mm format
     * @param toNextHour to clamp to next interval instead, e.g. 6:30 will be clamped to 7:00 when interval = 60
     * @returns the time rounded to the nearest hour in HH:mm format
     */
    export const roundToNearestInterval = (
        time: string,
        interval: number, // Interval in minutes (e.g., 15 for 15 minutes, 60 for 1 hour)
        toNextInterval?: boolean
    ): string => {
        const [hoursStr, minutesStr] = time.split(":");
        const hours = parseInt(hoursStr, 10);
        const minutes = parseInt(minutesStr, 10);

        // Handle invalid inputs
        if (isNaN(hours) || isNaN(minutes) || minutes < 0 || minutes >= 60) {
            throw new Error("Invalid time format");
        }

        // Convert the time to total minutes
        const totalMinutes = hours * 60 + minutes;
        const remainder = totalMinutes % interval;

        // Calculate the rounded total minutes
        const roundedMinutes =
            remainder === 0
                ? totalMinutes
                : toNextInterval
                ? totalMinutes + (interval - remainder)
                : totalMinutes - remainder;

        // Convert the rounded total minutes back to hours and minutes
        const roundedHours = Math.floor(roundedMinutes / 60);
        const roundedMinutesWithinHour = roundedMinutes % 60;

        // Format the result as HH:mm, allowing for hours >= 24
        const formattedHours = roundedHours.toString().padStart(2, "0");
        const formattedMinutes = roundedMinutesWithinHour
            .toString()
            .padStart(2, "0");

        return `${formattedHours}:${formattedMinutes}`;
    };

    export const generateHourlyIntervals = (
        startTime: string,
        endTime: string,
        generatedFormat = "ha"
    ) => {
        const format = "HH:mm";
        let start = dayjs(startTime, format);
        let end = dayjs(endTime, format);

        if (start.isSame(end)) {
            end = end.add(1, "day");
        }

        const intervals: string[] = [];

        while (start.isBefore(end)) {
            intervals.push(start.format(generatedFormat));
            start = start.add(1, "hour");
        }

        return intervals;
    };

    export const getTimeValues = (
        format: TimeFormat,
        value: string | undefined
    ): TimeValues => {
        // Default value
        const timeValues: TimeValues = {
            hour: "",
            minute: "",
            period: EPeriod.AM,
        };

        if (!value) return timeValues;

        try {
            if (format === "24hr") {
                const plain = convertToPlain(value, format);
                // Add minute
                timeValues.minute = StringHelper.padValue(plain.minute);

                // Determine period, and convert to 12 hour value
                const hour = parseInt(plain.hour);

                if (Math.floor(hour / 12) === 0) {
                    timeValues.period = EPeriod.AM;
                    timeValues.hour =
                        hour === 0
                            ? "12"
                            : StringHelper.padValue(hour.toString());
                } else {
                    timeValues.period = EPeriod.PM;
                    timeValues.hour =
                        hour === 12
                            ? hour.toString()
                            : StringHelper.padValue((hour - 12).toString());
                }
            } else {
                const {
                    hour,
                    minute,
                    period = "",
                } = convertToPlain(value, format);

                timeValues.hour = StringHelper.padValue(hour);
                timeValues.minute = StringHelper.padValue(minute);
                timeValues.period =
                    period.toLowerCase() === "am" ? EPeriod.AM : EPeriod.PM;
            }

            return timeValues;
        } catch (error) {
            return timeValues;
        }
    };

    export const updateMinutes = (
        valueString: string,
        direction: "add" | "minus"
    ): string => {
        const currentValue = parseInt(valueString);

        if (isNaN(currentValue)) {
            return direction === "add" ? StringHelper.padValue("0") : "55";
        }

        /**
         * We would increment or decrement by steps of 5
         * Hence from 0 to 55, there are 12 steps
         */
        const steps = 12;

        /**
         * Look for last nearest step
         * E.g. value 4 would be step 0 = 0, value 6 would be step 1 = 5
         */
        const lastNearestStep = Math.floor(currentValue / 5);

        /**
         * Getting the next step value would have to incorporate a cycle of the upper
         * and lower limits. In this case upper = 12, lower = 0.
         * If one is to increment from step 12, it would then go back to 0.
         * If one is to decrement from step 0, it would then go back to 12.
         * Reference: https://dev.to/turneremma21/circular-access-of-array-in-javascript-j52
         */
        const nextStep =
            direction === "add"
                ? lastNearestStep + 1
                : currentValue % 5 === 0
                ? lastNearestStep - 1 // if it is a value on the step, decrement one more
                : lastNearestStep; // else the last nearest step would suffice
        const newStep = ((nextStep % steps) + steps) % steps;

        return StringHelper.padValue((newStep * 5).toString());
    };

    export const updateHours = (
        valueString: string,
        direction: "add" | "minus"
    ): string => {
        const currentValue = parseInt(valueString);

        if (isNaN(currentValue)) {
            return direction === "add" ? StringHelper.padValue("1") : "12";
        }

        const nextValue =
            direction === "add" ? currentValue + 1 : currentValue - 1;

        return nextValue <= 12 && nextValue > 0
            ? StringHelper.padValue(nextValue.toString())
            : nextValue === 13
            ? StringHelper.padValue("1")
            : "12";
    };

    export const convertTo24HourFormat = (values: TimeValues): string => {
        const hour = parseInt(values.hour);
        let hourString: string;

        if (values.period === EPeriod.PM) {
            hourString = hour === 12 ? hour.toString() : (hour + 12).toString();
        } else {
            hourString = hour === 12 ? "00" : values.hour;
        }

        return `${hourString}:${values.minute}`;
    };

    export const convertHourTo12HourFormat = (hourValue: string): string => {
        const hour = parseInt(hourValue);
        const hourString =
            hour % 12 === 0 ? (12).toString() : (hour % 12).toString();

        return StringHelper.padValue(hourString);
    };

    export const formatDisplayValue = (
        value: string | undefined,
        format: TimeFormat
    ): string => {
        try {
            const { hour, minute, period = "" } = convertToPlain(value, format);

            const paddedHour = StringHelper.padValue(hour);
            const paddedMinute = StringHelper.padValue(minute);

            let formatted = `${paddedHour}:${paddedMinute}`;

            if (format === "12hr") {
                formatted += period.toLowerCase();

                return formatted;
            }

            return formatted;
        } catch (error) {
            return "";
        }
    };

    export const toMinutesSeconds = (_seconds: number) => {
        const minutes = Math.floor(_seconds / 60);
        const seconds = _seconds % 60;

        return {
            minutes,
            seconds,
        };
    };

    // Converts h:mma/hh:mma to 24hr (eg. 13:00)
    export const to24Hour = (time: string) => {
        if (time?.includes("am") || time?.includes("pm")) {
            const [t, p] = time.split(/(am|pm)/i);
            const [hr, m] = t.split(":").map(Number);
            let h = hr;
            if (p === "pm" && h < 12) h += 12;
            if (p === "am" && h === 12) h = 0;
            return toTimeString(h, m);
        }
        return time; // No conversion if string alr has am/pm
    };

    // Generates an array of timings based on given startTime/interval/format
    export const generateTimings = (
        interval: number, // In minutes
        format: TimeFormat = "12hr",
        startTime?: string | undefined,
        endTime?: string | undefined // Inclusive
    ): string[] => {
        const timings = [];
        let currentMinutes = 0;
        let endMinutes = 1440 - interval; // Do not include next day's 12am

        // Convert startTime (h:mma) to minutes
        if (startTime) {
            currentMinutes = timeToMinutes(startTime);
        }
        if (endTime) {
            endMinutes = timeToMinutes(endTime);
        }

        while (currentMinutes <= endMinutes) {
            let hours = Math.floor(currentMinutes / 60);
            const minutes = currentMinutes % 60;

            if (format === "12hr") {
                const period = hours >= 12 ? "pm" : "am";

                hours = hours % 12;
                hours = hours ? hours : 12; // Convert hour 0 to 12

                const timeString = toTimeString(hours, minutes, period);
                timings.push(timeString);
            } else {
                const timeString = toTimeString(hours, minutes);
                timings.push(timeString);
            }

            currentMinutes += interval;
        }

        return timings;
    };

    // Return undefined = invalid field, "" = empty field, else returns h:mma
    export const parseInput = (
        input: string,
        format: TimeFormat = "12hr" // Returned format
    ): string | undefined => {
        if (input === "" || input === undefined) return input;

        const sanitizedInput = input.trim().toLowerCase();
        const timeRegex = /^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/;
        const match = timeRegex.exec(sanitizedInput);

        if (!match) return;

        let hours = parseInt(match[1] || "0", 10);
        const minutes = parseInt(match[3] || "0", 10);
        let period = match[4];

        // Ensure hours/mins are valid
        if (match[1] === undefined || hours > 24 || minutes > 59) return;

        // Convert single-character periods to full am/pm
        if (period === "a") {
            period = "am";
        } else if (period === "p") {
            period = "pm";
        }

        if (format === "24hr") {
            // Convert 12-hour input to 24-hour format if period is present
            if (period === "pm" && hours < 12) {
                hours += 12;
            } else if ((period === "am" && hours === 12) || hours === 24) {
                hours = 0; // Midnight case
            }

            // Return time in 24-hour format (HH:mm)
            return toTimeString(hours, minutes);
        }

        // Handle 24-hour times or AM/PM conversion
        if (period) {
            if (hours === 0 || hours === 24) {
                period = "am";
                hours = 12;
            } else if (hours > 12) {
                period = "pm";
                hours -= 12;
            }
        } else {
            period =
                // NOTE: 12 or 1-6 will default to pm for convenience
                hours === 0 || hours === 24 || (hours > 6 && hours < 12)
                    ? "am"
                    : "pm";
            hours = hours % 12 || 12;
        }

        // Format the time as h:mma
        const formattedTime = toTimeString(hours, minutes, period);

        return formattedTime;
    };

    export const findClosestFlooredTime = (
        inputTime: string | undefined,
        timeArray: string[] // Should already be sorted in ascending order
    ): string | undefined => {
        if (!inputTime) return inputTime;
        const flooredInputMinutes = timeToMinutes(inputTime);

        let closestTime = "";
        let minDifference = Infinity;

        for (const time of timeArray) {
            const timeInMinutes = timeToMinutes(time);
            const difference = timeInMinutes - flooredInputMinutes;

            // If the difference is negative or zero, update the closest time
            if (difference <= 0 && Math.abs(difference) < minDifference) {
                minDifference = Math.abs(difference);
                closestTime = time;
            }
            // If the difference becomes positive, we've passed the closest time
            else if (difference > 0) {
                break;
            }
        }

        return closestTime;
    };

    // Accepts both 12hr and 24hr formats
    export const timeToMinutes = (time: string) => {
        const [startHourMin, ampm] = time.toLowerCase().split(/(am|pm)/);
        const [startHoursRaw, startMinutes] = startHourMin
            .split(":")
            .map(Number);
        let startHours = startHoursRaw;

        if (ampm === "pm" && startHours !== 12) {
            startHours += 12; // Convert PM hours to 24-hour format
        }
        if (ampm === "am" && startHours === 12) {
            startHours = 0; // Convert 12am to 0 hours
        }

        return startHours * 60 + startMinutes;
    };
}

// =============================================================================
// NON-EXPORTABLES
// =============================================================================
const isValidHour = (hourString: string, format: TimeFormat): boolean => {
    const numValue = parseInt(hourString);
    return format === "24hr"
        ? numValue >= 0 && numValue <= 23
        : numValue >= 1 && numValue <= 12;
};

const isValidMinutes = (hourString: string): boolean => {
    const numValue = parseInt(hourString);
    return numValue >= 0 && numValue <= 59;
};

const isValidTimePeriod = (timePeriodString: string): boolean => {
    return (
        timePeriodString.toLowerCase() === "am" ||
        timePeriodString.toLowerCase() === "pm"
    );
};

const convertToPlain = (
    value: string | undefined,
    format: TimeFormat
): TimeValuesPlain => {
    const timeArr = value ? value.split(":") : [];
    const error = new Error("Invalid format");

    if (format === "12hr") {
        // Check format
        if (timeArr.length !== 2 || timeArr[1].length !== 4) throw error;

        const minute = timeArr[1].substring(0, 2);
        const period = timeArr[1].substring(2);

        // Validate hour, minute and time period values
        if (
            !isValidHour(timeArr[0], format) ||
            !isValidMinutes(minute) ||
            !isValidTimePeriod(period)
        ) {
            throw error;
        }

        return {
            hour: timeArr[0],
            minute,
            period: timeArr[1].substring(2),
        };
    } else {
        // Check format
        if (timeArr.length !== 2) throw error;

        // Validate hour and minute values
        if (!isValidHour(timeArr[0], format) || !isValidMinutes(timeArr[1])) {
            throw error;
        }

        return {
            hour: timeArr[0],
            minute: timeArr[1],
        };
    }
};

const toTimeString = (hours: number, minutes: number, period?: string) => {
    return period
        ? `${hours}:${minutes.toString().padStart(2, "0")}${period}`
        : `${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}`;
};
