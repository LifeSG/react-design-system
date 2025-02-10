import throttle from "lodash/throttle";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "styled-components";
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
    "data-testid": testId,
    onFinish,
    onNotify,
    onTick,
    ...otherProps
}: CountdownTimerProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    const wrapperRef = useRef<HTMLDivElement>();
    const isNotified = useRef<boolean>(false);
    const [offsetY, setOffsetY] = useState<number>(0);
    const [clientRectRight, setClientRectRight] = useState<number>(0);
    const [clientRectX, setClientRectX] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const [remainingSeconds] = useTimer(timer, isPlaying, timestamp);
    const { ref: stickyRef, inView } = useInView({
        threshold: 1,
        rootMargin: `${offsetY * -1}px 0px 0px 0px`,
        initialInView: true,
    });
    const isVisible = !fixed || inView;
    const warn = remainingSeconds <= notifyTimer;

    const theme = useTheme();
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
        } else if (remainingSeconds <= notifyTimer) {
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

    useEffect(() => {
        // reset
        isNotified.current = false;
    }, [timer, show]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleWindowResize = () => {
        const clientRect = wrapperRef.current?.getBoundingClientRect();

        setClientRectX(clientRect.x);
        setClientRectRight(clientRect.right);
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

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================

    const renderTimer = () => {
        const { minutes, seconds } =
            TimeHelper.toMinutesSeconds(remainingSeconds);
        const m = minutes !== 1 ? "mins" : "min";
        const s = seconds !== 1 ? "secs" : "sec";

        return (
            <>
                <TimerIcon $warn={warn} />
                <TimeLeft>Time left:</TimeLeft>
                <Timer>
                    {minutes} {m} {String(seconds).padStart(2, "0")} {s}
                </Timer>
            </>
        );
    };

    const renderCountdown = () => {
        return (
            <Countdown
                data-testid={testId}
                data-id="countdown-wrapper"
                ref={wrapperRef}
                inert={isVisible ? undefined : ""}
                $visible={isVisible}
                $warn={warn}
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
            >
                {renderTimer()}
            </FixedCountdown>
        );
    };

    if (typeof window === undefined) return;

    if (!isPlaying && remainingSeconds !== 0) return <></>;

    return (
        <Wrapper className={className} {...otherProps}>
            <div ref={stickyRef}></div>
            {renderCountdown()}
            {wrapperRef.current && !isVisible && renderFixedCountdown()}
        </Wrapper>
    );
};
