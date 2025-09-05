import throttle from "lodash/throttle";
import { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { inertValue, VisuallyHidden } from "../shared/accessibility";
import { Breakpoint } from "../theme";
import { TimeHelper } from "../util/time-helper";
import {
    Countdown,
    FixedCountdown,
    TimeLeft,
    Timer,
    TimerIcon,
    Wrapper,
} from "./countdown-timer.style";
import { CountdownTimerProps } from "./types";
import { useTimer } from "./use-timer";

export const CountdownTimer = ({
    className,
    align = "right",
    timer,
    timestamp,
    notifyTimer,
    offset,
    mobileOffset,
    show,
    fixed = true,
    reminderInterval = 120,
    "data-testid": testId,
    onFinish,
    onNotify,
    onTick,
    ...otherProps
}: CountdownTimerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    const wrapperRef = useRef<HTMLDivElement>(null);
    const isNotified = useRef<boolean>(false);
    const [offsetY, setOffsetY] = useState<number>(0);
    const [clientRectRight, setClientRectRight] = useState<number>(0);
    const [clientRectX, setClientRectX] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [announcement, setAnnouncement] = useState<string>("");

    const [remainingSeconds, initialSeconds] = useTimer(
        timer,
        timestamp,
        isPlaying
    );
    const { ref: stickyRef, inView } = useInView({
        threshold: 1,
        rootMargin: `${offsetY * -1}px 0px 0px 0px`,
        initialInView: true,
    });
    const isVisible = !fixed || inView;
    const warn =
        typeof notifyTimer === "number" && remainingSeconds <= notifyTimer;

    const theme = useContext(ThemeContext);
    const mobileBreakpoint = Breakpoint["sm-max"]({ theme });
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        setIsPlaying(show);
    }, [show]);

    useEffect(() => {
        if (remainingSeconds === 0) {
            performOnFinishHandler();
        } else if (
            typeof notifyTimer === "number" &&
            remainingSeconds <= notifyTimer
        ) {
            performOnTickHandler();
            performOnNotifyHandler();
        }
    }, [remainingSeconds]);

    useEffect(() => {
        const y = getOffsetY();
        setOffsetY(y);
    }, [isMobile, offset?.top, mobileOffset?.top]);

    useEffect(() => {
        if (wrapperRef.current) {
            const handleResize = throttle(handleWindowResize, 300);
            handleWindowResize();

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [wrapperRef.current]);

    // Announcements
    useEffect(() => {
        const timeElapsed = initialSeconds - remainingSeconds;
        if (timeElapsed === 0) return;
        // Polite notification
        if (timeElapsed % reminderInterval === 0) {
            if (
                typeof notifyTimer !== "number" ||
                remainingSeconds > notifyTimer
            ) {
                setAnnouncement(getAccessibleTimeText(remainingSeconds));
            }
        }

        // Assertive notification
        if (
            typeof notifyTimer === "number" &&
            remainingSeconds === notifyTimer
        ) {
            setAnnouncement(getAccessibleTimeText(remainingSeconds));
        }
    }, [remainingSeconds, initialSeconds, reminderInterval, notifyTimer]);

    useEffect(() => {
        // reset
        isNotified.current = false;
    }, [initialSeconds, show]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleWindowResize = () => {
        if (!wrapperRef.current) return;

        const clientRect = wrapperRef.current.getBoundingClientRect();

        setClientRectX(clientRect.x);
        setClientRectRight(clientRect.right);
    };

    const handleOnFocus = () => {
        const focusMessage = getAccessibleTimeText(remainingSeconds);
        setAnnouncement(focusMessage);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const performOnTickHandler = () => {
        if (onTick) {
            onTick(remainingSeconds);
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

    const getAccessibleTimeText = (seconds: number): string => {
        const { minutes, seconds: secs } = TimeHelper.toMinutesSeconds(seconds);

        const minuteText = minutes === 1 ? "minute" : "minutes";
        const secondText = secs === 1 ? "second" : "seconds";

        if (minutes > 0 && secs > 0) {
            return `Time left: ${minutes} ${minuteText} and ${secs} ${secondText}`;
        } else if (minutes > 0) {
            return `Time left: ${minutes} ${minuteText}`;
        } else {
            return `Time left: ${secs} ${secondText}`;
        }
    };
    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderPeriodicAndWarningAnnouncement = () => (
        <VisuallyHidden
            aria-live={
                typeof notifyTimer === "number" &&
                remainingSeconds <= notifyTimer
                    ? "assertive"
                    : "polite"
            }
            aria-atomic="true"
        >
            {announcement}
        </VisuallyHidden>
    );

    const renderTimer = () => {
        const { minutes, seconds } =
            TimeHelper.toMinutesSeconds(remainingSeconds);
        const m = minutes !== 1 ? "mins" : "min";
        const s = seconds !== 1 ? "secs" : "sec";
        return (
            <>
                <TimerIcon $warn={warn} />
                <TimeLeft>Time left:</TimeLeft>
                <Timer aria-label={getAccessibleTimeText(remainingSeconds)}>
                    {minutes} {m} {String(seconds).padStart(2, "0")} {s}
                </Timer>
                {renderPeriodicAndWarningAnnouncement()}
            </>
        );
    };

    const renderCountdown = () => {
        return (
            <Countdown
                data-testid={testId}
                data-id="countdown-wrapper"
                ref={wrapperRef}
                inert={inertValue(!isVisible)}
                $visible={isVisible}
                $warn={warn}
                tabIndex={0}
                role="timer"
                aria-label="Countdown timer"
                onFocus={handleOnFocus}
            >
                {renderTimer()}
            </Countdown>
        );
    };

    const renderFixedCountdown = () => {
        const left =
            offset?.left ?? (align === "left" ? clientRectX : undefined);

        const right =
            offset?.right ??
            (align === "right"
                ? Math.floor(document.body.clientWidth - clientRectRight)
                : undefined);

        return (
            <FixedCountdown
                data-testid={testId}
                data-id="fixed-countdown-wrapper"
                $warn={warn}
                $top={offsetY}
                $left={left}
                $right={right}
                tabIndex={0}
                role="timer"
                aria-label="Countdown timer"
                onFocus={handleOnFocus}
            >
                {renderTimer()}
            </FixedCountdown>
        );
    };

    if (!isPlaying && remainingSeconds !== 0) return <></>;

    return (
        <Wrapper className={className} {...otherProps}>
            <div ref={stickyRef}></div>
            {renderCountdown()}
            {wrapperRef.current && !isVisible && renderFixedCountdown()}
        </Wrapper>
    );
};
