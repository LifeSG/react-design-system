import { css } from "styled-components";
import { Color } from "../../color/color";
import { DesignTokenSet } from "../../design-token/types";

export const RBSDesignTokenSet: DesignTokenSet = {
    InputBoxShadow: css`
        inset 0 0 3px 0px ${Color.Shadow.Accent}
    `,
    InputErrorBoxShadow: css`
        inset 0 0 3px 0px ${Color.Shadow.Red}
    `,
    ElevationBoxShadow: css`
      0px 2px 8px ${Color.Shadow.Elevation}
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
            Hover: "#750C0C",
            Primary: "#CB2213",
        },
    },
};
