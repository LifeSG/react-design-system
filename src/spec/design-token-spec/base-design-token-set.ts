import { css } from "styled-components";
import { Color } from "../../color/color";
import { DesignTokenSet } from "../../design-token/types";

export const BaseDesignTokenSet: DesignTokenSet = {
    InputBoxShadow: css`
        inset 0 0 4px 0px ${Color.Shadow.Accent}
    `,
    InputErrorBoxShadow: css`
        inset 0 0 4px 0px ${Color.Shadow.Red}
    `,
    ElevationBoxShadow: css`
      0px 2px 8px ${Color.Shadow.Elevation}
    `,
    Table: {
        Header: "#F5F5F5",
        Cell: {
            Primary: "#FBFBFB",
            Secondary: "#FFFFFF",
            Selected: "#F9F6FF",
            Hover: "#E8E1F5",
        },
    },
    Button: {
        Danger: {
            BackgroundColor: "#CB2213",
            Border: "#CB2213",
            Hover: "#750C0C",
            Primary: "#CB2213",
        },
    },
};
