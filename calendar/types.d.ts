import { CommonCalendarProps, YearMonthDisplay } from "../shared/internal-calendar/types";
export interface CalendarProps extends CommonCalendarProps {
    className?: string | undefined;
    "data-testid"?: string | undefined;
    id?: string | undefined;
    /** Specifies if the component should have a border around it. Values `no-border` | `bordered` */
    styleType?: "no-border" | "bordered" | undefined;
    /** Selected date in `YYYY-MM-DD` format */
    value?: string | undefined;
    /** Called when day cell is hovered, returns value in `YYYY-MM-DD` */
    onHover?: ((value: string) => void) | undefined;
    /** Called when date is selected, returns value in `YYYY-MM-DD` format */
    onSelect?: ((value: string) => void) | undefined;
    /** Called when there is a change in the current visible month and year */
    onYearMonthDisplayChange?: ((value: YearMonthDisplay) => void) | undefined;
}
