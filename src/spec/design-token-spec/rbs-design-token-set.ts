import { css } from "styled-components";
import { Color } from "../../color/color";
import { DesignTokenSet } from "../../design-token/types";

export const RBSDesignTokenSet: DesignTokenSet = {
    InputBoxShadow: css`
        inset 0 0 6px 1px ${Color.Shadow.Accent}
    `,
    InputErrorBoxShadow: css`
        inset 0 0 6px 1px ${Color.Shadow.Red}
    `,
    ElevationBoxShadow: css`
      0px 2px 8px ${Color.Shadow.Elevation}
    `,
    Table: {
        Header: css`#F5F5F5`,
        Cell: {
            Primary: css`#FBFBFB`,
            Secondary: css`#FFFFFF`,
            Selected: css`#F0F6FF`,
            Hover: css`#DDE6FD`,
        },
    },
};
