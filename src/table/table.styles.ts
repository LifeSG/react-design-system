import { css } from "@linaria/core";

import { Border, Colour, Radius, Spacing } from "../theme";

// =============================================================================
// STYLES CONSTANTS
// =============================================================================
const borderColor = Colour["border"];
const fontColor = Colour["text"];

// =============================================================================
// STYLES
// =============================================================================
export const tableWrapper = css`
    overflow: auto;
    border: ${Border["width-010"]} ${Border["solid"]} ${borderColor};
    border-radius: ${Radius["md"]};

    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`;

export const tableComponent = css`
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
`;

export const tableBody = css`
    :where(tr:last-child) {
        td {
            border-bottom: none;
        }
    }
`;

export const headerCell = css`
    padding: ${Spacing["spacing-20"]} ${Spacing["spacing-16"]};
    text-align: left;
    cursor: default;
    vertical-align: middle;
    color: ${fontColor};
    background-color: ${Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${borderColor};

    &:where(&:first-child) {
        padding-left: ${Spacing["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${Spacing["spacing-24"]};
    }
`;

export const bodyRow = css`
    background-color: ${Colour["bg"]};
    border-top: ${Border["width-010"]} ${Border["solid"]} ${borderColor};
`;

export const bodyCell = css`
    padding: ${Spacing["spacing-20"]} ${Spacing["spacing-16"]};
    vertical-align: middle;
    color: ${fontColor};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${borderColor};

    &:where(&:first-child) {
        padding-left: ${Spacing["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${Spacing["spacing-24"]};
    }
`;
