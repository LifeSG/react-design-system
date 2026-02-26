import styled, { css, keyframes } from "styled-components";
import { LoadingDotsSpinner } from "../animations";
import { ErrorDisplay } from "../error-display";
import { PopoverTrigger } from "../popover-v2";
import { V3_Border, V3_Colour, V3_Shadow, V3_Spacing } from "../v3_theme";
import { Typography } from "../typography";
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
    $loading: boolean | undefined;
    $allRecordsLoaded: boolean;
}

interface RowColumnHeaderProps {
    $isScrolledY: boolean;
    $isScrolledX: boolean;
}

interface RowHeaderProps {
    $isScrolled: boolean;
}

interface ClickableRowHeaderTitleProps {
    $isClickable: boolean;
}

interface RowHeaderSubtitleProps {
    $show: boolean;
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
                &:hover {
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
    background-color: ${V3_Colour["bg"]};
    width: ${ROW_HEADER_WIDTH}px;
    z-index: 2;
    border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    ${(props) => {
        if (props.$isScrolledX || props.$isScrolledY) {
            return css`
                box-shadow: ${V3_Shadow["md-subtle"]};
                clip-path: inset(
                    0 ${props.$isScrolledX ? "-0.12px" : "0"}
                        ${props.$isScrolledY ? "-0.12px" : "0"} 0
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
    background-color: ${V3_Colour["bg"]};
    grid-template-rows: repeat(${(props) => props.$numOfRows}, ${ROW_HEIGHT}px);
`;

export const ColumnHeaderRow = styled.div<ColumnHeaderRowProps>`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${V3_Colour["bg"]};
    grid-template-columns: repeat(${(props) => props.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    transition: all 0.5s ease-in-out;
    ${(props) => {
        if (props.$isScrolled) {
            return css`
                box-shadow: ${V3_Shadow["md-subtle"]};
            `;
        }
    }};
`;

export const ColumnHeader = styled.div`
    min-width: ${MIN_HOURLY_INTERVAL_WIDTH}px;
    align-content: end;
    margin-bottom: ${V3_Spacing["spacing-4"]};
`;

export const ColumnHeaderTitle = styled(Typography.BodySM)`
    color: ${V3_Colour["text-subtler"]};
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
    background-color: ${V3_Colour["bg"]};
    width: ${ROW_HEADER_WIDTH}px;
    height: ${ROW_HEIGHT}px;
    text-align: right;
    padding: 0 ${V3_Spacing["spacing-16"]} 0 ${V3_Spacing["spacing-32"]};
    border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    border-right: ${V3_Border["width-005"]} ${V3_Border["solid"]}
        ${V3_Colour["border-primary"]};
    border-left: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
    transition: all 0.5s ease-in-out;
    ${(props) => {
        if (props.$isScrolled) {
            return css`
                box-shadow: ${V3_Shadow["md-subtle"]};
                clip-path: inset(0 -6px 0 0);
            `;
        } else {
            return css`
                box-shadow: none;
            `;
        }
    }};
`;

export const ClickableRowHeaderTitle = styled(
    Typography.BodyMD
)<ClickableRowHeaderTitleProps>`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${V3_Colour["text-primary"]};
    &:hover {
        cursor: ${(props) => (props.$isClickable ? "pointer" : "default")};
    }
`;

export const RowHeaderSubtitle = styled(
    Typography.BodyXS
)<RowHeaderSubtitleProps>`
    display: inline-flex;
    gap: ${V3_Spacing["spacing-4"]};
    align-items: center;
    color: ${V3_Colour["text-subtler"]};
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
    padding: ${V3_Spacing["spacing-72"]} 0;
`;

export const LoadingWrapper = styled.div`
    display: flex;
    border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${V3_Colour["border"]};
`;

export const LoadingCell = styled.div<LoadingCellWrapperProps>`
    border-right: ${V3_Border["width-005"]} ${V3_Border["solid"]}
        ${V3_Colour["border-primary"]};
    width: ${(props) => `${props.$width}px`};
    height: 100%;
    padding: ${V3_Spacing["spacing-20"]} ${V3_Spacing["spacing-12"]};
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
        ${V3_Colour.Primitive["neutral-95"]} 8%,
        ${V3_Colour.Primitive["neutral-100"]} 18%,
        ${V3_Colour.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${gradientAnimation} 1.5s forwards infinite;
`;

export const StyledPopoverTrigger = styled(PopoverTrigger)`
    max-width: 24rem !important;
    &:hover {
        cursor: default;
    }
`;
