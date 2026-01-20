import { useEffect, useRef } from "react";

export const useDebouncedCallback = <T extends (...args: any[]) => void>(
    callback: T,
    delay: number
): T => {
    const timeoutId = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, []);

    return function (...args: Parameters<T>) {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }
        timeoutId.current = setTimeout(() => callback(...args), delay);
    } as T;
};
