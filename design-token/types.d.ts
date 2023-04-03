import { SimpleInterpolation, css } from "styled-components";
export declare type CssValue = SimpleInterpolation | ReturnType<typeof css>;
export interface DesignTokenSet {
    InputBoxShadow: CssValue;
    InputErrorBoxShadow: CssValue;
    ElevationBoxShadow: CssValue;
}
export declare type DesignTokenSetOptions = Partial<DesignTokenSet>;
