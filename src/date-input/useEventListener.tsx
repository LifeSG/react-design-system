import { useEffect, useRef } from "react";

type Target = Window | HTMLElement | Document | null;

export const useEventListener = <K extends keyof WindowEventMap>(
    eventName: K,
    handler: (event: WindowEventMap[K]) => void,
    element: Target = window
) => {
    // Create a ref that stores handler
    const savedHandler = useRef() as React.MutableRefObject<
        (event: WindowEventMap[K]) => void
    >;
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(
        () => {
            // Make sure element supports addEventListener
            const isSupported = element && element.addEventListener;

            if (!isSupported) return;
            // Create event listener that calls handler function stored in ref
            const eventListener = (event: WindowEventMap[K]) =>
                savedHandler.current(event);
            // Add event listener
            element.addEventListener(eventName, eventListener);
            // Remove event listener on cleanup
            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, element] // Re-run if eventName or element changes
    );
};
