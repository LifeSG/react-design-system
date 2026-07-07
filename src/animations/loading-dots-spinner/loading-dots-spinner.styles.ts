import { css } from "@linaria/core";

export const tokens = {
    containerColor: "--fds-internal-loadingDotsSpinner-container-colour",
} as const;

export const container = css`
    ${tokens.containerColor}: initial;
    margin: 0 auto;
`;

export const placeholder = css`
    height: 200px;
    width: 200px;
`;
