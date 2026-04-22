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
