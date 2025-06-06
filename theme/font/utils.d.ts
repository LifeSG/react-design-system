import { FontSet, FontSpecSet } from "../types";
import { FontSetAdditionalOptions } from "./types";
export declare const generateFontCSS: (fontSizeKey: keyof FontSpecSet, fontWeightKey: keyof FontSpecSet, lineHeightKey: keyof FontSpecSet, letterSpacingKey: keyof FontSpecSet, options?: FontSetAdditionalOptions) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare const getFontSet: (options?: FontSetAdditionalOptions) => FontSet;
