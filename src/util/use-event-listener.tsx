import { useEffect, useRef } from "react";

type Target = "window" | "document" | HTMLElement | null;
type Element = Window | Document | HTMLElement | null;
type EventHandler<K extends keyof WindowEventMap> = (
    event: WindowEventMap[K]
) => void;

export const useEventListener = <K extends keyof WindowEventMap>(
    eventName: K,
    handler: EventHandler<K>,
    target: Target = "window",
    options?: AddEventListenerOptions | boolean
) => {
    // Create a ref that stores handler
    const savedHandler = useRef<EventHandler<K>>(undefined);
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(
        () => {
            let element: Element;
            switch (target) {
                case "window":
                    element = window;
                    break;
                case "document":
                    element = document;
                    break;
                default:
                    element = target;
            }

            // Make sure element supports addEventListener
            if (!element || !element.addEventListener) return;

            // Create event listener that calls handler function stored in ref
            const eventListener = ((event: WindowEventMap[K]) =>
                savedHandler.current?.(event)) as EventListener;
            // Add event listener
            element.addEventListener(eventName, eventListener, options);
            // Remove event listener on cleanup
            return () => {
                element?.removeEventListener(eventName, eventListener, options);
            };
        },
        [eventName, target] // Re-run if eventName or element changes
    );
};
