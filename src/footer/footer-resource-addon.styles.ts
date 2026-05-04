import { css } from "@linaria/core";

import { Spacing } from "../theme";

export const img = css`
    max-height: ${Spacing["spacing-72"]};
    max-width: 100%;
`;

export const items = css`
    display: flex;
    align-items: flex-start;
    gap: ${Spacing["spacing-32"]};
    margin-top: ${Spacing["spacing-16"]};
`;
