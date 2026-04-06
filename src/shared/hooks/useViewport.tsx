import throttle from "lodash/throttle";
import { useCallback, useEffect, useState } from "react";

export const useViewport = () => {
    const [verticalHeight, setVerticalHeight] = useState<number>();
    const [offsetTop, setOffsetTop] = useState<number>();

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleWindowResize = useCallback(() => {
        const newVerticalHeight = window.innerHeight * 0.01;
        setVerticalHeight(newVerticalHeight);
    }, []);

    const handleViewportResize = useCallback(() => {
        if (window.visualViewport) {
            const newVerticalHeight = window.visualViewport.height * 0.01;
            setVerticalHeight(newVerticalHeight);
            setOffsetTop(window.visualViewport.offsetTop);
        }
    }, []);

    useEffect(() => {
        // set initial vh

        // use VisualViewport API if available, it gives more accurate dimensions when iOS software keyboard is active
        if (window.visualViewport) {
            const handleViewportScroll = throttle(handleViewportResize, 300);
            handleViewportResize();
            window.visualViewport.addEventListener(
                "resize",
                handleViewportResize
            );
            window.visualViewport.addEventListener(
                "scroll",
                handleViewportScroll
            );

            return () => {
                window.visualViewport?.removeEventListener(
                    "resize",
                    handleViewportResize
                );
                window.visualViewport?.removeEventListener(
                    "scroll",
                    handleViewportScroll
                );
            };
        } else {
            // fallback to Window API
            handleWindowResize();
            window.addEventListener("resize", handleWindowResize);
            return () => {
                window.removeEventListener("resize", handleWindowResize);
            };
        }
    }, []);

    return {
        verticalHeight,
        offsetTop,
    };
};
