import { CommonCalendarProps } from "../shared/internal-calendar/types";

export interface CalendarProps extends CommonCalendarProps {
    /** Specifies if the component should have a border around it. Values `default` | `bordered` */
    styleType?: "default" | "bordered" | undefined;
}
