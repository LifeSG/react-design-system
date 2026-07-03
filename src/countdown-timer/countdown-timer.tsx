import { ClockIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import throttle from "lodash/throttle";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { inertValue, VisuallyHidden } from "../shared/accessibility";
import {
    formatUnitValue,
    useApplyStyle,
    useMaxWidthMediaQuery,
} from "../theme";
import { useIsMounted } from "../util";
import { TimeHelper } from "../util/time-helper";
import * as styles from "./countdown-timer.styles";
import type { CountdownTimerProps } from "./types";
import { useTimer } from "./use-timer";

/**
 * Displays a live countdown of time remaining until a deadline.
 *
 * Use when a time-limited interaction — such as a session timeout or a timed
 * form — needs a persistent visual reminder.
 */
export const CountdownTimer = ({
    className,
    align = "right",
    timer,
    timestamp,
    notifyTimer,
    offset,
    mobileOffset = { top: 80 },
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
    const fixedCountdownRef = useRef<HTMLDivElement>(null);

    const isNotified = useRef<boolean>(false);
    const [offsetY, setOffsetY] = useState<number>(0);
    const [clientRectRight, setClientRectRight] = useState<number>(0);
    const [clientRectX, setClientRectX] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [announcement, setAnnouncement] = useState<string>("");

    const isMounted = useIsMounted();
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

    const isMobile = useMaxWidthMediaQuery("sm");

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useApplyStyle(fixedCountdownRef, {
        [styles.tokens.fixedCountdown.top]: formatUnitValue(offsetY, "px"),
        [styles.tokens.fixedCountdown.left]: formatUnitValue(
            getOffsetLeft(),
            "px"
        ),
        [styles.tokens.fixedCountdown.right]: formatUnitValue(
            getOffsetRight(),
            "px"
        ),
    });

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
        const mobileTop = mobileOffset.top!;
        const offsetY = isMobile ? mobileTop : desktopTop;

        return offsetY;
    }

    function getOffsetLeft() {
        if (!isMounted || align !== "left") return undefined;
        return offset?.left ?? clientRectX;
    }

    function getOffsetRight() {
        if (!isMounted || align !== "right") return undefined;
        return (
            offset?.right ??
            Math.floor(document.body.clientWidth - clientRectRight)
        );
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
                <ClockIcon className={styles.timerIcon} data-warn={!!warn} />
                <div className={styles.timeLeft}>Time left:</div>
                <div
                    className={styles.timer}
                    aria-label={getAccessibleTimeText(remainingSeconds)}
                >
                    {minutes} {m} {String(seconds).padStart(2, "0")} {s}
                </div>
                {renderPeriodicAndWarningAnnouncement()}
            </>
        );
    };

    const renderInlineCountdown = () => {
        return (
            <div
                data-testid={testId}
                data-id="countdown-wrapper"
                data-warn={!!warn}
                ref={wrapperRef}
                inert={inertValue(!isVisible)}
                className={clsx(
                    styles.countdown,
                    styles.countdownInline,
                    !isVisible && styles.countdownHidden
                )}
                tabIndex={0}
                role="timer"
                aria-label="Countdown timer"
                onFocus={handleOnFocus}
            >
                {renderTimer()}
            </div>
        );
    };

    const renderFixedCountdown = () => {
        return (
            <div
                ref={fixedCountdownRef}
                data-testid={testId}
                data-id="fixed-countdown-wrapper"
                data-warn={!!warn}
                className={clsx(styles.countdown, styles.countdownFixed)}
                tabIndex={0}
                role="timer"
                aria-label="Countdown timer"
                onFocus={handleOnFocus}
            >
                {renderTimer()}
            </div>
        );
    };

    if (!isPlaying && remainingSeconds !== 0) return <></>;

    return (
        <div className={clsx(styles.wrapper, className)} {...otherProps}>
            <div ref={stickyRef}></div>
            {renderInlineCountdown()}
            {wrapperRef.current && !isVisible && renderFixedCountdown()}
        </div>
    );
};
