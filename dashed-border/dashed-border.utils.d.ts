import type { ColourCSSVariableString, RadiusCSSVariableString } from "../theme";
import { BorderThickness } from "../theme";
import type { ValueOf } from "../util/utility-types";
export interface CreateSvgBackgroundImageOptions {
    /** Resolved stroke color for the dashed border. */
    colour: string;
    /** Whether dashed stroke should be rendered. */
    enabled: boolean;
    /** Resolved CSS border radius for the SVG rect. */
    radius: string;
    /** Resolved stroke width for the dashed border. */
    thickness: string;
}
export declare const isRadiusToken: (value: unknown) => value is RadiusCSSVariableString;
export declare const isThicknessToken: (value: unknown) => value is ValueOf<typeof BorderThickness>;
export declare const isColourToken: (value: unknown) => value is ColourCSSVariableString;
/**
 * Builds a data-URI SVG used as the dashed border background image.
 * @param options SVG background image options.
 * @returns Encoded SVG as CSS `url(...)` string.
 */
export declare const createSvgBackgroundImage: ({ colour, enabled, radius, thickness, }: CreateSvgBackgroundImageOptions) => string;
