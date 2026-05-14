import { css } from "@linaria/core";

import { Colour, Font, MediaQuery } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const container = css`
    display: flex;
    flex-direction: column;

    &[data-width="half"] {
        grid-column: auto / span 4;
    }

    &[data-width="half"].containerFullWidth {
        grid-column: auto / span 1;
    }

    &[data-width="full"] {
        grid-column: auto / span 8;
    }

    &[data-width="full"].containerFullWidth {
        grid-column: auto / span 2;
    }

    ${MediaQuery.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`;

export const containerFullWidth = css``;

export const iconContainer = css`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Colour["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${Font.Spec["body-size-baseline"]};
        height: ${Font.Spec["body-size-baseline"]};
    }
`;

export const clickable = css`
    ${Font["body-baseline-regular"]}
    color: ${Colour["text"]};
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`;

// -----------------------------------------------------------------------------
// LOADING DISPLAY
// -----------------------------------------------------------------------------
export const loadingLabel = css`
    color: ${Colour["text-disabled"]};
`;

export const spinner = css`
    margin-right: 0.5rem;
    color: ${Colour["text-disabled"]};
`;

// -----------------------------------------------------------------------------
// ERROR DISPLAY
// -----------------------------------------------------------------------------
export const errorIcon = css`
    color: ${Colour["icon-warning"]};
    margin-right: 0.5rem;
    height: ${Font.Spec["body-size-baseline"]};
    width: ${Font.Spec["body-size-baseline"]};
`;

export const errorLabel = css`
    color: ${Colour["text-warning"]};
`;

export const tryAgainLabel = css`
    ${Font["body-baseline-semibold"]}
    color: ${Colour["hyperlink"]};
    text-decoration: underline;
    margin-left: 0.5rem;
`;

export const alert = css`
    margin-top: 0.5rem;
`;
