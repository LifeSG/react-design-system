import { CommonCalendarProps } from "../shared/internal-calendar/types";

export interface CalendarProps extends CommonCalendarProps {
    /** Specifies if the component should have a border around it. Values `no-border` | `bordered` */
    styleType?: "no-border" | "bordered" | undefined;
}
