import type { ColourCSSVariableString, RadiusCSSVariableString } from "../theme";
import { BorderThickness } from "../theme";
import type { ValueOf } from "./utility-types";
export declare const isRadiusToken: (value: unknown) => value is RadiusCSSVariableString;
export declare const isThicknessToken: (value: unknown) => value is ValueOf<typeof BorderThickness>;
export declare const isColourToken: (value: unknown) => value is ColourCSSVariableString;
