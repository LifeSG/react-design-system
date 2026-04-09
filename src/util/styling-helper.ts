import type {
    ColourCSSVariableString,
    RadiusCSSVariableString,
} from "../theme";
import {
    BorderThickness,
    isTokenFromSet,
    isTokenWithPrefix,
    Radius,
} from "../theme";
import type { ValueOf } from "./utility-types";

// TODO: migrate dashed-border.utils.ts to recycle these helper functions
const radiusTokenSet = new Set<string>(Object.values(Radius));
const thicknessTokenSet = new Set<string>(Object.values(BorderThickness));

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

export const isRadiusToken = (
    value: unknown
): value is RadiusCSSVariableString => {
    return isTokenFromSet<RadiusCSSVariableString>(value, radiusTokenSet);
};

export const isThicknessToken = (
    value: unknown
): value is ValueOf<typeof BorderThickness> => {
    return isTokenFromSet<ValueOf<typeof BorderThickness>>(
        value,
        thicknessTokenSet
    );
};

export const isColourToken = (
    value: unknown
): value is ColourCSSVariableString => {
    return isTokenWithPrefix<ColourCSSVariableString>(
        value,
        "var(--fds-colour-"
    );
};

/**
 * Builds a data-URI SVG used as the dashed border background image.
 * @param options SVG background image options.
 * @returns Encoded SVG as CSS `url(...)` string.
 */
export const createSvgBackgroundImage = ({
    colour,
    enabled,
    radius,
    thickness,
}: CreateSvgBackgroundImageOptions) => {
    const svg = `
    <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
        <rect
            width='100%' height='100%' fill='none'
            rx='${radius}'
            ry='${radius}'
            stroke='${enabled ? colour : "none"}'
            stroke-width='${enabled ? thickness : 0}'
            stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'
        />
    </svg>`;

    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};
