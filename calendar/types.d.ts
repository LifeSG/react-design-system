export interface CalendarProps {
    /** Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]` */
    disabledDates?: string[] | undefined;
    /** Called when date is selected, returns value in `YYYY-MM-DD` format or `"Invalid Date"` */
    onSelect?: ((value: string) => void) | undefined;
    /** Selected date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /** The display type of the component. Values `standalone` | `input` */
    type?: CalendarType | undefined;
    /** The class selector */
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
}
export type CalendarType = "standalone" | "input";
