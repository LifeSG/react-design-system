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
