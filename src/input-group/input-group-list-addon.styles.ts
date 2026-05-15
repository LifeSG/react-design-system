import { css } from "@linaria/core";

import { Colour, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const fieldWrapper = css`
    display: flex;
    align-items: center;

    &[data-position="right"] {
        flex-direction: row-reverse;
    }
`;

export const expandableElementNoBorder = css`
    &[data-position="right"] {
        padding-right: 0;
    }

    &[data-position="left"] {
        padding-left: 0;
    }
`;

export const fieldSelector = css`
    flex: 0 0 auto;
`;

export const fieldInput = css`
    width: 100%;

    &[data-position="right"] {
        padding-left: ${Spacing["spacing-16"]};
    }

    &[data-position="left"] {
        padding-right: ${Spacing["spacing-16"]};
    }
`;

export const fieldInputNoBorder = css`
    &[data-position="right"] {
        padding-left: 0;
    }

    &[data-position="left"] {
        padding-right: 0;
    }
`;

export const fieldInputReadOnly = css`
    padding: 0;
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

    &[data-position="right"] {
        margin-left: ${Spacing["spacing-12"]};
    }

    &[data-position="left"] {
        margin-right: ${Spacing["spacing-12"]};
    }
`;

export const dividerReadOnly = css`
    display: none;
`;
