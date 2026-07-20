import { useCallback, useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useThrottle<T extends (...args: any[]) => any>(
    callback: T,
    wait: number
): T {
    const callbackRef = useRef<T>(callback);
    const lastCalledRef = useRef<number>(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return useCallback(
        (...args: Parameters<T>) => {
            const now = Date.now();
            const elapsed = now - lastCalledRef.current;

            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }

            if (elapsed >= wait) {
                lastCalledRef.current = now;
                callbackRef.current(...args);
            } else {
                timeoutRef.current = setTimeout(() => {
                    lastCalledRef.current = Date.now();
                    timeoutRef.current = null;
                    callbackRef.current(...args);
                }, wait - elapsed);
            }
        },
        [wait]
    ) as T;
}
