export type calendarType = "calendar" | "input";

export interface CalendarProps {
    disabledDates?: string[] | undefined;
    onChange?: ((value: string) => void) | undefined;
    value?: string | undefined; // YYYY-MM-DD
    type: calendarType;
}
