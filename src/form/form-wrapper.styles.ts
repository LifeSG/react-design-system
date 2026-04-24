import { css } from "@linaria/core";

import { Spacing } from "../theme";

export const container = css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Spacing["spacing-32"]};
    }
`;
