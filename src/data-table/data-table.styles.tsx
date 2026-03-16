import styled, { css } from "styled-components";

import { BasicButton } from "../shared/input-wrapper";
import { lineClampCss } from "../shared/styles";
import { Typography } from "../typography";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Motion,
    V3_Radius,
    V3_Shadow,
    V3_Spacing,
} from "../v3_theme";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface TableProps {
    $end: boolean;
    $scrollable: boolean;
    $stickyHeader: boolean | undefined;
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
const borderColor = V3_Colour["border"];
const fontColor = V3_Colour["text"];

// =============================================================================
// STYLES
// =============================================================================
export const TableWrapper = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]} ${borderColor};
    border-radius: ${V3_Radius["md"]};

    // Hide scrollbar
    &::-webkit-scrollbar {
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
                    ? `${V3_Border["width-010"]} ${V3_Border["solid"]} ${borderColor}`
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

export const TextButton = styled(BasicButton)`
    ${V3_Font["body-md-semibold"]}
    cursor: pointer;
    color: ${V3_Colour["text-primary"]};
    transition: ${V3_Motion["duration-150"]} ${V3_Motion["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    &:hover {
        color: ${V3_Colour["text-hover"]};
    }
`;

export const ActionBar = styled.div<ActionBarProps>`
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-24"]};
    border-top: ${V3_Border["width-010"]} ${V3_Border["solid"]} ${borderColor};
    background-color: ${V3_Colour["bg-selected"]};
    transition: all 300ms ease;
    ${(props) => {
        if (props.$float) {
            return css`
                transform: translateX(0.5rem) translateY(-2rem);
                border-radius: ${V3_Radius["sm"]};
                box-shadow: ${V3_Shadow["xs-subtle"]};
                width: calc(100% - ${V3_Spacing["spacing-16"]});
                border: ${V3_Border["width-010"]} ${V3_Border["solid"]}
                    ${borderColor};
            `;
        } else {
            return css`
                border-radius: ${V3_Radius["none"]} ${V3_Radius["none"]}
                    ${V3_Radius["sm"]} ${V3_Radius["sm"]};
            `;
        }
    }}
`;

export const HeaderRow = styled.tr`
    background-color: ${V3_Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${borderColor};
`;

export const HeaderCell = styled.th<HeaderCellProps>`
    padding: ${(props) =>
        props.$isCheckbox ? "1.25rem 0.5rem 1.25rem 1.5rem" : "1.25rem 1rem"};
    text-align: left;
    cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
    vertical-align: middle;
    color: ${fontColor};
    border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${borderColor};
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
        color: ${fontColor};
        margin-left: 0.5rem;
    }
`;

export const BodyRow = styled.tr<BodyRowProps>`
    background-color: ${(props) => {
        if (props.$isSelected) {
            return css`
                ${V3_Colour["bg-selected"]};
            `;
        } else if (props.$alternating) {
            return css`
                ${V3_Colour["bg-strong"]};
            `;
        } else {
            return css`
                ${V3_Colour["bg"]};
            `;
        }
    }};
    border-top: ${V3_Border["width-010"]} ${V3_Border["solid"]} ${borderColor};
    &:hover {
        ${(props) => {
            if (props.$isSelectable) {
                return css`
                    background-color: ${V3_Colour["bg-hover-strong"]};
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
    border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${borderColor};
`;

export const BodyCellContent = styled(Typography.BodyBL)`
    ${lineClampCss(2)}
    text-overflow: ellipsis;
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

export const ErrorDisplayTitle = styled(Typography.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

export const EmptyViewCell = styled.td`
    padding: 4rem 0;
`;
