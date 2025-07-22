import React from "react";
import { useDropdownRender } from "../dropdown-wrapper";
import { CalendarWrapper } from "./calendar-dropdown.style";
import { InternalCalendar } from "./internal-calendar";
import { CalendarDropdownProps, InternalCalendarRef } from "./types";

const Component = (
    props: CalendarDropdownProps,
    ref: React.ForwardedRef<InternalCalendarRef>
) => {
    const { elementWidth, setFloatingRef, getFloatingProps, styles } =
        useDropdownRender();
    return (
        <CalendarWrapper
            $width={elementWidth}
            data-testid="calendar-dropdown"
            ref={setFloatingRef}
            style={styles}
            {...getFloatingProps()}
        >
            <InternalCalendar ref={ref} {...props} />
        </CalendarWrapper>
    );
};

export const CalendarDropdown = React.forwardRef(Component);
