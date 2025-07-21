import { css } from "styled-components";
import { V2_Color } from "../../v2_color/color";
import { V2_DesignTokenSet } from "../../v2_design-token/types";

export const RBSDesignTokenSet: V2_DesignTokenSet = {
    InputBoxShadow: css`
        inset: 0 0 3px 0px ${V2_Color.Shadow.Accent};
    `,
    InputErrorBoxShadow: css`
        inset: 0 0 3px 0px ${V2_Color.Shadow.Red};
    `,
    ElevationBoxShadow: css`
        inset: 0px 2px 8px ${V2_Color.Shadow.Elevation};
    `,
    Table: {
        Header: css`
            color: #f5f5f5;
        `,
        Cell: {
            Primary: css`
                color: #fbfbfb;
            `,
            Secondary: css`
                color: #ffffff;
            `,
            Selected: css`
                color: #f0f6ff;
            `,
            Hover: css`
                color: #dde6fd;
            `,
        },
    },
    Button: {
        Danger: {
            BackgroundColor: css`
                color: #cb2213;
            `,
            Border: css`
                color: #cb2213;
            `,
            Hover: css`
                color: #8f0e0e;
            `,
            Primary: css`
                color: #cb2213;
            `,
        },
    },
};
