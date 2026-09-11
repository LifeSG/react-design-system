import type { ThemeFontPreset, ThemeType } from "../types";

const WISE_PRODUCT_THEMES = new Set<ThemeType>([
    "vica",
    "websg",
    "wise",
    "wogaa",
]);

const SPORTSG_PRODUCT_THEMES = new Set<ThemeType>(["sportsg-orange"]);

export const getDefaultFontPresetForTheme = (
    theme: ThemeType
): ThemeFontPreset | undefined => {
    if (WISE_PRODUCT_THEMES.has(theme)) {
        return "wise-public";
    }
    if (SPORTSG_PRODUCT_THEMES.has(theme)) {
        return "sportsg-gms";
    }
    return undefined;
};
