import { css } from "@linaria/core";

import { Colour } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const tokens = {
    thickness: "--fds-internal-divider-line-thickness",
    color: "--fds-internal-divider-line-color",
    backgroundImage: "--fds-internal-divider-line-backgroundImage",
} as const;

export const lineBase = css`
    ${tokens.thickness}: initial;
    ${tokens.color}: initial;

    width: 100%;
    height: var(${tokens.thickness}, 1px);
    margin: 0;
    border: none;
`;

export const solidLine = css`
    ${tokens.color}: initial;

    background-color: var(${tokens.color}, ${Colour.border});
`;

export const dashedLine = css`
    ${tokens.backgroundImage}: initial;

    background-color: transparent;
    background-image: var(${tokens.backgroundImage});
    background-repeat: repeat-x;
`;
