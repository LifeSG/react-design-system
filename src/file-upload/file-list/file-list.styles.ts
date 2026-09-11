import { css } from "@linaria/core";

import { Spacing } from "../../theme";

export const listWrapper = css`
    list-style-type: none;
    margin-bottom: ${Spacing["spacing-32"]};
`;

export const listWrapperReadOnly = css`
    margin-bottom: 0;
`;
