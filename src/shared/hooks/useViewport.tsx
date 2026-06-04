import { useCallback, useEffect, useRef, useState } from "react";

const STABLE_FRAMES = 2;
const HEIGHT_OFFSET = 0.5;
// This 180 ms duration is chosen to align with the mobile Chrome/keyboard animation (150–300 ms range) and the modal’s entrance `transition-delay` (200 ms) before we force it into the `ready` state.
const FALLBACK_TIME = 180;

interface UseViewportProps {
    enabled?: boolean;
    onBeforeStart?: () => void;
}

export const useViewport = ({
    enabled = false,
    onBeforeStart,
}: UseViewportProps = {}) => {
    const [verticalHeight, setVerticalHeight] = useState<number>();
    const [ready, setReady] = useState(false);
    const pendingFramesRef = useRef<number[]>([]);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const hasResolvedRef = useRef(false);
    const onBeforeStartRef = useRef(onBeforeStart);

    useEffect(() => {
        onBeforeStartRef.current = onBeforeStart;
    }, [onBeforeStart]);

    const handleWindowResize = useCallback(() => {
        const newVerticalHeight = window.innerHeight * 0.01;
        setVerticalHeight(newVerticalHeight);
    }, []);

    const handleViewportResize = useCallback(() => {
        if (window.visualViewport) {
            const newVerticalHeight = window.visualViewport.height * 0.01;
            setVerticalHeight(newVerticalHeight);
        }
    }, []);

    useEffect(() => {
        // set initial vh

        // use VisualViewport API if available, it gives more accurate dimensions when iOS software keyboard is active
        if (window.visualViewport) {
            handleViewportResize();
            window.visualViewport.addEventListener(
                "resize",
                handleViewportResize
            );
            return () => {
                window.visualViewport?.removeEventListener(
                    "resize",
                    handleViewportResize
                );
            };
        }

        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [handleViewportResize, handleWindowResize]);

    useEffect(() => {
        const scheduleFrame = (fn: FrameRequestCallback) => {
            pendingFramesRef.current.push(requestAnimationFrame(fn));
        };

        const clearPending = () => {
            pendingFramesRef.current.forEach((id) => cancelAnimationFrame(id));
            pendingFramesRef.current = [];

            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }

            hasResolvedRef.current = false;
        };

        const resolve = () => {
            if (hasResolvedRef.current) {
                return;
            }
            hasResolvedRef.current = true;
            setReady(true);
        };
        // Compare the viewport height across consecutive frames;
        // once it remains stable for at least 2 frames, trigger the modal animation
        const waitForStableViewport = () => {
            let lastHeight =
                window.visualViewport?.height ?? window.innerHeight;
            let stableFrames = 0;

            const checkViewportStability = () => {
                const currentHeight =
                    window.visualViewport?.height ?? window.innerHeight;
                // Use a small offset to account for fluctuations in reported height
                // even when the viewport hasn’t actually changed
                if (Math.abs(currentHeight - lastHeight) < HEIGHT_OFFSET) {
                    stableFrames += 1;
                } else {
                    stableFrames = 0;
                    lastHeight = currentHeight;
                }

                if (stableFrames >= STABLE_FRAMES) {
                    resolve();
                    return;
                }

                scheduleFrame(checkViewportStability);
            };

            scheduleFrame(checkViewportStability);
        };

        clearPending();
        setReady(false);

        if (!enabled) {
            return clearPending;
        }

        onBeforeStartRef.current?.();

        if (!window.visualViewport) {
            scheduleFrame(resolve);
            return clearPending;
        }

        waitForStableViewport();
        timeoutRef.current = setTimeout(resolve, FALLBACK_TIME);

        return clearPending;
    }, [enabled]);

    return {
        verticalHeight,
        ready,
    };
};
