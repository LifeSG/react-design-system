import styled, { css, keyframes } from "styled-components";
import { LoadingDotsSpinner } from "../animations";
import { Color } from "../color";
import { Text } from "../text";
import { ErrorDisplay } from "../error-display";

interface TimeTableColumnsProps {
    $numOfColumns: number;
    $isScrolled: boolean;
}

interface TimeTableProps {
    $loading: boolean;
}

interface RowDataProps {
    $isFirst: boolean;
}

interface LoaderProps {
    $numOfRows: number;
}

interface FirstRowFirstColumnProps {
    $isScrolled: boolean;
}

interface RowHeaderProps {
    $isScrolled: boolean;
}

interface LoadingCellWrapperProps {
    $width: number;
}
interface NoResultsFoundProps {
    $show: boolean;
}

export const Container = styled.div`
    width: 100%;
`;

export const TimeTableContainer = styled.div<TimeTableProps>`
    display: grid;
    overflow: scroll;
    height: 80vh;
    width: 80vw;
    min-height: 80vh;
    min-width: 80vh;
    ${(props) => {
        if (props.$loading) {
            return css`
                :hover {
                    cursor: not-allowed;
                }
            `;
        }
    }}
`;

export const TimeTableColumns = styled.div<TimeTableColumnsProps>`
    display: grid;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: white;
    grid-template-columns: 252px repeat(${(props) => props.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: 1px solid ${Color.Neutral[5]};
    transition: all 0.5s ease-in-out;
    ${(props) => {
        if (props.$isScrolled) {
            return css`
                box-shadow: 0.125rem 0.125rem 0.25rem ${Color.Neutral[5]};
            `;
        }
    }};
`;

export const TimeTableRow = styled.div<TimeTableProps>`
    display: grid;
    width: 100%;
    height: 65px;
    ${(props) => {
        if (props.$loading) {
            return css`
                grid-column: 1 / 1;
            `;
        } else {
            return css`
                grid-template-columns: 252px auto;
            `;
        }
    }}
`;

export const FirstRowColumn = styled.div<FirstRowFirstColumnProps>`
    position: sticky;
    left: 0;
    background-color: white;
    transition: all 0.5s ease-in-out;
    ${(props) => {
        if (props.$isScrolled) {
            return css`
                box-shadow: 0.125rem 0.375rem 0.25rem ${Color.Neutral[5]};
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

export const RowWrapper = styled.div<TimeTableProps>`
    display: grid;
    ${(props) => {
        if (props.$loading) {
            return css`
                grid-template-columns: 252px auto;
            `;
        }
    }}
`;

export const RowHeader = styled.div<RowHeaderProps>`
    position: sticky;
    background-color: white;
    left: 0;
    width: 252px;
    min-width: 252px;
    border-right: 1px solid ${Color.Accent.Light[1]};
    align-content: center;
    text-align: right;
    padding: 0 1rem 0 2rem;
    border-bottom: 1px solid ${Color.Neutral[5]};
    border-left: 1px solid ${Color.Accent.Light[1]};
    transition: all 0.5s ease-in-out;
    ${(props) => {
        if (props.$isScrolled) {
            return css`
                box-shadow: 0.125rem 0.125rem 0.25rem ${Color.Neutral[5]};
            `;
        }
    }};
`;

// FIXME
export const RowData = styled.div<RowDataProps>`
    border-right: 1px solid ${Color.Accent.Light[1]};
    border-bottom: 1px solid ${Color.Neutral[5]};
    ${(props) => {
        if (props.$isFirst) {
            return css`
                border-top: 1px solid ${Color.Neutral[5]};
            `;
        }
    }}
`;

export const ClickableRowHeaderTitle = styled(Text.H5)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: ${Color.Primary};
    :hover {
        cursor: pointer;
    }
`;

export const RowHeaderSubtitle = styled(Text.XSmall)`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${Color.Neutral[3]};
`;

export const Loader = styled(LoadingDotsSpinner)<LoaderProps>`
    grid-column: 2 / -1;
    grid-row: 1 / ${(props) => props.$numOfRows};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NoResultsFound = styled(ErrorDisplay)<NoResultsFoundProps>`
    height: 100%;
    width: 100%;
    padding: 5rem 0 5rem 0;
    ${(props) => {
        if (!props.$show) {
            return css`
                display: none;
            `;
        }
    }}
`;

const gradientAnimation = keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

export const LoadingCell = styled.div`
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

export const LazyLoadContainer = styled.div`
    display: flex;
    border-bottom: 1px solid ${Color.Neutral[5]};
`;

export const LoadingCellWrapper = styled.div<LoadingCellWrapperProps>`
    border-right: 0.5px solid ${Color.Accent.Light[1]};
    width: ${(props) => `${props.$width}px`};
    height: 100%;
    padding: 20px 12px 20px 12px;
`;
