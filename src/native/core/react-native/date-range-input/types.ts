// Re-export shared types from design-core
export type {
    FocusType,
    DateRangeInputState,
    DateRangeInputConfig,
    DateRangeInputCallbacks,
    CalendarRefActions,
    InputRefActions,
} from "../../design-core";

// RN-specific types
export type CalendarAction = "reset" | "confirmed";
export type View = "default" | "month-options" | "year-options";

export interface DateRangeInputProps {
    value?: string;
    valueEnd?: string;
    minDate?: string;
    maxDate?: string;
    disabledDates?: string[];
    disabled?: boolean;
    error?: boolean;
    withButton?: boolean;
    onChange?: (startDate: string, endDate: string) => void;
}
