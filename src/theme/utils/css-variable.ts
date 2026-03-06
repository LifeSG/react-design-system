import { CSSVariableString } from "../types";

/**
 * Parse a CSS variable string and return its numeric value
 * @param cssVarString CSS variable string (e.g., "var(--fds-breakpoint-xxs-min)")
 * @returns The numeric value of the CSS variable, or 0 if not found or invalid
 */
export function parseCSSVariableValue(cssVarString: CSSVariableString): number {
    if (typeof window === "undefined") return 0;

    const variableName = (cssVarString as string).match(/--fds-[\w-]+/)?.[0];
    if (!variableName) return 0;

    const value = getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim();
    const numValue = parseFloat(value);

    // we only care about values with a unit (e.g. "12px"); unitless numbers should be ignored
    const hasUnit = /[a-z]+$/i.test(value);
    if (isNaN(numValue) || !hasUnit) {
        return 0;
    }

    return numValue;
}
