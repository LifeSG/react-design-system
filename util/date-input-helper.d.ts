export declare namespace DateInputHelper {
    const validate: (startDate: string | undefined, endDate: string | undefined, disabledDates?: string[] | undefined, between?: string[] | undefined) => boolean;
    const validateSingle: (value: string, disabledDates?: string[] | undefined, between?: string[] | undefined) => boolean;
    const getFormattedRawValue: (startValue: string, endValue?: string) => {
        start: string[];
        end: string[] | undefined;
    };
    const sleep: (ms: number, controller: AbortController) => Promise<unknown>;
}
