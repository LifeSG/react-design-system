type FontWeights = "Regular" | "Semibold" | "Bold" | "Light";
export type FontWeightSpec = Record<FontWeights, string>;
export type TFontFamily = Record<string, FontWeightSpec | string>;
export {};
