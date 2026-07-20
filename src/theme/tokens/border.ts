/**
 * Border width tokens.
 * @catalog
 */
export const BorderThickness = {
    "width-005": "var(--fds-border-width-005)",
    "width-010": "var(--fds-border-width-010)",
    "width-020": "var(--fds-border-width-020)",
    "width-040": "var(--fds-border-width-040)",
} as const;

/**
 * Border style tokens.
 * @catalog
 */
export const BorderStyle = {
    solid: "var(--fds-border-style-solid)",
} as const;

/**
 * Border tokens consisting of border width and border style.
 * @catalog
 */
export const Border = {
    ...BorderThickness,
    ...BorderStyle,
} as const;
