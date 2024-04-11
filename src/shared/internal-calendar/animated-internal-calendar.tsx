import React, { useEffect, useImperativeHandle, useRef } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import { AnimatedDiv } from "./animated-internal-calendar.style";
import { InternalCalendar } from "./internal-calendar";
import { AnimatedInternalCalendarProps, InternalCalendarRef } from "./types";

const AnimatedComponent = (
    props: AnimatedInternalCalendarProps,
    ref: React.ForwardedRef<InternalCalendarRef>
) => {
    const { isOpen, ...remainingProps } = props;
    const calendarRef = useRef<InternalCalendarRef>();
    const resizeDetector = useResizeDetector();
    const styles = useSpring({
        opacity: isOpen ? 1 : 0,
        config: { duration: 300 },
    });

    useEffect(() => {
        if (isOpen) {
            calendarRef.current.reset();
        }
    }, [isOpen]);

    useImperativeHandle(ref, () => calendarRef.current);

    return (
        <AnimatedDiv
            style={{
                opacity: styles.opacity,
                display: styles.opacity.to((v) =>
                    v === 0 ? "none" : undefined
                ),
            }}
        >
            <div ref={resizeDetector.ref}>
                <InternalCalendar ref={calendarRef} {...remainingProps} />
            </div>
        </AnimatedDiv>
    );
};

export const AnimatedInternalCalendar = React.forwardRef(AnimatedComponent);
