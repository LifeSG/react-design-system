import { RefObject } from "react";
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";

/**
 * Hook to apply a dynamic style as a CSS variable on an HTML element
 * @param variableName - The CSS variable name (e.g., "--my-color")
 * @param value - The value for the CSS variable
 */
export const useApplyStyle = <T extends HTMLElement = HTMLDivElement>(
    ref: RefObject<T>,
    variableName: string,
    value: string | number | undefined
) => {
    useIsomorphicLayoutEffect(() => {
        const element = ref?.current;
        if (!element) return;

        if (value !== undefined && value !== null) {
            element.style.setProperty(variableName, String(value));
        } else {
            element.style.removeProperty(variableName);
        }
    }, [ref, variableName, value]);
};
