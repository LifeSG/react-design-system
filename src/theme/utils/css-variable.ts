import type { CSSProperties } from "react";

import type { CSSVariableString } from "../types";

type InlineCssVariables = Record<`--${string}`, string>;

const DEFAULT_FONT_SIZE_PX = 16;
const CSS_PX_OR_REM_CAPTURE_PATTERN = /^(-?\d*\.?\d+)(px|rem)$/i;

/**
 * Extracts an fds CSS variable name from raw token input.
 * Supports values like `"var(--fds-breakpoint-sm-max)"` and `"--fds-breakpoint-sm-max"`.
 *
 * @returns The extracted `--fds-*` variable name, or `undefined` if the input
 * does not contain a valid fds token.
 */
export const extractFdsCssVariableName = (
    value: string | undefined
): `--fds-${string}` | undefined => {
    if (!value) return undefined;

    const variableName = /--fds-[\w-]+/.exec(value)?.[0];

    if (!variableName) {
        return undefined;
    }

    return variableName as `--fds-${string}`;
};

/**
 * Parse a CSS variable string and return its computed value.
 * @param cssVarString CSS variable string (e.g., "var(--fds-breakpoint-xxs-min)")
 * @param sourceElement Element to compute the CSS variable value from
 * @returns The CSS variable value, or an empty string if not found or invalid
 */
export function parseCSSVariableValue(
    cssVarString: CSSVariableString | undefined,
    sourceElement: HTMLElement | null
): string {
    if (!cssVarString) return "";

    if (!globalThis.window || !sourceElement) {
        console.warn(
            `Cannot parse CSS variable value for "${cssVarString}" because window or sourceElement is not available.`
        );
        return "";
    }

    const variableName = extractFdsCssVariableName(cssVarString);
    if (!variableName) {
        console.warn(
            `Invalid CSS variable string: ${cssVarString}. Expected format: var(--fds-token-name)`
        );
        return "";
    }

    return getComputedStyle(sourceElement)
        .getPropertyValue(variableName)
        .trim();
}

/**
 * Parse a pixel or rem value and return its numeric value.
 * @param cssValue CSS unit value (e.g., "12px", "1.5rem")
 * @returns Parsed numeric value, or 0 if the value is not px/rem or invalid
 */
export function parsePxOrRemValue(cssValue: string): number {
    const value = cssValue.trim();
    const match = CSS_PX_OR_REM_CAPTURE_PATTERN.exec(value);
    if (!match) return 0;

    const parsedValue = Number.parseFloat(match[1]);
    if (Number.isNaN(parsedValue)) return 0;

    const unit = match[2].toLowerCase();
    if (unit === "px") return parsedValue;

    const rootFontSize = globalThis.window
        ? Number.parseFloat(getComputedStyle(document.documentElement).fontSize)
        : DEFAULT_FONT_SIZE_PX;

    const resolvedRootFontSize = Number.isNaN(rootFontSize)
        ? DEFAULT_FONT_SIZE_PX
        : rootFontSize;

    return parsedValue * resolvedRootFontSize;
}

const mergeInlineCssVariables = (
    element: HTMLElement,
    target: InlineCssVariables
) => {
    const { style } = element;

    for (let i = 0; i < style.length; i++) {
        const propertyName = style.item(i);
        if (!propertyName?.startsWith("--fds")) continue;

        const value = style.getPropertyValue(propertyName).trim();
        if (!value) continue;

        target[propertyName as `--${string}`] = value;
    }
};

/**
 * Extracts inline token CSS custom properties from the theme element.
 *
 * @returns An object of `--fds-*` properties, or `{}` when the element is
 * `null` or has no inline styles.
 */
export const getInheritedInlineCssVariables = (
    themeElement: HTMLElement | null
): CSSProperties => {
    if (!themeElement || themeElement.style.length === 0) return {};

    const variables: InlineCssVariables = {};
    mergeInlineCssVariables(themeElement, variables);

    return variables;
};

/**
 * Convert a numeric value to a CSS unit string (e.g., `12` → `"12px"`).
 *
 * @returns The formatted string, or `null` for non-numeric values.
 */
export const formatUnitValue = (
    value: unknown,
    unit: string
): string | null => {
    if (typeof value === "number") {
        return `${value}${unit}`;
    }
    return null;
};
