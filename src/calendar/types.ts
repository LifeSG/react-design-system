export interface CalendarProps {
    /** disabledDates: ["2023-04-30"] */
    disabledDates?: string[] | undefined;
    /** onChange("2023-03-30") */
    onChange?: ((value: string) => void) | undefined;
    /** value: 2023-03-30 */
    value?: string | undefined;
    type?: CalendarType | undefined;
}

// =============================================================================
// CalendarType - this props use in internal
// =============================================================================
export type CalendarType = "calendar" | "input";
