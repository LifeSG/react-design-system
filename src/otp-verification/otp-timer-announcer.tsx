import { useEffect, useRef, useState } from "react";
import { VisuallyHidden } from "../shared/accessibility";

const ANNOUNCE_INTERVAL = 15; // seconds

export const OtpTimerAnnouncer = ({
    timeLeft,
    isRunning,
    duration,
}: {
    timeLeft: number;
    isRunning: boolean;
    duration: number;
}) => {
    const wasRunningRef = useRef(false);
    const [liveMessage, setLiveMessage] = useState("");

    useEffect(() => {
        const justStarted = isRunning && !wasRunningRef.current;
        if (justStarted) {
            setLiveMessage(`Timer started. You have ${duration} seconds left.`);
        }
        wasRunningRef.current = isRunning;

        // "Time is up" is checked before the isRunning guard so that React 18
        // batching (timeLeft=0 and isRunning=false committed together) does not
        // swallow the announcement.
        if (timeLeft === 0 && wasRunningRef.current) {
            setLiveMessage("You can now resend the OTP.");
            return;
        }

        if (!isRunning) return;

        // Every ANNOUNCE_INTERVAL-second boundary
        if (
            timeLeft > 0 &&
            timeLeft % ANNOUNCE_INTERVAL === 0 &&
            timeLeft !== duration
        ) {
            setLiveMessage(`You have ${timeLeft} seconds left.`);
            return;
        }
    }, [timeLeft, isRunning]);

    return (
        <VisuallyHidden aria-live="polite" aria-atomic="true">
            {liveMessage}
        </VisuallyHidden>
    );
};
