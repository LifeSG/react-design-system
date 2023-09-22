import { useEffect, useRef, useState } from "react";

export const useTimer = (initialSeconds: number) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const milisecond = useRef<number>(initialSeconds * 1000);
    const previous = useRef<number>(milisecond.current);
    const [timer, setTimer] = useState<number>(initialSeconds);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!isPlaying || milisecond.current <= 0) return;
        if (milisecond.current <= 0) return;

        const currentMs = milisecond.current;
        let start: number, handle: number;

        const count = (timeStamp: number) => {
            if (start === undefined) start = timeStamp;
            const elapsed = timeStamp - start;
            milisecond.current = currentMs - elapsed;

            if (milisecond.current <= 0) {
                setTimer(0);
                cancelAnimationFrame(handle);
            } else {
                const seconds = Math.floor(milisecond.current / 1000);
                const isUpdate =
                    seconds !== Math.floor(previous.current / 1000);
                previous.current = milisecond.current;

                if (isUpdate) setTimer(seconds);

                handle = window.requestAnimationFrame(count);
            }
        };

        handle = window.requestAnimationFrame(count);

        return () => {
            cancelAnimationFrame(handle);
        };
    }, [isPlaying]);

    return [timer, isPlaying, setIsPlaying] as const;
};
