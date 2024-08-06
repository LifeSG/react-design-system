import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { ErrorDisplay } from "../error-display";
import { v2_DesignToken } from "../v2_design-token";
import { V2_Text } from "../v2_text";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface TableProps {
    $end: boolean;
    $scrollable: boolean;
    $stickyHeader: boolean;
}
interface TableBodyProps {
    $showLastRowBottomBorder: boolean;
}
interface HeaderCellProps {
    $clickable: boolean;
    $isCheckbox: boolean;
}
interface BodyRowProps {
    $alternating: boolean;
    $isSelected?: boolean;
    $isSelectable?: boolean;
}

interface BodyCellProps {
    $isCheckbox: boolean;
}

interface ActionBarWrapperProps {
    $fixed: boolean;
    $left?: number | undefined;
    $width?: number | undefined;
}

interface ActionBarProps {
    $float: boolean;
    $scrollable: boolean;
}

// =============================================================================
// STYLES CONSTANTS
// =============================================================================
const borderColor = V2_Color.Neutral[5];
const fontColor = V2_Color.Neutral[1];

// =============================================================================
// STYLES
// =============================================================================
export const TableWrapper = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${borderColor};
    border-radius: 0.5rem;

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;

export const TableContainer = styled.div`
    flex: 1;
`;

export const Table = styled.table<TableProps>`
    th:last-child,
    td:last-child {
        padding-right: 1.5rem;
    }
    th:first-child,
    td:first-child {
        padding-left: 1.5rem;
    }
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;

    ${(props) => {
        if (props.$stickyHeader) {
            return css`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `;
        }
    }};
`;

export const TableBody = styled.tbody<TableBodyProps>`
    tr:last-child {
        td {
            border-bottom: ${(props) =>
                props.$showLastRowBottomBorder
                    ? `1px solid ${borderColor}`
                    : "none"};
        }
    }
`;

export const ActionBarWrapper = styled.div<ActionBarWrapperProps>`
    bottom: 0;
    ${(props) => {
        if (props.$fixed) {
            const left = props.$left ? `${props.$left}px` : "0";
            const width = props.$width ? `${props.$width}px` : "100%";
            return css`
                position: fixed;
                left: ${left};
                width: ${width};
            `;
        } else {
            return css`
                position: sticky;
                left: 0;
            `;
        }
    }};
`;

export const ActionBar = styled.div<ActionBarProps>`
    overflow: hidden;
    display: flex;
    ${(props) =>
        props.$float &&
        `
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: 4px;
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: 1px solid ${borderColor};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: 1px solid ${borderColor};
    border-radius: 0 0 4px 4px;
    background-color: ${v2_DesignToken.Table.Cell.Selected};
    transition: all 300ms ease;
`;

export const HeaderRow = styled.tr`
    background-color: ${v2_DesignToken.Table.Header};
    height: 6rem;
    border-bottom: 1px solid ${borderColor};
`;

export const HeaderCell = styled.th<HeaderCellProps>`
    padding: ${(props) =>
        props.$isCheckbox ? "1.25rem 0.5rem 1.25rem 1.5rem" : "1.25rem 1rem"};
    text-align: left;
    cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
    vertical-align: middle;
    color: ${fontColor};
    border-bottom: 1px solid ${borderColor};
    ${(props) => {
        if (props.$isCheckbox) {
            return css`
                width: 4rem;
            `;
        }
    }};
`;

export const HeaderCellWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${V2_Color.Neutral[1]};
        margin-left: 0.5rem;
    }
`;

export const BodyRow = styled.tr<BodyRowProps>`
    background-color: ${(props) => {
        if (props.$isSelected) {
            return css`
                ${v2_DesignToken.Table.Cell.Selected};
            `;
        } else if (props.$alternating) {
            return css`
                ${v2_DesignToken.Table.Cell.Primary};
            `;
        } else {
            return css`
                ${v2_DesignToken.Table.Cell.Secondary};
            `;
        }
    }};
    border-top: 1px solid ${borderColor};
    &:hover {
        ${(props) => {
            if (!props.$isSelected && props.$isSelectable) {
                return css`
                    background-color: ${v2_DesignToken.Table.Cell.Hover};
                `;
            }
        }};
    }
`;

export const BodyCell = styled.td<BodyCellProps>`
    padding: ${(props) =>
        props.$isCheckbox ? "1.25rem 0.5rem 1.25rem 1.5rem" : "1.25rem 1rem"};
    vertical-align: middle;
    color: ${fontColor};
    border-bottom: 1px solid ${borderColor};
`;

export const BodyCellContent = styled(V2_Text.Body)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`;

export const ErrorDisplayElement = styled(ErrorDisplay)`
    h3,
    button {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }
`;

export const EmptyViewCell = styled.td`
    padding: 4rem 0;
`;
