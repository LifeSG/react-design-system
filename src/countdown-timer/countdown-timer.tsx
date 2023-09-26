import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTimer } from "./use-timer";
import { CountdownTimerProps } from "./types";
import { Countdown, Time, TimeLeft, Wrapper } from "./countdown-timer.style";
import { TimeHelper } from "../util/time-helper";
import { ClockIcon } from "@lifesg/react-icons";
import { useIntersectionObserver } from "../util/use-intersection-observer";
import { MediaWidths } from "../spec/media-spec";

type Position = "relative" | "fixed";

export const CountdownTimer = ({
    className,
    timer: _timer,
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
    const stickyRef = useRef<HTMLDivElement>();
    const isNotified = useRef<boolean>(false);
    const [offsetY, setOffsetY] = useState<number>(0);

    const [timer, isPlaying, setIsPlaying] = useTimer(_timer);
    const onScreen = useIntersectionObserver(stickyRef, {
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
        if (timer === 0) {
            performOnFinishHandler();
        } else if (timer === notifyTimer) {
            performOnDurationHandler();
            performOnNotifyHandler();
        } else if (timer < notifyTimer) {
            if (!isNotified.current) performOnNotifyHandler();
            performOnDurationHandler();
        }
    }, [timer]);

    useEffect(() => {
        const y = getOffsetY();
        setOffsetY(y);
    }, [isMobile, wrapperRef.current]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const performOnDurationHandler = () => {
        if (onDuration) {
            const { seconds } = TimeHelper.convertSecondsToTime(timer);

            onDuration(seconds);
        }
    };

    const performOnNotifyHandler = () => {
        if (!isNotified.current) isNotified.current = true;

        if (onNotify) onNotify();
    };

    const performOnFinishHandler = () => {
        setIsPlaying(false);

        if (onFinish) onFinish();
    };

    function getOffsetY() {
        const desktopTop = offset?.top ?? 168;
        const mobileTop = mobileOffset?.top ?? 80;

        const offsetY = !isMobile ? desktopTop : mobileTop;

        return offsetY;
    }

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderCountdown = (position: Position) => {
        const {
            hours,
            minutes: _minutes,
            seconds,
        } = TimeHelper.convertSecondsToTime(timer);
        const clientRect = wrapperRef.current?.getBoundingClientRect();

        const minutes = hours * 60 + _minutes;
        const m = minutes !== 1 ? "mins" : "min";
        const s = seconds !== 1 ? "secs" : "sec";
        const offsetX = !isMobile ? offset?.left : mobileOffset?.left;

        return (
            <Countdown
                data-testid={testId}
                data-id={
                    position === "relative"
                        ? `countdown-wrapper`
                        : `fixed-countdown-wrapper`
                }
                ref={position === "relative" ? wrapperRef : undefined}
                inert={onScreen ? undefined : ""}
                $isFixed={position === "fixed"}
                $pinned={position === "fixed" && !onScreen}
                $opacity={position === "relative" && !onScreen}
                $warn={timer <= notifyTimer}
                $top={offsetY}
                $left={offsetX ?? clientRect?.x}
            >
                <ClockIcon />
                <TimeLeft>Time left:</TimeLeft>
                <Time>
                    {minutes} {m} {String(seconds).padStart(2, "0")} {s}
                </Time>
            </Countdown>
        );
    };

    if (!isPlaying && timer !== 0) return <></>;

    return (
        <Wrapper className={className}>
            <div ref={stickyRef}></div>
            {renderCountdown("relative")}
            {wrapperRef.current && !onScreen && renderCountdown("fixed")}
        </Wrapper>
    );
};
