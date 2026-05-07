import { css } from "@linaria/core";

import { Colour, Font, Spacing } from "../theme";

export const tokens = {
    filterHeader: {
        insetTop: "--fds-internal-filter-filterModalHeader-insetTop",
    },
} as const;

// =============================================================================
// CONTAINER STYLES
// =============================================================================

export const mobileContainer = css`
    background-color: ${Colour["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const mobileOverlayContainer = css`
    background-color: ${Colour["bg"]};
    height: 100%;
    width: 100%;
`;

export const floatingWrapper = css`
    height: 100%;
`;

// =============================================================================
// HEADER STYLES
// =============================================================================

export const filterHeader = css`
    display: flex;
    align-items: center;
    background-color: ${Colour["bg"]};
`;

export const filterHeaderWithInsetTop = css`
    ${tokens.filterHeader.insetTop}: initial;
    padding-top: var(${tokens.filterHeader.insetTop});
`;

export const filterTitle = css`
    ${Font["heading-xs-semibold"]}
    flex: 1;
    text-align: center;
    margin: ${Spacing["spacing-24"]} 0;
`;

export const filterClearButton = css`
    background-color: transparent;
    height: 100%;
    padding: ${Spacing["spacing-24"]} ${Spacing["spacing-20"]};
`;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const filterButton = css`
    width: 100%;
`;
