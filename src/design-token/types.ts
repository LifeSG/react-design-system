import {
    FlattenSimpleInterpolation,
    Interpolation,
    InterpolationValue,
} from "styled-components";

export type CssValue =
    | Interpolation<any>
    | FlattenSimpleInterpolation
    | InterpolationValue;

export interface DesignTokenSet {
    InputBoxShadow: CssValue;
    InputErrorBoxShadow: CssValue;
}

export type DesignTokenSetOptions = Partial<DesignTokenSet>;
