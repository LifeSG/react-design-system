import { useEffect, useRef, useState } from "react";

import { VisuallyHidden } from "../shared/accessibility";

interface InactivityTimerProps {
    secondsLeft?: number;
    reminderInterval?: number;
    imageOnly?: boolean;
    hasCustomDescription?: boolean;
}

export const InactivityTimer = ({
    secondsLeft,
    reminderInterval = 120,
    imageOnly,
    hasCustomDescription,
}: InactivityTimerProps) => {
    const [liveReminderText, setLiveReminderText] = useState<string>("");
    const prevSecondsLeftRef = useRef<number | undefined>(undefined);

    const shouldEnable =
        !imageOnly &&
        !hasCustomDescription &&
        typeof secondsLeft === "number" &&
        secondsLeft >= 0;

    const buildReminderSentence = (s: number): string => {
        const min = Math.floor(s / 60);
        const sec = s % 60;
        return `You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ${min} minutes ${sec} seconds.`;
    };

    useEffect(() => {
        if (
            !shouldEnable ||
            typeof secondsLeft !== "number" ||
            secondsLeft < 0
        ) {
            prevSecondsLeftRef.current = undefined;
            setLiveReminderText("");
            return;
        }

        const prev = prevSecondsLeftRef.current;
        prevSecondsLeftRef.current = secondsLeft;

        if (prev == null) {
            setLiveReminderText(buildReminderSentence(secondsLeft));
            return;
        }

        if (secondsLeft >= prev) return;

        const interval = Math.max(1, reminderInterval);
        const prevBucket = Math.floor(prev / interval);
        const currBucket = Math.floor(secondsLeft / interval);

        if (prevBucket !== currBucket) {
            setLiveReminderText(buildReminderSentence(secondsLeft));
        }
    }, [secondsLeft, reminderInterval]);

    if (!liveReminderText || !shouldEnable) return null;

    return (
        <VisuallyHidden aria-live="polite" aria-atomic="true">
            {liveReminderText}
        </VisuallyHidden>
    );
};
