import { useEffect, useState } from "react";

const getTimestamp = (
    seconds: number | undefined,
    endTime: number | undefined
) => {
    if (endTime) {
        return endTime;
    } else {
        return Date.now() + (seconds ?? 0) * 1000;
    }
};

const getSeconds = (ms: number) => {
    return Math.max(Math.round(ms / 1000), 0);
};

export const useTimer = (
    seconds: number | undefined,
    endTime: number | undefined, // Takes precedence over seconds
    isPlaying: boolean
): [number] => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [remainingSeconds, setRemainingSeconds] = useState<number>(() => {
        const timestamp = getTimestamp(seconds, endTime);
        const msToEnd = timestamp - Date.now();
        return getSeconds(msToEnd);
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!isPlaying) return;

        const targetTime = getTimestamp(seconds, endTime);
        const timeoutId = runCountdown(targetTime);

        return () => clearTimeout(timeoutId);
    }, [endTime, isPlaying, seconds]);

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const runCountdown = (timestamp: number) => {
        const updateCountdown = () => {
            const msToEnd = timestamp - Date.now();
            const driftTime = msToEnd % 1000;
            const countdown = getSeconds(msToEnd);

            setRemainingSeconds(countdown);

            if (countdown === 0) return;

            const timeoutId = setTimeout(
                updateCountdown,
                driftTime > 500 ? driftTime : driftTime + 1000
            );

            return timeoutId;
        };
        return updateCountdown();
    };

    return [remainingSeconds] as const;
};
