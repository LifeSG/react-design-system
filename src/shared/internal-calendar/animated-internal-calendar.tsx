import React, { useEffect, useImperativeHandle, useRef } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import { AnimatedDiv } from "./animated-internal-calendar.style";
import { InternalCalendar } from "./internal-calendar";
import { AnimatedInternalCalendarProps, CalendarRef } from "./types";

const AnimatedComponent = (
    props: AnimatedInternalCalendarProps,
    ref: React.ForwardedRef<CalendarRef>
) => {
    const { isOpen, ...remainingProps } = props;
    const calendarRef = useRef<CalendarRef>();
    const resizeDetector = useResizeDetector();
    const styles = useSpring({
        height: isOpen ? resizeDetector.height : 0,
    });

    useEffect(() => {
        if (isOpen) {
            calendarRef.current.defaultView();
        }
    }, [isOpen]);

    useImperativeHandle(ref, () => calendarRef.current);

    return (
        <AnimatedDiv style={styles}>
            <div ref={resizeDetector.ref} inert={isOpen ? undefined : ""}>
                <InternalCalendar ref={calendarRef} {...remainingProps} />
            </div>
        </AnimatedDiv>
    );
};

export const AnimatedInternalCalendar = React.forwardRef(AnimatedComponent);
