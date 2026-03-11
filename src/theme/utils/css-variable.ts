import type { CSSProperties } from "react";

import type { CSSVariableString } from "../types";

type InlineCssVariables = Record<`--${string}`, string>;

const DEFAULT_FONT_SIZE_PX = 16;

/**
 * Parse a CSS variable string and return its computed value.
 * @param cssVarString CSS variable string (e.g., "var(--fds-breakpoint-xxs-min)")
 * @returns The CSS variable value, or an empty string if not found or invalid
 */
export function parseCSSVariableValue(cssVarString: CSSVariableString): string {
    if (!globalThis.window) return "";

    const variableName = /--fds-[\w-]+/.exec(cssVarString as string)?.[0];
    if (!variableName) {
        console.warn(
            `Invalid CSS variable string: ${cssVarString}. Expected format: var(--fds-token-name)`
        );
        return "";
    }

    return getComputedStyle(document.documentElement)
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
    const match = /^(-?\d*\.?\d+)(px|rem)$/i.exec(value);
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
 */
export const getInheritedInlineCssVariables = (
    themeElement: HTMLElement | null
): CSSProperties => {
    if (!themeElement || themeElement.style.length === 0) return {};

    const variables: InlineCssVariables = {};
    mergeInlineCssVariables(themeElement, variables);

    return variables;
};
