import { css } from "@linaria/core";

import { scrollbarCss } from "../shared/styles";
import { Border, Colour, MediaQuery, Spacing } from "../theme/tokens";

export const gridTokens = {
    rows: "--fds-menu-section-grid-rows",
    maxWidth: "--fds-menu-section-grid-maxWidth",
} as const;

// 367px max content width (Figma) + 8px padding on each side; matches grid-auto-columns below
export const GRID_COLUMN_WIDTH_PX = 383;
// matches Spacing["spacing-8"]
export const GRID_COLUMN_GAP_PX = 8;

export const section = css`
    padding: ${Spacing["spacing-8"]} 0;
    margin: 0;
    list-style: none;
`;
export const sectionWithDivider = css`
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const label = css`
    margin: 0 ${Spacing["spacing-16"]} ${Spacing["spacing-8"]};
    color: ${Colour["text-subtler"]};
`;

export const grid = css`
    ${gridTokens.rows}: initial;
    ${gridTokens.maxWidth}: initial;

    display: grid;
    grid-template-rows: repeat(var(${gridTokens.rows}), auto);
    grid-auto-flow: column;
    grid-auto-columns: ${GRID_COLUMN_WIDTH_PX}px;
    column-gap: ${Spacing["spacing-8"]};

    max-width: var(${gridTokens.maxWidth});
    overflow-x: auto;

    ${scrollbarCss("horizontal")}

    ${MediaQuery.MaxWidth.lg} {
        grid-template-rows: none;
        grid-auto-flow: row;
        max-width: none;
    }
`;
