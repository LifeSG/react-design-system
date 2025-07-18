import { RefObject, useCallback, useState } from "react";
import { useResizeDetector } from "react-resize-detector";

interface Options<T> {
    maxWidth: number;
    targetRef?: RefObject<T>;
}

/**
 * Detect if container width satisfies the breakpoint
 */
export const useContainerQuery = <T extends HTMLElement>({
    maxWidth,
    targetRef,
}: Options<T>): boolean => {
    const [belowBreakpoint, setBelowBreakpoint] = useState(false);

    const handleResize = useCallback(
        (width: any) => {
            setBelowBreakpoint(width <= maxWidth);
        },
        [maxWidth]
    );

    useResizeDetector<T>({
        targetRef,
        refreshMode: "throttle",
        refreshRate: 300,
        handleHeight: false,
        onResize: handleResize,
    });

    return belowBreakpoint;
};
