import { RadiusCSSVariableString } from "../types";

export const Radius = {
    none: "var(--fds-radius-none)",
    xs: "var(--fds-radius-xs)",
    sm: "var(--fds-radius-sm)",
    md: "var(--fds-radius-md)",
    lg: "var(--fds-radius-lg)",
    full: "var(--fds-radius-full)",
} as const satisfies Record<string, RadiusCSSVariableString>;
