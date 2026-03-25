import type { CSSProperties } from "react";
import type { CSSVariableString } from "../types";
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
 * Extracts inline token CSS custom properties from the theme element.
 */
export declare const getInheritedInlineCssVariables: (themeElement: HTMLElement | null) => CSSProperties;
