import styled, { css, keyframes } from "styled-components";
import { LoadingDotsSpinner } from "../animations";
import { Color } from "../color";
import { ErrorDisplay } from "../error-display";
import { PopoverTrigger } from "../popover-v2";
import { Text } from "../text";
import {
    MIN_HOURLY_INTERVAL_WIDTH,
    ROW_HEADER_WIDTH,
    ROW_HEIGHT,
} from "./const";

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
    $allRecordsLoaded: boolean;
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
}

interface LoaderProps {
    $isEmptyContent: boolean;
}

export const Container = styled.div``;

export const EmptyTableContainer = styled.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${ROW_HEADER_WIDTH}px auto;
`;

export const TimeTableContainer = styled.div<TimeTableContainerProps>`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${ROW_HEADER_WIDTH}px fit-content(100%);
    padding-bottom: ${(props) => (props.$allRecordsLoaded ? "0" : "128px")};
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
    width: ${ROW_HEADER_WIDTH}px;
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
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: white;
    grid-template-rows: repeat(${(props) => props.$numOfRows}, ${ROW_HEIGHT}px);
`;

export const ColumnHeaderRow = styled.div<ColumnHeaderRowProps>`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
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
    min-width: ${MIN_HOURLY_INTERVAL_WIDTH}px;
    align-content: end;
    margin-bottom: 0.25rem;
`;

export const ColumnHeaderTitle = styled(Text.H6)`
    color: ${Color.Neutral[3]};
`;

export const ContentContainer = styled.div<ContentContainerPopoverProps>`
    display: grid;
    grid-template-rows: repeat(${(props) => props.$numOfRows}, ${ROW_HEIGHT}px);
`;

export const RowHeader = styled.div<RowHeaderProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: white;
    width: ${ROW_HEADER_WIDTH}px;
    height: ${ROW_HEIGHT}px;
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

export const ClickableRowHeaderTitle = styled(Text.H5)<{
    $isClickable: boolean;
}>`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${Color.Primary};
    :hover {
        cursor: ${(props) => (props.$isClickable ? "pointer" : "default")};
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
