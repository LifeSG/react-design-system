import { css } from "@linaria/core";

import { Border, Colour, MediaQuery, Radius, Spacing } from "../theme/tokens";

export const gridTokens = {
    rows: "--fds-menu-section-grid-rows",
    maxWidth: "--fds-menu-section-grid-maxWidth",
} as const;

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
    grid-auto-columns: 383px;
    column-gap: ${Spacing["spacing-8"]};
    row-gap: ${Spacing["spacing-4"]};

    max-width: var(${gridTokens.maxWidth});
    overflow-x: auto;

    &::-webkit-scrollbar {
        height: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Colour["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Radius["full"]};
        background-clip: padding-box;
    }

    ${MediaQuery.MaxWidth.lg} {
        grid-template-rows: none;
        grid-auto-flow: row;
        max-width: none;
    }
`;
