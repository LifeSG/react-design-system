import type { CSSProperties, RefObject } from "react";

import { useIsomorphicLayoutEffect } from "../../util";
import type { CSSVariableString } from "../types";

type StyleValue = string | number | null | undefined;

type ExtractCleanCSSVariableName<T extends string> =
    T extends `var(${infer Name})` ? Name : never;
type CSSVariableKey = ExtractCleanCSSVariableName<CSSVariableString>;

/**
 * Style map accepted by `useApplyStyle`. Supports camelCase CSS properties,
 * theme CSS variable keys, and arbitrary `--custom-property` names.
 */
export type ApplyStyleMap =
    | ({
          [K in keyof CSSStyleDeclaration]?: StyleValue;
      } & {
          [K in CSSVariableKey]?: StyleValue;
      } & {
          [K in `--${string}`]?: StyleValue;
      })
    | CSSProperties;

/**
 * List of properties that expect units but can be provided as
 * numbers through React style prop
 */
const numericCssStyleProperties: Set<keyof CSSStyleDeclaration> = new Set([
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
]);

/**
 * Normalises standard CSS property names from camelCase to kebab-case
 * - `backgroundColor` → `background-color`
 * - `WebkitLineClamp` → `-webkit-line-clamp`
 * - `--custom-variable` → `--custom-variable`
 *
 * Ref
 * https://github.com/facebook/react/blob/ad5dfc82b7107728da1430dd142f75b97b684dac/packages/react-dom-bindings/src/shared/hyphenateStyleName.js#L26
 */
function normaliseCssProperty(key: string): string {
    if (key.startsWith("--")) return key;

    const kebabCased = key.replace(/([A-Z])/g, "-$1").toLowerCase();

    if (/^(o|moz|ms|webkit)-/.test(kebabCased)) {
        return `-${kebabCased}`;
    }

    return kebabCased;
}

function normaliseCssValue(key: string, value: string | number): string {
    if (
        typeof value === "number" &&
        numericCssStyleProperties.has(key as keyof CSSStyleDeclaration)
    ) {
        return `${value}px`;
    }

    return String(value);
}

/**
 * Hook to apply styles to a HTML DOM element. Use when you need to apply inline
 * styles but cannot use the inline React `style` prop due to strict CSP rules.
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

        Object.entries(styles).forEach(([key, value]: [string, StyleValue]) => {
            const normalisedKey = normaliseCssProperty(key);

            if (value == null) {
                element.style.removeProperty(normalisedKey);
                return;
            }

            const normalisedValue = normaliseCssValue(key, value);
            element.style.setProperty(normalisedKey, normalisedValue);
        });
    }, [ref, styles]);
}
