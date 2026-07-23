import { css } from "@linaria/core";

import { Spacing } from "../../theme";

export const labelContainer = css`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Spacing["spacing-8"]};
`;

export const errorMessageContainer = css`
    display: flex;
    flex: 1;
    margin-right: ${Spacing["spacing-12"]};
    gap: ${Spacing["spacing-4"]};
`;

export const errorMessageLabel = css`
    margin-top: 0;
`;
