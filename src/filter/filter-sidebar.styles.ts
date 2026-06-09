import { css } from "@linaria/core";

import { Border, Colour, Font, Radius, Spacing } from "../theme";

// =============================================================================
// CONTAINER STYLES
// =============================================================================

export const desktopContainer = css`
    background-color: ${Colour["bg"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["md"]};
    overflow: hidden;
    width: 100%;
`;

// =============================================================================
// HEADER STYLES
// =============================================================================

export const filterHeader = css`
    display: flex;
    align-items: center;

    background-color: ${Colour["bg"]};
`;

export const filterTitleGroup = css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${Spacing["spacing-8"]};
    margin: ${Spacing["spacing-24"]} 0 ${Spacing["spacing-24"]}
        ${Spacing["spacing-20"]};
`;

export const filterTitle = css`
    ${Font["heading-xs-semibold"]}
`;

export const filterClearButton = css`
    background-color: transparent;
    padding-right: ${Spacing["spacing-20"]};
    padding-left: ${Spacing["spacing-20"]};
    height: 100%;
`;
