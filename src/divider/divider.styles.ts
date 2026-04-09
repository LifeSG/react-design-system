import { css } from "@linaria/core";
import { Colour } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const tokens = {
    thickness: "--fds-divider-line-thickness",
    color: "--fds-divider-line-color",
    backgroundImage: "--fds-divider-line-background-image",
} as const;

export const lineBase = css`
    width: 100%;
    margin: 0;
    border: none;
    ${tokens.thickness}: initial;
    ${tokens.color}: initial;
    height: var(${tokens.thickness}, 1px);
`;

export const solidLine = css`
    background-color: var(${tokens.color}, ${Colour.border});
`;

export const dashedLine = css`
    background-color: transparent;
    background-repeat: repeat-x;
    background-image: var(${tokens.backgroundImage});
`;
