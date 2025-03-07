import { useCallback, useLayoutEffect, useRef } from "react";

/**
 * Alternative to `useEffectEvent` which is only available in React 18+
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useEvent<T extends (...args: any[]) => any>(callback: T): T {
    const ref = useRef<T>(null);

    useLayoutEffect(() => {
        ref.current = callback;
    }, [callback]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useCallback(
        ((...args) => {
            return ref.current(...args);
        }) as T,
        []
    );
}
