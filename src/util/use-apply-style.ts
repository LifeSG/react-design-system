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
    value: string | number | (({ theme }: { theme: any }) => string) | undefined
) => {
    useIsomorphicLayoutEffect(() => {
        const element = ref?.current;
        if (!element) return;

        if (value !== undefined && value !== null) {
            let valueToApply: string;
            if (typeof value === "function") {
                valueToApply = value({ theme: undefined });
            } else if (typeof value === "number") {
                valueToApply = value + "px";
            } else {
                valueToApply = value;
            }
            element.style.setProperty(variableName, valueToApply);
        } else {
            element.style.removeProperty(variableName);
        }
    }, [ref, variableName, value]);
};
