import type { V3_FontSet, V3_FontSpecSet } from "../types";
import type { V3_FontSetAdditionalOptions } from "./types";
export declare const generateFontCSS: (fontSizeKey: keyof V3_FontSpecSet, fontWeightKey: keyof V3_FontSpecSet, lineHeightKey: keyof V3_FontSpecSet, letterSpacingKey: keyof V3_FontSpecSet, options?: V3_FontSetAdditionalOptions) => import("styled-components").RuleSet<object>;
export declare const getFontSet: (options?: V3_FontSetAdditionalOptions) => V3_FontSet;
