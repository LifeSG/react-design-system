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
    export const getTimeValues = (
        format: TimeFormat,
        value?: string
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
                const plain = convertToPlain(value, format);

                timeValues.hour = StringHelper.padValue(plain.hour);
                timeValues.minute = StringHelper.padValue(plain.minute);
                timeValues.period =
                    plain.period.toLowerCase() === "am"
                        ? EPeriod.AM
                        : EPeriod.PM;
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
        value: string,
        format: TimeFormat
    ): string => {
        try {
            const plain = convertToPlain(value, format);

            const paddedHour = StringHelper.padValue(plain.hour);
            const paddedMinute = StringHelper.padValue(plain.minute);

            let formatted = `${paddedHour}:${paddedMinute}`;

            if (format === "12hr") {
                formatted += plain.period.toLowerCase();

                return formatted;
            }

            return formatted;
        } catch (error) {
            return "";
        }
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

const convertToPlain = (value: string, format: TimeFormat): TimeValuesPlain => {
    const timeArr = value.split(":");
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
