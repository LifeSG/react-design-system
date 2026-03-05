/**
 * Parse a CSS variable string and return its numeric value
 * @param cssVarString CSS variable string (e.g., "var(--fds-breakpoint-xxs-min)")
 * @returns The numeric value of the CSS variable, or 0 if not found or invalid
 */
export function parseCSSVariableValue(cssVarString: string): number {
    if (typeof window === "undefined") return 0;

    const variableName = cssVarString.match(/--[\w-]+/)?.[0];
    if (!variableName) return 0;

    const value = getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim();
    const numValue = parseFloat(value);

    return isNaN(numValue) ? 0 : numValue;
}
