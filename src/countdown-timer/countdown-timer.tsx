import debounce from "lodash/debounce";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTimer } from "../util/use-timer";
import { CountdownTimerProps } from "./types";
import {
    Countdown,
    PositionStyle,
    Time,
    TimeLeft,
    Wrapper,
} from "./countdown-timer.style";
import { TimeHelper } from "../util/time-helper";
import { ClockIcon } from "@lifesg/react-icons";
import { useIntersectionObserver } from "../util/use-intersection-observer";
import { useEventListener } from "../util/use-event-listener";
import { MediaWidths } from "../spec/media-spec";

export const CountdownTimer = ({
    className,
    timer: _timer,
    notifyTimer,
    offset,
    show,
    "data-testid": testId,
    onDuration,
    onNotify,
    onFinish,
}: CountdownTimerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { minutes = 0, seconds = 0 } = _timer;
    const notifyMinutes = notifyTimer?.minutes || 0;
    const notifySeconds = notifyTimer?.seconds || 0;
    const notifyTiming = notifyMinutes * 60 + notifySeconds;
    const totalSeconds = minutes * 60 + seconds;

    const wrapperRef = useRef<HTMLDivElement>();
    const stickyRef = useRef<HTMLDivElement>();

    const [scrolling, setScrolling] = useState<boolean>(false);
    const [offsetY, setOffsetY] = useState<number>(0);

    const [timer, isPlaying, setIsPlaying] = useTimer(totalSeconds);
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

    useEventListener("scroll", handleScrollEvent);

    useEffect(() => {
        setIsPlaying(show);
    }, [show]);

    useEffect(() => {
        if (timer === 0) {
            performOnFinishHandler();
        } else if (timer === notifyTiming) {
            performOnDurationHandler();
            performOnNotifyHandler();
        } else if (timer < notifyTiming) {
            performOnDurationHandler();
        }
    }, [timer]);

    useEffect(() => {
        const y = getOffsetY();
        setOffsetY(y);
    }, [isMobile, wrapperRef.current]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    function handleScrollEvent() {
        setScrolling(true);
        handleEndScroll();
    }

    const handleEndScroll = useMemo(
        () => debounce(() => setScrolling(false), 250),
        []
    );

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const performOnDurationHandler = () => {
        if (onDuration) {
            const { minutes, seconds } = TimeHelper.convertSecondsToTime(timer);

            onDuration({ minutes, seconds });
        }
    };

    const performOnNotifyHandler = () => {
        if (onNotify) onNotify();
    };

    const performOnFinishHandler = () => {
        setIsPlaying(false);

        if (onFinish) onFinish();
    };

    function getOffsetY() {
        const DEFAULT_DESKTOP_TABLET_POSITION = 168;
        const DEFAULT_MOBILE_POSITION = 80;

        const offsetY = offset?.top
            ? offset.top
            : isMobile
            ? DEFAULT_MOBILE_POSITION
            : DEFAULT_DESKTOP_TABLET_POSITION;

        return offsetY;
    }

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderCountdown = (position: PositionStyle) => {
        const { minutes, seconds } = TimeHelper.convertSecondsToTime(timer);
        const clientRect = wrapperRef.current?.getBoundingClientRect();

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
                $position={position}
                $pinned={position === "fixed" && !onScreen}
                $opacity={position === "relative" && !onScreen}
                $scroll={scrolling}
                $warn={timer <= notifyTiming}
                $top={offsetY}
                $left={offset?.left ?? clientRect?.x}
            >
                <ClockIcon />
                <TimeLeft>Time left:</TimeLeft>
                <Time>
                    {minutes} mins {String(seconds).padStart(2, "0")} secs
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
