import React, { useImperativeHandle, useRef } from "react";
import { CalendarWrapper } from "./calendar-dropdown.style";
import { InternalCalendar } from "./internal-calendar";
import { InternalCalendarProps, InternalCalendarRef } from "./types";

const Component = (
    props: InternalCalendarProps,
    ref: React.ForwardedRef<InternalCalendarRef>
) => {
    const calendarRef = useRef<InternalCalendarRef>();

    useImperativeHandle(ref, () => calendarRef.current);

    return (
        <CalendarWrapper>
            <InternalCalendar ref={calendarRef} {...props} />
        </CalendarWrapper>
    );
};

export const CalendarDropdown = React.forwardRef(Component);
