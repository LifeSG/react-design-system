import { css } from "@linaria/core";

import { Spacing } from "../../theme";

export const container = css`
    padding: ${Spacing["spacing-32"]} ${Spacing["spacing-16"]};
    margin: 0 auto;
`;

export const placeholder = css`
    width: 200px;
    height: 200px;
`;
