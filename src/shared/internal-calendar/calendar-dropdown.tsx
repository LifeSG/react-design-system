import React from "react";
import { CalendarWrapper } from "./calendar-dropdown.style";
import { InternalCalendar } from "./internal-calendar";
import { CalendarDropdownProps, InternalCalendarRef } from "./types";

const Component = (
    { width, ...otherProps }: CalendarDropdownProps,
    ref: React.ForwardedRef<InternalCalendarRef>
) => {
    return (
        <CalendarWrapper $width={width} data-testid="calendar-dropdown">
            <InternalCalendar ref={ref} {...otherProps} />
        </CalendarWrapper>
    );
};

export const CalendarDropdown = React.forwardRef(Component);
