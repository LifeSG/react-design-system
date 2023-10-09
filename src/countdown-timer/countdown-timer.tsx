import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";
import { useTimer } from "./use-timer";
import { CountdownTimerProps } from "./types";
import {
    Countdown,
    FixedCountdown,
    TimeLeft,
    Timer,
    Wrapper,
} from "./countdown-timer.style";
import { TimeHelper } from "../util/time-helper";
import { ClockIcon } from "@lifesg/react-icons";
import { MediaWidths } from "../spec/media-spec";

export const CountdownTimer = ({
    className,
    align = "right",
    timer,
    notifyTimer,
    offset,
    mobileOffset,
    show,
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
    const [isPlaying, setIsPlaying] = useState(false);

    const [remainingSeconds] = useTimer(timer, isPlaying);
    const { ref: stickyRef, inView } = useInView({
        threshold: 1,
        rootMargin: `${offsetY * -1}px 0px 0px 0px`,
        initialInView: true,
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
            performOnTickHandler();
            performOnNotifyHandler();
        }
    }, [remainingSeconds]);

    useEffect(() => {
        const y = getOffsetY();
        setOffsetY(y);
    }, [isMobile, offset?.top, mobileOffset?.top]);

    useEffect(() => {
        // reset
        isNotified.current = false;
    }, [timer, show]);

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
                <ClockIcon />
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
                inert={inView ? undefined : ""}
                $visible={inView}
                $warn={remainingSeconds <= notifyTimer}
            >
                {renderTimer()}
            </Countdown>
        );
    };

    const renderFixedCountdown = () => {
        const clientRect = wrapperRef.current?.getBoundingClientRect();
        const left =
            offset?.left ?? (align === "left" ? clientRect.x : undefined);

        const right =
            offset?.right ??
            (align === "right"
                ? Math.floor(document.body.clientWidth - clientRect.right)
                : undefined);

        return (
            <FixedCountdown
                data-testid={testId}
                data-id="fixed-countdown-wrapper"
                $warn={remainingSeconds <= notifyTimer}
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
            {wrapperRef.current && !inView && renderFixedCountdown()}
        </Wrapper>
    );
};
