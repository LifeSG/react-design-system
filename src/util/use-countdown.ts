import { useEffect, useRef, useState } from "react";

export interface UseCountdownOptions {
    /** Duration in seconds */
    duration: number;
    /** Called when countdown ends */
    onComplete?: () => void;
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
}: UseCountdownOptions): UseCountdownReturn => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number | null>(null);

    const formatTime = (time?: number) => {
        const t = time ?? timeLeft;
        return `${t} second${t === 1 ? "" : "s"}`;
    };

    const start = () => {
        if (isRunning) return;

        startTimeRef.current = Date.now();
        setIsRunning(true);

        intervalRef.current = setInterval(() => {
            const elapsed = Math.floor(
                (Date.now() - startTimeRef.current!) / 1000
            );
            const remaining = Math.max(0, duration - elapsed);

            setTimeLeft(remaining);

            if (remaining <= 0) {
                setIsRunning(false);
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
                onComplete?.();
            }
        }, 1000);
    };

    const stop = () => {
        setIsRunning(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
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

    return {
        timeLeft,
        isRunning,
        start,
        stop,
        reset,
        formatTime,
    };
};
