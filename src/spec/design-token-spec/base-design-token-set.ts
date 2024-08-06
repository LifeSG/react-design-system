import { css } from "styled-components";
import { v2_Color } from "../../v2_color/color";
import { v2_DesignTokenSet } from "../../v2_design-token/types";

export const BaseDesignTokenSet: v2_DesignTokenSet = {
    InputBoxShadow: css`
        inset 0 0 4px 0px ${v2_Color.Shadow.Accent}
    `,
    InputErrorBoxShadow: css`
        inset 0 0 4px 0px ${v2_Color.Shadow.Red}
    `,
    ElevationBoxShadow: css`
      0px 2px 8px ${v2_Color.Shadow.Elevation}
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
            Hover: "#8F0E0E",
            Primary: "#CB2213",
        },
    },
};
