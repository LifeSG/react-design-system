import { useCallback, useLayoutEffect, useRef } from "react";

/**
 * Alternative to `useEffectEvent` which is only available in React 18+
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useEvent<T extends(...args: any[]) => any>(callback: T): T {
    const ref = useRef<T | null>(null);

    useLayoutEffect(() => {
        ref.current = callback;
    }, [callback]);

    const callbackRef = useCallback((...args: Parameters<T>): ReturnType<T> => {
        return ref.current?.(...args) as ReturnType<T>;
    }, []);

    return callbackRef as T;
}
