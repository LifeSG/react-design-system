import { css } from "@linaria/core";

import { Colour, MediaQuery, Spacing } from "../../theme";

// =============================================================================
// STYLING
// =============================================================================
export const scheduleHeaderWrapper = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${Spacing["spacing-16"]};
    color: ${Colour["text-primary"]};
    gap: ${Spacing["spacing-16"]};
`;

export const leftSection = css`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.md} {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
    }
`;

export const rightSection = css`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

export const dateNavigator = css`
    width: 100%;
    max-width: 400px;
`;

export const text = css`
    color: ${Colour["text-subtler"]};
`;

export const button = css`
    min-width: 5rem;

    ${MediaQuery.MaxWidth.lg} {
        display: none;
    }
`;

// =============================================================================
// CONSTANTS
// =============================================================================
export const DROPDOWN_WIDTH = "240px";
