import { InternalCalendar } from "../shared/internal-calendar";
import { CalendarProps } from "./types";

export const Calendar = (props: CalendarProps) => {
    return <InternalCalendar type="standalone" {...props} />;
};
