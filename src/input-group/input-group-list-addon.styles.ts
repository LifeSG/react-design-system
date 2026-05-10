import { css } from "@linaria/core";

import { Colour, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const fieldWrapper = css`
    display: flex;
    align-items: center;
`;

export const fieldWrapperPositionRight = css`
    flex-direction: row-reverse;
`;

export const expandableElementNoBorderRight = css`
    padding-right: 0;
`;

export const expandableElementNoBorderLeft = css`
    padding-left: 0;
`;

export const fieldSelector = css`
    flex: 0 0 auto;
`;

export const fieldInputReadOnly = css`
    padding: 0;
`;

export const fieldInputNoBorderRight = css`
    padding-left: 0;
`;

export const fieldInputNoBorderLeft = css`
    padding-right: 0;
`;

export const fieldInputPositionRight = css`
    padding-left: ${Spacing["spacing-16"]};
`;

export const fieldInputPositionLeft = css`
    padding-right: ${Spacing["spacing-16"]};
`;

export const selectorReadOnly = css`
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Spacing["spacing-12"]};
    color: ${Colour["text"]};
`;

export const divider = css`
    width: 1px;
    background: ${Colour["border"]};
    flex-shrink: 0;
    height: 1.25rem;
`;

export const dividerReadOnly = css`
    display: none;
`;

export const dividerPositionRight = css`
    margin-left: ${Spacing["spacing-12"]};
`;

export const dividerPositionLeft = css`
    margin-right: ${Spacing["spacing-12"]};
`;
