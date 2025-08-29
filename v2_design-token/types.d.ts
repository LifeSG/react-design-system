import { css } from "styled-components";
/** @deprecated */
export type CssValue = ReturnType<typeof css> | string | number;
/** @deprecated */
export interface V2_DesignTokenSet {
    InputBoxShadow: CssValue;
    InputErrorBoxShadow: CssValue;
    ElevationBoxShadow: CssValue;
    Table: {
        Header: CssValue;
        Cell: {
            Primary: CssValue;
            Secondary: CssValue;
            Selected: CssValue;
            Hover: CssValue;
        };
    };
    Button: {
        Danger: {
            Hover: CssValue;
            BackgroundColor: CssValue;
            Primary: CssValue;
            Border: CssValue;
        };
    };
}
/** @deprecated */
export type V2_DesignTokenSetOptions = Partial<V2_DesignTokenSet>;
