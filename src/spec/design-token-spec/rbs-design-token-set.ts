import { css } from "styled-components";
import { V2_Color } from "../../v2_color/color";
import { V2_DesignTokenSet } from "../../v2_design-token/types";

export const RBSDesignTokenSet: V2_DesignTokenSet = {
    InputBoxShadow: css`
        inset 0 0 3px 0px ${V2_Color.Shadow.Accent}
    `,
    InputErrorBoxShadow: css`
        inset 0 0 3px 0px ${V2_Color.Shadow.Red}
    `,
    ElevationBoxShadow: css`
      0px 2px 8px ${V2_Color.Shadow.Elevation}
    `,
    Table: {
        Header: "#F5F5F5",
        Cell: {
            Primary: "#FBFBFB",
            Secondary: "#FFFFFF",
            Selected: "#F0F6FF",
            Hover: "#DDE6FD",
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
