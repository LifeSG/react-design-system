import { useEffect, useState } from "react";

export const useTimer = (
    seconds: number,
    isPlaying: boolean,
    endTime?: number | undefined // Takes precedence over seconds
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [remainingSeconds, setRemainingSeconds] = useState<number>(seconds);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!isPlaying) return;
        if (endTime)
            setRemainingSeconds(
                calculateRemainingSecondsFromTimestamp(endTime)
            );

        const startTime = Date.now();
        const intervalId = setInterval(() => {
            const countdown = calculateRemainingSecondsFromTimestamp(
                endTime ?? startTime + seconds * 1000
            );

            setRemainingSeconds(countdown);
            if (countdown <= 0) clearInterval(intervalId);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [endTime, isPlaying, seconds]);

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const calculateRemainingSecondsFromTimestamp = (timestamp: number) =>
        Math.max(Math.ceil((timestamp - Date.now()) / 1000), 0);

    return [remainingSeconds] as const;
};
