import React from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import { AnimatedDiv } from "./animated-internal-calendar.style";
import { InternalCalendar } from "./internal-calendar";
import { AnimatedInternalCalendarProps, CalendarRef } from "./types";

const AnimatedComponent = (
    props: AnimatedInternalCalendarProps,
    ref: React.ForwardedRef<CalendarRef>
) => {
    const resizeDetector = useResizeDetector();
    const styles = useSpring({
        height: props.isOpen ? resizeDetector.height : 0,
    });

    return (
        <AnimatedDiv style={styles}>
            <div ref={resizeDetector.ref} inert={props.isOpen ? undefined : ""}>
                <InternalCalendar ref={ref} {...props} />
            </div>
        </AnimatedDiv>
    );
};

export const AnimatedInternalCalendar = React.forwardRef(AnimatedComponent);
