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
        size: "var(--fds-font-heading-size-xxl)",
        lh: "var(--fds-font-heading-lh-xxl)",
        ls: "var(--fds-font-heading-ls-xxl)",
    },
    "heading-xl": {
        size: "var(--fds-font-heading-size-xl)",
        lh: "var(--fds-font-heading-lh-xl)",
        ls: "var(--fds-font-heading-ls-xl)",
    },
    "heading-lg": {
        size: "var(--fds-font-heading-size-lg)",
        lh: "var(--fds-font-heading-lh-lg)",
        ls: "var(--fds-font-heading-ls-lg)",
    },
    "heading-md": {
        size: "var(--fds-font-heading-size-md)",
        lh: "var(--fds-font-heading-lh-md)",
        ls: "var(--fds-font-heading-ls-md)",
    },
    "heading-sm": {
        size: "var(--fds-font-heading-size-sm)",
        lh: "var(--fds-font-heading-lh-sm)",
        ls: "var(--fds-font-heading-ls-sm)",
    },
    "heading-xs": {
        size: "var(--fds-font-heading-size-xs)",
        lh: "var(--fds-font-heading-lh-xs)",
        ls: "var(--fds-font-heading-ls-xs)",
    },
    "body-baseline": {
        size: "var(--fds-font-body-size-baseline)",
        lh: "var(--fds-font-body-lh-baseline)",
        ls: "var(--fds-font-body-ls-baseline)",
    },
    "body-md": {
        size: "var(--fds-font-body-size-md)",
        lh: "var(--fds-font-body-lh-md)",
        ls: "var(--fds-font-body-ls-md)",
    },
    "body-sm": {
        size: "var(--fds-font-body-size-sm)",
        lh: "var(--fds-font-body-lh-sm)",
        ls: "var(--fds-font-body-ls-sm)",
    },
    "body-xs": {
        size: "var(--fds-font-body-size-xs)",
        lh: "var(--fds-font-body-lh-xs)",
        ls: "var(--fds-font-body-ls-xs)",
    },
    "form-label": {
        size: "var(--fds-font-form-label-size)",
        lh: "var(--fds-font-form-label-lh)",
        ls: "var(--fds-font-form-label-ls)",
    },
    "form-description": {
        size: "var(--fds-font-form-description-size)",
        lh: "var(--fds-font-form-description-lh)",
        ls: "var(--fds-font-form-description-ls)",
    },
};

const weightVarMap: Record<FontWeight, string> = {
    light: "var(--fds-font-weight-light)",
    regular: "var(--fds-font-weight-regular)",
    semibold: "var(--fds-font-weight-semibold)",
    bold: "var(--fds-font-weight-bold)",
};

/**
 * Generates a CSS font shorthand string using FDS CSS variables.
 *
 * @example
 * generateFont("heading-xxl", "light")
 * // => "font-family: var(--fds-font-family); font-variant: var(--fds-font-variant); ..."
 */
export const generateFont = (
    size: FontSize,
    weight: FontWeight,
    options?: { noCommonLigatures?: boolean; fontVariant?: string }
): string => {
    const { size: s, lh, ls } = sizeVarMap[size];
    const w = weightVarMap[weight];

    const extraVariant = [
        options?.fontVariant,
        options?.noCommonLigatures ? "no-common-ligatures" : "",
    ]
        .filter((v) => Boolean(v))
        .join(" ");

    const fontVariant = `var(--fds-font-variant)${
        extraVariant ? ` ${extraVariant}` : ""
    }`;

    return `font-family: var(--fds-font-family); font-variant: ${fontVariant}; font-size: ${s}; font-weight: ${w}; line-height: ${lh}; letter-spacing: ${ls};`;
};
