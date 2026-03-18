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
import type { ValueOf } from "../util/utility-types";

const radiusTokenSet = new Set<string>(Object.values(Radius));
const thicknessTokenSet = new Set<string>(Object.values(BorderThickness));

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
 * @param args.radius Resolved CSS border radius for the SVG rect.
 * @param args.colour Resolved stroke color.
 * @param args.thickness Resolved stroke width.
 * @param args.enabled Whether border stroke should be rendered.
 * @returns Encoded SVG as CSS `url(...)` string.
 */
export const createSvgBackgroundImage = ({
    radius,
    colour,
    thickness,
    enabled,
}: {
    radius: string;
    colour: string;
    thickness: string;
    enabled: boolean;
}) => {
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
