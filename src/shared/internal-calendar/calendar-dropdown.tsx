import React from "react";
import { CalendarWrapper } from "./calendar-dropdown.style";
import { InternalCalendar } from "./internal-calendar";
import { InternalCalendarProps, InternalCalendarRef } from "./types";

const Component = (
    props: InternalCalendarProps,
    ref: React.ForwardedRef<InternalCalendarRef>
) => {
    return (
        <CalendarWrapper>
            <InternalCalendar ref={ref} {...props} />
        </CalendarWrapper>
    );
};

export const CalendarDropdown = React.forwardRef(Component);
