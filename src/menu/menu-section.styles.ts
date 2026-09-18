import { css } from "@linaria/core";

import { Border, Colour, MediaQuery, Radius, Spacing } from "../theme/tokens";

export const gridTokens = {
    columns: "--fds-menu-section-grid-columns",
    maxHeight: "--fds-menu-section-grid-maxHeight",
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
    ${gridTokens.columns}: initial;
    ${gridTokens.maxHeight}: initial;

    display: grid;
    grid-template-columns: repeat(var(${gridTokens.columns}), minmax(0, 1fr));
    column-gap: ${Spacing["spacing-8"]};
    row-gap: ${Spacing["spacing-4"]};

    max-height: var(${gridTokens.maxHeight});
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 14px;
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
        grid-template-columns: 1fr;
        max-height: none;
    }
`;
