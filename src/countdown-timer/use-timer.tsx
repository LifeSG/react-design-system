import { useEffect, useState } from "react";

export const useTimer = (seconds: number, isPlaying: boolean) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [remainingSeconds, setRemainingSeconds] = useState<number>(seconds);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!isPlaying) return;
        const cleanup = start();

        return () => cleanup();
    }, [isPlaying, seconds]);

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const start = () => {
        const timestamp = Date.now();

        const interval = setInterval(() => {
            const currentTime = Date.now();
            const milliseconds = seconds * 1000;

            const countdown = Math.ceil(
                (timestamp + milliseconds - currentTime) / 1000
            );

            setRemainingSeconds(Math.max(countdown, 0));
            if (countdown <= 0) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    };

    return [remainingSeconds] as const;
};
