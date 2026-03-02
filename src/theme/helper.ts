type FontSize =
    | "heading-xxl"
    | "heading-xl"
    | "heading-lg"
    | "heading-md"
    | "heading-sm"
    | "heading-xs"
    | "body-baseline"
    | "body-md"
    | "body-sm"
    | "body-xs"
    | "form-label"
    | "form-description";

type FontWeight = "light" | "regular" | "semibold" | "bold";

const sizeVarMap: Record<FontSize, { size: string; lh: string; ls: string }> = {
    "heading-xxl": {
        size: "var(--fds-heading-size-xxl)",
        lh: "var(--fds-heading-lh-xxl)",
        ls: "var(--fds-heading-ls-xxl)",
    },
    "heading-xl": {
        size: "var(--fds-heading-size-xl)",
        lh: "var(--fds-heading-lh-xl)",
        ls: "var(--fds-heading-ls-xl)",
    },
    "heading-lg": {
        size: "var(--fds-heading-size-lg)",
        lh: "var(--fds-heading-lh-lg)",
        ls: "var(--fds-heading-ls-lg)",
    },
    "heading-md": {
        size: "var(--fds-heading-size-md)",
        lh: "var(--fds-heading-lh-md)",
        ls: "var(--fds-heading-ls-md)",
    },
    "heading-sm": {
        size: "var(--fds-heading-size-sm)",
        lh: "var(--fds-heading-lh-sm)",
        ls: "var(--fds-heading-ls-sm)",
    },
    "heading-xs": {
        size: "var(--fds-heading-size-xs)",
        lh: "var(--fds-heading-lh-xs)",
        ls: "var(--fds-heading-ls-xs)",
    },
    "body-baseline": {
        size: "var(--fds-body-size-baseline)",
        lh: "var(--fds-body-lh-baseline)",
        ls: "var(--fds-body-ls-baseline)",
    },
    "body-md": {
        size: "var(--fds-body-size-md)",
        lh: "var(--fds-body-lh-md)",
        ls: "var(--fds-body-ls-md)",
    },
    "body-sm": {
        size: "var(--fds-body-size-sm)",
        lh: "var(--fds-body-lh-sm)",
        ls: "var(--fds-body-ls-sm)",
    },
    "body-xs": {
        size: "var(--fds-body-size-xs)",
        lh: "var(--fds-body-lh-xs)",
        ls: "var(--fds-body-ls-xs)",
    },
    "form-label": {
        size: "var(--fds-form-label-size)",
        lh: "var(--fds-form-label-lh)",
        ls: "var(--fds-form-label-ls)",
    },
    "form-description": {
        size: "var(--fds-form-description-size)",
        lh: "var(--fds-form-description-lh)",
        ls: "var(--fds-form-description-ls)",
    },
};

const weightVarMap: Record<FontWeight, string> = {
    light: "var(--fds-weight-light)",
    regular: "var(--fds-weight-regular)",
    semibold: "var(--fds-weight-semibold)",
    bold: "var(--fds-weight-bold)",
};

/**
 * Generates a CSS font shorthand string using FDS CSS variables.
 *
 * @example
 * generateFont("heading-xxl", "light")
 * // => "font-family: var(--fds-font-family); font-size: var(--fds-heading-size-xxl); ..."
 */
export const generateFont = (size: FontSize, weight: FontWeight): string => {
    const { size: s, lh, ls } = sizeVarMap[size];
    const w = weightVarMap[weight];
    return `font-family: var(--fds-font-family); font-size: ${s}; font-weight: ${w}; line-height: ${lh}; letter-spacing: ${ls};`;
};
