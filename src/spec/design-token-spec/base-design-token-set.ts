import { css } from "styled-components";
import { Color } from "../../color/color";
import { DesignTokenSet } from "../../design-token/types";

export const BaseDesignTokenSet: DesignTokenSet = {
    InputBoxShadow: css`
        inset 0 0 6px 1px ${Color.Shadow.Accent}
    `,
    InputErrorBoxShadow: css`
        inset 0 0 6px 1px ${Color.Shadow.Red}
    `,
};
