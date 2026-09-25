import { css } from "@linaria/core";

import { Border, Colour, MediaQuery, Spacing } from "../theme/tokens";

export const gridTokens = {
    rows: "--fds-menu-section-grid-rows",
} as const;

// 367px max content width (Figma) + 8px padding per side; used to cap the panel maxWidth in MenuContent
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

export const columns = css`
    ${gridTokens.rows}: initial;

    display: grid;
    grid-template-rows: repeat(var(${gridTokens.rows}), auto);
    grid-auto-flow: column;
    grid-auto-columns: minmax(0, 1fr);
    column-gap: ${Spacing["spacing-8"]};

    ${MediaQuery.MaxWidth.lg} {
        grid-template-rows: none;
        grid-auto-flow: row;
    }
`;
