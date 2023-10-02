import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";
import { useTimer } from "./use-timer";
import { CountdownTimerProps } from "./types";
import { Countdown, Time, TimeLeft, Wrapper } from "./countdown-timer.style";
import { TimeHelper } from "../util/time-helper";
import { ClockIcon } from "@lifesg/react-icons";
import { MediaWidths } from "../spec/media-spec";

type Position = "relative" | "fixed";

export const CountdownTimer = ({
    className,
    timer,
    notifyTimer,
    offset,
    mobileOffset,
    show,
    "data-testid": testId,
    onDuration,
    onNotify,
    onFinish,
}: CountdownTimerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    const wrapperRef = useRef<HTMLDivElement>();
    const isNotified = useRef<boolean>(false);
    const [offsetY, setOffsetY] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const [remainingSeconds] = useTimer(timer, isPlaying);
    const { ref: stickyRef, inView } = useInView({
        threshold: 1,
        rootMargin: `${offsetY * -1}px 0px 0px 0px`,
    });

    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        setIsPlaying(show);
    }, [show]);

    useEffect(() => {
        if (remainingSeconds === 0) {
            performOnFinishHandler();
        } else if (remainingSeconds <= notifyTimer) {
            performOnDurationHandler();
            performOnNotifyHandler();
        }
    }, [remainingSeconds]);

    useEffect(() => {
        const y = getOffsetY();
        setOffsetY(y);
    }, [isMobile, offset?.top]);

    useEffect(() => {
        // reset
        isNotified.current = false;
    }, [timer, show]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const performOnDurationHandler = () => {
        if (onDuration) {
            onDuration(remainingSeconds);
        }
    };

    const performOnNotifyHandler = () => {
        if (onNotify && !isNotified.current) {
            isNotified.current = true;
            onNotify();
        }
    };

    const performOnFinishHandler = () => {
        setIsPlaying(false);

        if (onFinish) onFinish();
    };

    function getOffsetY() {
        const desktopTop = offset?.top ?? 168;
        const mobileTop = mobileOffset?.top ?? 80;
        const offsetY = isMobile ? mobileTop : desktopTop;

        return offsetY;
    }

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderCountdown = (position: Position) => {
        const { minutes, seconds } =
            TimeHelper.toMinutesSeconds(remainingSeconds);
        const clientRect = wrapperRef.current?.getBoundingClientRect();

        const m = minutes !== 1 ? "mins" : "min";
        const s = seconds !== 1 ? "secs" : "sec";
        const offsetX = !isMobile && offset?.left;

        return (
            <Countdown
                data-testid={testId}
                data-id={
                    position === "relative"
                        ? `countdown-wrapper`
                        : `fixed-countdown-wrapper`
                }
                ref={position === "relative" ? wrapperRef : undefined}
                inert={inView ? undefined : ""}
                $pinned={position === "fixed" && !inView}
                $opacity={position === "relative" && !inView}
                $warn={remainingSeconds <= notifyTimer}
                $top={offsetY}
                $left={offsetX || clientRect?.x}
                $right={offset?.right}
            >
                <ClockIcon />
                <TimeLeft>Time left:</TimeLeft>
                <Time>
                    {minutes} {m} {String(seconds).padStart(2, "0")} {s}
                </Time>
            </Countdown>
        );
    };

    if (!isPlaying && remainingSeconds !== 0) return <></>;

    return (
        <Wrapper className={className}>
            <div ref={stickyRef}></div>
            {renderCountdown("relative")}
            {wrapperRef.current && !inView && renderCountdown("fixed")}
        </Wrapper>
    );
};
