import type { CSSProperties } from "react";

const BREAKPOINT_THEME_VARIABLES = {
    "--fds-breakpoint-xxs-min": "0",
    "--fds-breakpoint-xxs-max": "320px",
    "--fds-breakpoint-xs-min": "321px",
    "--fds-breakpoint-xs-max": "375px",
    "--fds-breakpoint-sm-min": "376px",
    "--fds-breakpoint-sm-max": "480px",
    "--fds-breakpoint-md-min": "481px",
    "--fds-breakpoint-md-max": "768px",
    "--fds-breakpoint-lg-min": "769px",
    "--fds-breakpoint-lg-max": "1200px",
    "--fds-breakpoint-xl-min": "1201px",
    "--fds-breakpoint-xl-max": "1440px",
    "--fds-breakpoint-xxl-min": "1441px",
} as const;

/**
 * Setup theme CSS variables for testing
 */
export function setupThemeVariables(
    targetElement: HTMLElement = document.documentElement
) {
    Object.entries(BREAKPOINT_THEME_VARIABLES).forEach(([key, value]) => {
        targetElement.style.setProperty(key, value);
    });
}

export function getThemeVariablesStyle(
    overrides: CSSProperties = {}
): CSSProperties {
    return {
        ...BREAKPOINT_THEME_VARIABLES,
        ...overrides,
    } as CSSProperties;
}
