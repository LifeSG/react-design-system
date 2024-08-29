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

        const targetTime = endTime ?? Date.now() + seconds * 1000;
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
            const countdown = Math.max(Math.round(msToEnd / 1000), 0);

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
