import { useEffect, useRef, useState } from "react";
import { announce, clearAnnouncer } from "@react-aria/live-announcer";

export interface UseCountdownOptions {
    /** Duration in seconds */
    duration: number;
    /** Called when countdown ends */
    onComplete?: () => void;
    /** Time in seconds between reminder announcements */
    reminderInterval?: number;
    /** Build the message announced when countdown timer starts */
    getStartMessage?: (duration: number) => string;
    /** Build the message announced when countdown reaches each interval based on `reminderInterval` */
    getIntervalMessage?: (remaining: number) => string;
    /** Build the message announced when countdown timer completes */
    getCompletionMessage?: () => string;
}

export interface UseCountdownReturn {
    /** Current countdown time in seconds */
    timeLeft: number;
    /** Whether countdown is currently running */
    isRunning: boolean;
    /** Start the countdown */
    start: () => void;
    /** Stop the countdown */
    stop: () => void;
    /** Reset countdown to initial duration */
    reset: () => void;
    /** Format time as "X second(s)" */
    formatTime: (time?: number) => string;
}

/**
 * Countdown hook
 */
export const useCountdown = ({
    duration,
    onComplete,
    reminderInterval,
    getStartMessage,
    getIntervalMessage,
    getCompletionMessage,
}: UseCountdownOptions): UseCountdownReturn => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const startTimeRef = useRef<number | null>(null);

    const clearTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const formatTime = (time?: number) => {
        const t = time ?? timeLeft;
        return `${t} second${t === 1 ? "" : "s"}`;
    };

    const handleAnnounce = (message: string) => {
        clearAnnouncer("polite");
        announce(message, "polite");
    };

    const start = () => {
        if (isRunning) return;

        clearTimer();

        setTimeLeft(duration);
        setIsRunning(true);
        startTimeRef.current = Date.now();

        // First resend reminder message
        if (getStartMessage) {
            handleAnnounce(getStartMessage(duration));
        }

        intervalRef.current = setInterval(() => {
            if (startTimeRef.current == null) return;

            const elapsed = Math.floor(
                (Date.now() - startTimeRef.current!) / 1000
            );
            const remaining = Math.max(0, duration - elapsed);

            setTimeLeft(remaining);

            if (
                typeof reminderInterval === "number" &&
                reminderInterval > 0 &&
                remaining > 0 &&
                remaining < duration &&
                remaining % reminderInterval === 0
            ) {
                // second resend reminder message in intervals
                if (getIntervalMessage) {
                    handleAnnounce(getIntervalMessage(remaining));
                }
            }

            if (remaining <= 0) {
                setIsRunning(false);
                clearTimer();

                // final reminder message
                if (getCompletionMessage) {
                    handleAnnounce(getCompletionMessage());
                }

                onComplete?.();
            }
        }, 1000);
    };

    const stop = () => {
        setIsRunning(false);
        clearTimer();
    };

    const reset = () => {
        stop();
        setTimeLeft(duration);
        startTimeRef.current = null;
    };

    // Update timeLeft when duration changes
    useEffect(() => {
        if (!isRunning) {
            setTimeLeft(duration);
        }
    }, [duration, isRunning]);

    useEffect(() => {
        return () => {
            clearTimer();
        };
    }, []);

    return {
        timeLeft,
        isRunning,
        start,
        stop,
        reset,
        formatTime,
    };
};
