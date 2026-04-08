import { useEffect, useRef, useState } from "react";
import { announce, clearAnnouncer } from "@react-aria/live-announcer";

export interface UseCountdownOptions {
    /** Duration in seconds */
    duration: number;
    /** Called when countdown ends */
    onComplete?: () => void;
    /** Time in seconds between reminder announcements */
    reminderInterval?: number;
    /** announcement messages */
    getStartMessage?: (duration: number) => string;
    getIntervalMessage?: (remaining: number) => string;
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
    const hasAnnouncedCompletionRef = useRef(false);

    const handleAnnounce = (message: string) => {
        clearAnnouncer("polite");
        announce(message, "polite");
    };

    const start = () => {
        if (isRunning) return;

        if (intervalRef.current) clearInterval(intervalRef.current);

        setTimeLeft(duration);
        setIsRunning(true);
        startTimeRef.current = Date.now();
        hasAnnouncedCompletionRef.current = false;

        // First resend reminder message
        if (getStartMessage) {
            handleAnnounce(getStartMessage(duration));
        }

        intervalRef.current = setInterval(() => {
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
                clearInterval(intervalRef.current!);

                if (!hasAnnouncedCompletionRef.current) {
                    hasAnnouncedCompletionRef.current = true;
                    // final reminder message
                    if (getCompletionMessage) {
                        handleAnnounce(getCompletionMessage());
                    }
                }

                onComplete?.();
            }
        }, 1000);
    };

    const stop = () => {
        setIsRunning(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const reset = () => {
        stop();
        setTimeLeft(duration);
        startTimeRef.current = null;
        hasAnnouncedCompletionRef.current = false;
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return {
        timeLeft,
        isRunning,
        start,
        stop,
        reset,
        formatTime: (time?: number) =>
            `${time ?? timeLeft} second${(time ?? timeLeft) === 1 ? "" : "s"}`,
    };
};
