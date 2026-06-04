import type { CSSProperties } from "react";
import type { CSSVariableString } from "../types";
/**
 * Extracts an fds CSS variable name from raw token input.
 * Supports values like "var(--fds-breakpoint-sm-max)" and "--fds-breakpoint-sm-max".
 */
export declare const extractFdsCssVariableName: (value: string | undefined) => `--fds-${string}` | undefined;
/**
 * Parse a CSS variable string and return its computed value.
 * @param cssVarString CSS variable string (e.g., "var(--fds-breakpoint-xxs-min)")
 * @param sourceElement Element to compute the CSS variable value from
 * @returns The CSS variable value, or an empty string if not found or invalid
 */
export declare function parseCSSVariableValue(cssVarString: CSSVariableString | undefined, sourceElement: HTMLElement | null): string;
/**
 * Parse a pixel or rem value and return its numeric value.
 * @param cssValue CSS unit value (e.g., "12px", "1.5rem")
 * @returns Parsed numeric value, or 0 if the value is not px/rem or invalid
 */
export declare function parsePxOrRemValue(cssValue: string): number;
/**
 * Normalizes a CSS length value and accepts px/rem or unitless zero.
 * Returns undefined for invalid inputs.
 */
export declare const normalizeCssLengthValue: (value: string | undefined) => string | undefined;
/**
 * Extracts inline token CSS custom properties from the theme element.
 */
export declare const getInheritedInlineCssVariables: (themeElement: HTMLElement | null) => CSSProperties;
/**
 * Convert a numeric value to a CSS unit string (e.g., 12 → "12px"). Returns null for non-numeric values.
 */
export declare const formatUnitValue: (value: unknown, unit: string) => string | null;
