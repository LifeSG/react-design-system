import { css } from "@linaria/core";

import { Spacing } from "../../theme";

export const container = css`
    margin: 0 auto;
    padding: ${Spacing["spacing-32"]} ${Spacing["spacing-16"]};
`;

export const placeholder = css`
    height: 200px;
    width: 200px;
`;
