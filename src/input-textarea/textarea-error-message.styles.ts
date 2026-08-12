import { css } from "@linaria/core";

import { Colour, Font, Spacing } from "../theme";

export const container = css`
    display: flex;
    flex: 1;
    gap: ${Spacing["spacing-4"]};
    margin-right: ${Spacing["spacing-12"]};
`;

export const icon = css`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Colour["icon-error-strong"]};
`;

export const message = css`
    ${Font["body-sm-semibold"]}
    color: ${Colour["text-error"]};
    margin: 0;
    outline: none;
`;
