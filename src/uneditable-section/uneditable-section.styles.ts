import { css } from "@linaria/core";

import { Colour, MediaQuery } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
const columnWidthBase = `
    grid-column: span 8;

    ${MediaQuery.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`;

export const columnWidthStretch = css`
    grid-column: 1 / -1;
`;

export const wrapper = css`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export const wrapperBackground = css`
    background: ${Colour["bg-strong"]};
`;

export const title = css`
    margin-bottom: 1rem;
    ${columnWidthBase}
`;

export const description = css`
    margin-bottom: 2rem;
    ${columnWidthBase}
`;

export const customSection = css`
    ${columnWidthBase}
`;

export const gridUl = css`
    ${columnWidthBase}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${MediaQuery.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        column-gap: 1rem;
    }

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

export const gridUlFullWidth = css`
    grid-template-columns: repeat(2, minmax(0, 1fr));

    ${MediaQuery.MaxWidth.sm} {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;
