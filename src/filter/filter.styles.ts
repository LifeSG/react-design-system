import { css } from "@linaria/core";

import { Border, Colour, Spacing } from "../theme";

export const tokens = {
    filterFooter: {
        insetBottom: "--fds-internal-filter-filterFooter-insetBottom",
    },
} as const;

// =============================================================================
// CONTAINER STYLES
// =============================================================================

export const filterBody = css`
    flex: 1;
    width: 100%;
    overflow-y: auto;
    color: ${Colour["text"]};
`;

// =============================================================================
// HEADER STYLES
// =============================================================================

export const filterHeaderButton = css`
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
    margin-right: auto;
    color: ${Colour["icon"]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Colour["icon-hover"]};
    }
`;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const filterFooter = css`
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
    background-color: ${Colour["bg"]};
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const filterFooterWithInsetBottom = css`
    ${tokens.filterFooter.insetBottom}: initial;
    padding-bottom: var(${tokens.filterFooter.insetBottom});
`;

export const filterDoneButton = css`
    width: 100%;
`;
