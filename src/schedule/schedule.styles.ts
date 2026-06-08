import { css } from "@linaria/core";

import { Border, Colour, Radius, Spacing } from "../theme";
import { MIN_COLUMN_WIDTH } from "./const";

export const containerLoading = css``;

export const container = css`
    min-width: 320px;
    max-width: 90vw;
    box-sizing: border-box;

    &.${containerLoading}:hover {
        cursor: not-allowed;
    }
`;

export const scheduleBodyContainer = css`
    height: 100%;
    position: relative;
    overflow: hidden;
`;

export const emptyTableContainer = css`
    display: grid;
    overflow: auto;
    position: relative;
    grid-template-columns: ${MIN_COLUMN_WIDTH}px auto;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-radius: ${Radius["md"]};
    background: ${Colour["bg"]};
`;

export const noResultsFound = css`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${Spacing["spacing-72"]} 0;
`;
