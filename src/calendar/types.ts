/**
 * disabledDates: ["YYYY-MM-DD"]
 * onChange("YYYY-MM-DD")
 * value: YYYY-MM-DD
 */
export interface CalendarProps {
    disabledDates?: string[] | undefined;
    onChange?: ((value: string) => void) | undefined;
    value?: string | undefined;
    type: CalendarType;
}

// =============================================================================
// CalendarType - this props use in internal
// =============================================================================
export type CalendarType = "calendar" | "input";
