import React, { useRef } from "react";

import { useApplyStyle } from "../../theme";
import { mergeRefs } from "../../util";
import { useDropdownRender } from "../dropdown-wrapper";
import * as styles from "./calendar-dropdown.styles";
import { InternalCalendar } from "./internal-calendar";
import type { CalendarDropdownProps, InternalCalendarRef } from "./types";

const Component = (
    props: CalendarDropdownProps,
    ref: React.ForwardedRef<InternalCalendarRef>
) => {
    const {
        elementWidth,
        setFloatingRef,
        getFloatingProps,
        styles: positioningStyles,
    } = useDropdownRender();

    const wrapperRef = useRef<HTMLDivElement>(null);

    useApplyStyle(wrapperRef, {
        [styles.tokens.width]: `${elementWidth}px`,
        ...positioningStyles,
    });

    return (
        <div
            className={styles.calendarWrapper}
            data-testid="calendar-dropdown"
            ref={mergeRefs(setFloatingRef, wrapperRef)}
            {...getFloatingProps()}
        >
            <InternalCalendar ref={ref} {...props} />
        </div>
    );
};

export const CalendarDropdown = React.forwardRef(Component);
