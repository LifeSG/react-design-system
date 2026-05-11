import { css } from "@linaria/core";

import { Colour, Font, Radius, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================

export const container = css`
    display: flex;
    align-items: center;
    background: ${Colour["bg-strong"]};
    border-radius: ${Radius["sm"]};
    ${Font["body-baseline-regular"]}
`;

export const containerVariantSmall = css`
    ${Font["body-md-regular"]}
`;

export const searchBox = css`
    display: flex;
    flex: 1;
    gap: ${Spacing["spacing-8"]};
    align-items: center;
    padding: 10px ${Spacing["spacing-8"]};
`;

export const searchBoxVariantSmall = css`
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
`;

export const searchInput = css`
    flex: 1;
`;

export const searchIcon = css`
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    color: ${Colour["icon"]};
`;

export const clearButton = css`
    box-sizing: content-box;
    flex-shrink: 0;
    align-self: stretch;
    padding: ${Spacing["spacing-8"]};
    margin-left: calc(${Spacing["spacing-8"]} * -1);
    font-size: inherit;
    color: ${Colour["icon"]};
    cursor: pointer;

    svg {
        flex-shrink: 0;
        width: 1em;
        height: 1em;
    }
`;
