import styled, { css, keyframes } from "styled-components";
import { LoadingDotsSpinner } from "../animations";
import { Color } from "../color";
import { ErrorDisplay } from "../error-display";
import { PopoverTrigger } from "../popover-v2";
import { Text } from "../text";
import { OverwritePopoverCustomSizeProps } from "./types";

interface ColumnHeaderRowProps {
    $numOfColumns: number;
    $isScrolled: boolean;
}

interface RowHeaderColumnProps {
    $numOfRows: number;
    $isScrolled: boolean;
}

interface TimeTableContainerProps {
    $loading: boolean;
    $width: string;
    $height: string;
    $allRecordsLoaded: boolean;
}

interface EmptyTableContainerProps {
    $width: string;
    $height: string;
}

interface RowColumnHeaderProps {
    $isScrolledY: boolean;
    $isScrolledX: boolean;
}

interface RowHeaderProps {
    $isScrolled: boolean;
}

interface LoadingCellWrapperProps {
    $width: number;
}

interface ContentContainerPopoverProps {
    $numOfRows: number;
    $blockedCellPopover: OverwritePopoverCustomSizeProps;
    $filledCellPopover: OverwritePopoverCustomSizeProps;
}

interface LoaderProps {
    $isEmptyContent: boolean;
}

export const EmptyTableContainer = styled.div<EmptyTableContainerProps>`
    display: grid;
    grid-template-columns: 252px auto;
    min-height: 600px; // REVIEW
    min-width: 1000px; // REVIEW
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
`;

export const EmptyTableRowHeader = styled.div`
    display: flex;
    height: fit-content;
    grid-column: 1 / -1;
    border-bottom: 1px solid ${Color.Neutral[5]};
`;

export const TimeTableContainer = styled.div<TimeTableContainerProps>`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: 252px fit-content(100%);
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
    padding-bottom: ${(props) => (props.$allRecordsLoaded ? "0" : "128px")};
    min-height: 600px; // REVIEW
    min-width: 900px; // REVIEW
    ${(props) => {
        if (props.$loading) {
            return css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `;
        }
    }}
`;

export const RowColumnHeader = styled.div<RowColumnHeaderProps>`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    width: 252px;
    z-index: 2;
    border-bottom: 1px solid ${Color.Neutral[5]};
    ${(props) => {
        if (props.$isScrolledX || props.$isScrolledY) {
            return css`
                box-shadow: 0.125rem 0.125rem 0.5rem ${Color.Neutral[5]};
                clip-path: inset(
                    0 ${props.$isScrolledX ? "-0.75rem" : "0"}
                        ${props.$isScrolledY ? "-0.75rem" : "0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `;
        } else {
            return css`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `;
        }
    }};
`;

export const RowHeaderColumn = styled.div<RowHeaderColumnProps>`
    display: grid;
    position: sticky;
    grid-column: 1 / 1;
    left: 0;
    z-index: 1;
    background-color: white;
    grid-template-rows: repeat(${(props) => props.$numOfRows}, 68px);
`;

export const ColumnHeaderRow = styled.div<ColumnHeaderRowProps>`
    display: grid;
    position: sticky;
    grid-column: 2 / 2;
    grid-row: 1 / 1;
    top: 0;
    z-index: 1;
    background-color: white;
    grid-template-columns: repeat(${(props) => props.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: 1px solid ${Color.Neutral[5]};
    transition: all 0.5s ease-in-out;
    ${(props) => {
        if (props.$isScrolled) {
            return css`
                box-shadow: 0rem 0.125rem 0.5rem ${Color.Neutral[5]};
            `;
        }
    }};
`;

export const ColumnHeader = styled.div`
    min-width: 84px;
    align-content: end;
    margin-bottom: 0.25rem;
`;

export const ColumnHeaderTitle = styled(Text.H6)`
    color: ${Color.Neutral[3]};
`;

export const ContentContainer = styled.div<ContentContainerPopoverProps>`
    display: grid;
    grid-template-rows: repeat(${(props) => props.$numOfRows}, 68px);
    .filledPopover {
        width: ${(props) =>
            props.$filledCellPopover?.width
                ? `${props.$filledCellPopover.width}`
                : "400px"};
        > div {
            padding: ${(props) =>
                props.$filledCellPopover?.padding
                    ? `${props.$filledCellPopover.padding}`
                    : "2rem"};
        }
    }

    .blockedPopover {
        width: ${(props) =>
            props.$blockedCellPopover?.width
                ? `${props.$blockedCellPopover.width}`
                : ""};
        > div {
            padding: ${(props) =>
                props.$blockedCellPopover?.padding
                    ? `${props.$blockedCellPopover.padding}`
                    : ""};
        }
    }
`;

export const RowHeader = styled.div<RowHeaderProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: white;
    width: 252px;
    height: 68px;
    text-align: right;
    padding: 0 1rem 0 2rem;
    border-bottom: 1px solid ${Color.Neutral[5]};
    border-left: 1px solid ${Color.Accent.Light[1]};
    transition: all 0.5s ease-in-out;
    ${(props) => {
        if (props.$isScrolled) {
            return css`
                box-shadow: 0.125rem 0.125rem 0.5rem ${Color.Neutral[5]};
            `;
        } else {
            return css`
                box-shadow: inset -0.5px 0px ${Color.Accent.Light[1]};
            `;
        }
    }};
`;

export const ClickableRowHeaderTitle = styled(Text.H5)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: ${Color.Primary};
    :hover {
        cursor: pointer;
    }
`;

export const RowHeaderSubtitle = styled(Text.XSmall)<{ $show: boolean }>`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${Color.Neutral[3]};
    ${(props) => {
        if (!props.$show) {
            return css`
                display: none;
            `;
        }
    }}
`;

export const Loader = styled(LoadingDotsSpinner)<LoaderProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${(props) => (props.$isEmptyContent ? "1 / -1" : "2 / -1")};
    grid-row: 2;
    width: 100%;
    height: 100%;
`;

export const NoResultsFound = styled(ErrorDisplay)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 5rem 0 5rem 0;
`;

export const LoadingWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid ${Color.Neutral[5]};
`;

export const LoadingCell = styled.div<LoadingCellWrapperProps>`
    border-right: 0.5px solid ${Color.Accent.Light[1]};
    width: ${(props) => `${props.$width}px`};
    height: 100%;
    padding: 20px 12px 20px 12px;
`;

const gradientAnimation = keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

export const LoadingBar = styled.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${Color.Neutral[6]} 8%,
        ${Color.Neutral[7]} 18%,
        ${Color.Neutral[6]} 33%
    );
    background-size: 800px 104px;
    animation: ${gradientAnimation} 1.5s forwards infinite;
`;

export const StyledPopoverTrigger = styled(PopoverTrigger)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`;
