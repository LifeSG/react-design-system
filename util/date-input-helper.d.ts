export declare class DateInputHelper {
    static isDateDisabled(val: string | undefined, props: {
        disabledDates?: string[];
        minDate?: string;
        maxDate?: string;
    }): boolean;
    static sanitizeInput(date: string | undefined): string;
    private static normalizeDateString;
}
