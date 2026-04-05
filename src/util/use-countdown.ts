import { useEffect, useRef, useState } from "react";

export interface UseCountdownOptions {
    /** Duration in seconds */
    duration: number;
    /** Called when countdown ends */
    onComplete?: () => void;
    /** Time in seconds between reminder announcements */
    reminderInterval?: number;
}

export interface UseCountdownReturn {
    /** Current countdown time in seconds */
    timeLeft: number;
    /** Whether countdown is currently running */
    isRunning: boolean;
    /** Hidden live region text */
    liveReminderText: string;
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
}: UseCountdownOptions): UseCountdownReturn => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isRunning, setIsRunning] = useState(false);
    const [liveReminderText, setLiveReminderText] = useState("");

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const announceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
        null
    );
    const startTimeRef = useRef<number | null>(null);
    const hasAnnouncedCompletionRef = useRef(false);

    const clearTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const clearAnnounceTimeout = () => {
        if (announceTimeoutRef.current) {
            clearTimeout(announceTimeoutRef.current);
            announceTimeoutRef.current = null;
        }
    };

    const announce = (message: string) => {
        clearAnnounceTimeout();
        setLiveReminderText("");

        announceTimeoutRef.current = setTimeout(() => {
            setLiveReminderText(message);
        }, 50);
    };

    const formatTime = (time?: number) => {
        const t = time ?? timeLeft;
        return `${t} second${t === 1 ? "" : "s"}`;
    };

    const start = () => {
        if (isRunning) return;

        clearTimer();
        clearAnnounceTimeout();

        setTimeLeft(duration);
        setIsRunning(true);
        startTimeRef.current = Date.now();
        hasAnnouncedCompletionRef.current = false;

        // First resend reminder message
        announce(`You can resend the OTP in ${duration} seconds`);

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
                announce(`${remaining} seconds remaining`);
            }

            if (remaining <= 0) {
                setIsRunning(false);
                clearTimer();

                if (!hasAnnouncedCompletionRef.current) {
                    hasAnnouncedCompletionRef.current = true;
                    // final reminder message
                    announce("You can now resend the OTP");
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
        clearAnnounceTimeout();
        setTimeLeft(duration);
        setLiveReminderText("");
        startTimeRef.current = null;
        hasAnnouncedCompletionRef.current = false;
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
            clearAnnounceTimeout();
        };
    }, []);

    return {
        timeLeft,
        isRunning,
        liveReminderText,
        start,
        stop,
        reset,
        formatTime,
    };
};
