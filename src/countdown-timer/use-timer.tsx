import { useEffect, useState } from "react";

export const useTimer = (seconds: number) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [timer, setTimer] = useState<number>(seconds);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!isPlaying) return;
        const cleanup = start();

        return () => cleanup();
    }, [isPlaying]);

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const start = () => {
        const elapsed = new Date();

        const interval = setInterval(() => {
            const currentTime = Date.now();
            const milisecond = seconds * 1000;

            const countdown = Math.ceil(
                (elapsed.valueOf() + milisecond - currentTime) / 1000
            );

            setTimer(countdown);
            if (countdown <= 0) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    };

    return [timer, isPlaying, setIsPlaying] as const;
};
