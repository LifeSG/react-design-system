import { css } from "@linaria/core";

import { Colour, Font, Radius, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================

export const container = css`
    background: ${Colour["bg-strong"]};
    border-radius: ${Radius["sm"]};
    display: flex;
    align-items: center;
`;

export const containerVariantDefault = css`
    ${Font["body-baseline-regular"]}
`;

export const containerVariantSmall = css`
    ${Font["body-md-regular"]}
`;

export const searchBox = css`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-8"]};
    padding: 10px ${Spacing["spacing-8"]};
`;

export const searchBoxVariantSmall = css`
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
`;

export const searchInput = css`
    flex: 1;
`;

export const searchIcon = css`
    color: ${Colour["icon"]};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`;

export const clearButton = css`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Spacing["spacing-8"]};
    margin-left: -${Spacing["spacing-8"]};
    color: ${Colour["icon"]};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`;
