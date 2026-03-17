import {
    BorderThickness,
    Colour,
    ColourCSSVariableString,
    Radius,
    RadiusCSSVariableString,
    getEffectiveTokenOrCustom,
    getTokenOrDefault,
    isTokenFromSet,
    isTokenWithPrefix,
    toCssValue,
} from "../theme";
import { ValueOf } from "../util/utility-types";
import { DashedBorderProps } from "./types";

const radiusTokenSet = new Set<string>(Object.values(Radius));
const thicknessTokenSet = new Set<string>(Object.values(BorderThickness));

const isRadiusToken = (value: unknown): value is RadiusCSSVariableString => {
    return isTokenFromSet<RadiusCSSVariableString>(value, radiusTokenSet);
};

const isThicknessToken = (
    value: unknown
): value is ValueOf<typeof BorderThickness> => {
    return isTokenFromSet<ValueOf<typeof BorderThickness>>(
        value,
        thicknessTokenSet
    );
};

const isColourToken = (value: unknown): value is ColourCSSVariableString => {
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

export const getThicknessToken = (
    thickness: NonNullable<DashedBorderProps["thickness"]>
) => {
    return getTokenOrDefault(
        thickness,
        isThicknessToken,
        BorderThickness["width-040"]
    );
};

export const getRadiusToken = (
    radius: NonNullable<DashedBorderProps["radius"]>
) => {
    return getTokenOrDefault(radius, isRadiusToken, Radius.sm);
};

export const getColourToken = (
    colour: NonNullable<DashedBorderProps["colour"]>
) => {
    return getTokenOrDefault(colour, isColourToken, Colour["border"]);
};

export const getBackgroundColorToken = (
    backgroundColor: DashedBorderProps["backgroundColor"]
) => {
    return getTokenOrDefault(backgroundColor, isColourToken, Colour.bg);
};

export const getEffectiveThickness = ({
    thickness,
    resolvedThickness,
}: {
    thickness: NonNullable<DashedBorderProps["thickness"]>;
    resolvedThickness: string | undefined;
}) => {
    return getEffectiveTokenOrCustom({
        value: thickness,
        resolvedValue: resolvedThickness,
        guard: isThicknessToken,
        normalizeCustom: toCssValue,
    });
};

export const getEffectiveRadius = ({
    radius,
    resolvedRadius,
}: {
    radius: NonNullable<DashedBorderProps["radius"]>;
    resolvedRadius: string | undefined;
}) => {
    return getEffectiveTokenOrCustom({
        value: radius,
        resolvedValue: resolvedRadius,
        guard: isRadiusToken,
        normalizeCustom: toCssValue,
    });
};

export const getEffectiveColour = ({
    colour,
    resolvedColour,
}: {
    colour: NonNullable<DashedBorderProps["colour"]>;
    resolvedColour: string | undefined;
}) => {
    return getEffectiveTokenOrCustom({
        value: colour,
        resolvedValue: resolvedColour,
        guard: isColourToken,
        normalizeCustom: String,
    });
};

export const getEffectiveBackgroundColor = ({
    backgroundColor,
    resolvedBackgroundColor,
}: {
    backgroundColor: DashedBorderProps["backgroundColor"];
    resolvedBackgroundColor: string | undefined;
}) => {
    if (!backgroundColor) {
        return "none";
    }

    return getEffectiveTokenOrCustom({
        value: backgroundColor,
        resolvedValue: resolvedBackgroundColor,
        guard: isColourToken,
        normalizeCustom: String,
    });
};
