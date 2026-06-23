import type { CSSProperties, RefObject } from "react";
import type { CSSVariableKey } from "../types";
type StyleValue = string | number | null | undefined;
export type ApplyStyleMap = ({
    [K in keyof CSSStyleDeclaration]?: StyleValue;
} & {
    [K in CSSVariableKey]?: StyleValue;
} & {
    [K in `--${string}`]?: StyleValue;
}) | CSSProperties;
/**
 * Hook to apply styles to a HTML DOM element. Use when you need to apply inline
 * styles but cannot use the inline React `style` prop due to strict CSP rules
 *
 * @param ref The HTML element to receive the styles
 * @param styles The styles to apply, in the same format as the React `style`
 * prop, or CSS variables. Values will be normalised to strings and numeric
 * values will have "px" appended for properties that typically require units.
 */
export declare function useApplyStyle<TElement extends HTMLElement>(ref: RefObject<TElement | null>, styles: ApplyStyleMap | undefined): void;
export {};
