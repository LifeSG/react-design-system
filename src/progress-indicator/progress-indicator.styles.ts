import { css } from "@linaria/core";

import { Colour, MediaQuery, Radius, Spacing } from "../theme";

// Units in rem
export const INDICATOR_BAR_MARGIN_RIGHT_TABLET = 0.5;

// =============================================================================
// STYLE COMPONENTS
// =============================================================================
export const wrapper = css`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${MediaQuery.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${MediaQuery.MaxWidth.lg} {
        margin: 1rem 0;
    }
`;

export const content = css`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`;

export const indicatorBar = css`
    height: 4px;
    margin-bottom: ${Spacing["spacing-8"]};
    border-radius: ${Radius["full"]};
    background-color: ${Colour["bg-disabled"]};
`;

export const indicatorBarHighlighted = css`
    background-color: ${Colour["bg-primary-subtle"]};
`;

export const indicatorTitleDesktop = css`
    overflow-wrap: anywhere;
    color: ${Colour["text-disabled"]};
`;

export const indicatorTitleDesktopHighlighted = css`
    color: ${Colour["text-primary"]};
`;

export const indicatorTitleTablet = css`
    overflow-wrap: anywhere;
    color: ${Colour.text};
`;

export const indicator = css`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${INDICATOR_BAR_MARGIN_RIGHT_TABLET + "rem"};
    }
`;
