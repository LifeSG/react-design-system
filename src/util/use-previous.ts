import { useEffect, useRef } from "react";

/**
 * Lets you access the previous value of state
 */
export const usePrevious = <T>(value: T) => {
    const currentRef = useRef<T>(value);
    const previousRef = useRef<T>();
    useEffect(() => {
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }, [value]);
    return previousRef.current;
};

export const useCompare = <T>(value: T) => {
    const prevValue = usePrevious(value);
    return prevValue !== value;
};
