import { css } from "@linaria/core";

import { Border, Colour, Shadow, Spacing } from "../theme";
import {
    MIN_HOURLY_INTERVAL_WIDTH,
    ROW_HEADER_WIDTH,
    ROW_HEIGHT,
} from "./const";

export const tokens = {
    rowColumnHeader: {
        clipRight: "--fds-internal-timetable-rowColumnHeader-clipRight",
        clipBottom: "--fds-internal-timetable-rowColumnHeader-clipBottom",
    },
    columnHeaderRow: {
        columnWidth: "--fds-internal-timetable-columnHeaderRow-columnWidth",
    },
    loadingWrapper: {
        cellWidth: "--fds-internal-timetable-loadingWrapper-cellWidth",
    },
};

export const emptyTableContainer = css`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${ROW_HEADER_WIDTH}px auto;
`;

export const timeTableContainer = css`
    display: grid;
    align-content: start;
    overflow: scroll;
    position: relative;
    isolation: isolate;
`;

export const timeTableContainerNotAllLoaded = css`
    padding-bottom: 128px;
`;

export const timeTableContainerLoading = css`
    &:hover {
        cursor: not-allowed;
    }
`;

export const rowColumnHeader = css`
    ${tokens.rowColumnHeader.clipRight}: 0;
    ${tokens.rowColumnHeader.clipBottom}: 0;

    position: sticky;
    top: 0;
    left: 0;
    background-color: ${Colour["bg"]};
    width: ${ROW_HEADER_WIDTH}px;
    height: ${ROW_HEIGHT}px;
    z-index: 2;
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    box-shadow: none;
    clip-path: inset(0);
    transition: box-shadow 0.5s ease-in-out, clip-path 0.5s ease-in-out;
`;

export const rowColumnHeaderScrolled = css`
    box-shadow: ${Shadow["md-subtle"]};
    clip-path: inset(
        0 var(${tokens.rowColumnHeader.clipRight})
            var(${tokens.rowColumnHeader.clipBottom}) 0
    );
`;

export const rowColumnHeaderScrolledX = css`
    ${tokens.rowColumnHeader.clipRight}: -0.12px;
`;

export const rowColumnHeaderScrolledY = css`
    ${tokens.rowColumnHeader.clipBottom}: -0.12px;
`;

export const timeTableHeaderRow = css`
    display: grid;
    position: sticky;
    top: 0;
    z-index: 4;
    background-color: ${Colour["bg"]};
    grid-template-columns: ${ROW_HEADER_WIDTH}px max-content;
    width: max-content;
    min-width: 100%;
    height: ${ROW_HEIGHT}px;
`;

export const columnHeaderRow = css`
    display: grid;
    background-color: ${Colour["bg"]};
    height: ${ROW_HEIGHT}px;
    grid-auto-flow: column;
    grid-auto-columns: max(
        var(${tokens.columnHeaderRow.columnWidth}),
        ${MIN_HOURLY_INTERVAL_WIDTH}px
    );
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    transition: all 0.5s ease-in-out;
`;

export const columnHeaderRowScrolled = css`
    box-shadow: ${Shadow["md-subtle"]};
`;

export const columnHeader = css`
    min-width: ${MIN_HOURLY_INTERVAL_WIDTH}px;
    display: flex;
    align-items: flex-end;
    padding-bottom: ${Spacing["spacing-4"]};
`;

export const columnHeaderTitle = css`
    color: ${Colour["text-subtler"]};
`;

export const timeTableBody = css`
    width: max-content;
    min-width: 100%;
`;

export const timeTableRow = css`
    display: grid;
    grid-template-columns: ${ROW_HEADER_WIDTH}px max-content;
    width: max-content;
    min-width: 100%;
    height: ${ROW_HEIGHT}px;
`;

export const rowHeader = css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${Colour["bg"]};
    z-index: 3;
    width: ${ROW_HEADER_WIDTH}px;
    height: ${ROW_HEIGHT}px;
    text-align: right;
    padding: 0 ${Spacing["spacing-16"]} 0 ${Spacing["spacing-32"]};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-right: ${Border["width-005"]} ${Border["solid"]}
        ${Colour["border-primary"]};
    border-left: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    transition: all 0.5s ease-in-out;
`;

export const rowHeaderScrolled = css`
    box-shadow: ${Shadow["md-subtle"]};
    clip-path: inset(0 -6px 0 0);
`;

export const clickableRowHeaderTitle = css`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${Colour["text-primary"]};
`;

export const clickableRowHeaderTitleClickable = css`
    &:hover {
        cursor: pointer;
    }
`;

export const rowHeaderSubtitle = css`
    display: inline-flex;
    gap: ${Spacing["spacing-4"]};
    align-items: center;
    color: ${Colour["text-subtler"]};
`;

export const rowHeaderSubtitleHidden = css`
    display: none;
`;

export const loader = css`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 2;
    width: 100%;
    height: 100%;
`;

export const loaderEmptyContent = css`
    grid-column: 1 / -1;
`;

export const loaderHasContent = css`
    grid-column: 2 / -1;
`;

export const noResultsFound = css`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${Spacing["spacing-72"]} 0;
`;

export const loadingWrapper = css`
    /* reset variable to prevent leaking to child components */
    ${tokens.loadingWrapper.cellWidth}: initial;

    display: flex;
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const loadingCell = css`
    border-right: ${Border["width-005"]} ${Border["solid"]}
        ${Colour["border-primary"]};
    width: var(${tokens.loadingWrapper.cellWidth});
    height: 100%;
    padding: ${Spacing["spacing-20"]} ${Spacing["spacing-12"]};
`;

export const loadingBar = css`
    @keyframes timetable-loading-gradient {
        0% {
            background-position: -468px 0;
        }
        100% {
            background-position: 468px 0;
        }
    }

    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${Colour.Primitive["neutral-95"]} 8%,
        ${Colour.Primitive["neutral-100"]} 18%,
        ${Colour.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: timetable-loading-gradient 1.5s forwards infinite;
`;

export const styledPopoverTrigger = css`
    max-width: 24rem !important;
    &:hover {
        cursor: default;
    }
`;
