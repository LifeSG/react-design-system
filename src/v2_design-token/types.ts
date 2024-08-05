import { SimpleInterpolation, css } from "styled-components";

/** @deprecated */
export type v2_CssValue = SimpleInterpolation | ReturnType<typeof css>;

/** @deprecated */
export interface v2_DesignTokenSet {
    InputBoxShadow: v2_CssValue;
    InputErrorBoxShadow: v2_CssValue;
    ElevationBoxShadow: v2_CssValue;
    Table: {
        Header: v2_CssValue;
        Cell: {
            Primary: v2_CssValue;
            Secondary: v2_CssValue;
            Selected: v2_CssValue;
            Hover: v2_CssValue;
        };
    };
    Button: {
        Danger: {
            Hover: v2_CssValue;
            BackgroundColor: v2_CssValue;
            Primary: v2_CssValue;
            Border: v2_CssValue;
        };
    };
}

/** @deprecated */
export type v2_DesignTokenSetOptions = Partial<v2_DesignTokenSet>;
