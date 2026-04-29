import kebabCase from "lodash/kebabCase";
import type { CSSProperties, RefObject } from "react";

import { useIsomorphicLayoutEffect } from "../../util";
import type { CSSVariableKey } from "../types";

type StyleValue = string | number | null | undefined;

export type ApplyStyleMap =
    | ({
          [K in keyof CSSStyleDeclaration]?: StyleValue;
      } & {
          [K in CSSVariableKey]?: StyleValue;
      } & {
          [K in `--${string}`]?: StyleValue;
      })
    | CSSProperties;

/** list of properties that expect units but can be provided as numbers through React style prop */
const numericCssStyleProperties: (keyof CSSStyleDeclaration)[] = [
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "margin",
    "marginTop",
    "marginLeft",
    "marginRight",
    "marginBottom",
    "padding",
    "paddingTop",
    "paddingLeft",
    "paddingRight",
    "paddingBottom",
];

function normaliseCssValue(key: string, value: unknown): string {
    if (value == null) return "";

    if (
        typeof value === "number" &&
        numericCssStyleProperties.includes(key as keyof CSSStyleDeclaration)
    ) {
        return `${value}px`;
    }

    return String(value);
}

/**
 * Hook to apply styles to a HTML DOM element. Use when you need to apply inline
 * styles but cannot use the inline React `style` prop due to strict CSP rules
 *
 * @param ref The HTML element to receive the styles
 * @param styles The styles to apply, in the same format as the React `style`
 * prop, or CSS variables. Values will be normalised to strings and numeric
 * values will have "px" appended for properties that typically require units.
 */
export function useApplyStyle<TElement extends HTMLElement>(
    ref: RefObject<TElement | null>,
    styles: ApplyStyleMap | undefined
) {
    useIsomorphicLayoutEffect(() => {
        const element = ref?.current;
        if (!element || !styles) return;

        Object.entries(styles).forEach(([key, value]) => {
            const normalisedKey = key.startsWith("--") ? key : kebabCase(key);

            if (value == null) {
                element.style.removeProperty(normalisedKey);
                return;
            }

            const normalisedValue = normaliseCssValue(key, value);
            element.style.setProperty(normalisedKey, normalisedValue);
        });
    }, [ref, styles]);
}
