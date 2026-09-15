import { css } from "@linaria/core";

import { Colour, Radius, Spacing } from "../theme";

export const tokens = {
    grid: {
        columns: "--fds-navbarItems-subMenuGrid-columns",
        maxHeight: "--fds-navbarItems-subMenuGrid-maxHeight",
    },
} as const;

// removes the wrapper from the layout tree so `Menu.Section`'s `<ul>` becomes
// the direct grid parent of its `<li>` children
export const measureWrapper = css`
    display: contents;
`;

export const grid = css`
    ${tokens.grid.columns}: initial;
    ${tokens.grid.maxHeight}: initial;

    display: grid;
    grid-template-columns: repeat(var(${tokens.grid.columns}), minmax(0, 1fr));
    column-gap: ${Spacing["spacing-8"]};
    row-gap: ${Spacing["spacing-4"]};

    max-height: var(${tokens.grid.maxHeight});
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
`;
