import { css } from "@linaria/core";

export const tokens = {
    containerColor: "--fds-internal-loadingDotsSpinner-container-colour",
} as const;

export const container = css`
    margin: 0 auto;
    ${tokens.containerColor}: initial;
`;

export const placeholder = css`
    width: 200px;
    height: 200px;
`;
