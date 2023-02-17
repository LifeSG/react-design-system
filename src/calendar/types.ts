export interface CalendarProps {
    /** ["2023-04-30"] */
    disabledDates?: string[] | undefined;
    /** 2023-03-30 */
    onChange?: ((value: string) => void) | undefined;
    /** 2023-03-30 */
    value?: string | undefined;
    type?: CalendarType | undefined;
}

// =============================================================================
// CalendarType - this props use in internal
// =============================================================================
export type CalendarType = "calendar" | "input";
