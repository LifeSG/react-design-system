import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text";
import { Checkbox } from "../checkbox";
import { ErrorDisplay } from "../error-display";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface TableStyleProps {
    $addMarginToFirstColumn?: boolean;
    $addMarginToLastColumn?: boolean;
}
interface HeaderCellProps {
    $clickable: boolean;
    $maxWidth?: string;
}
interface BodyRowProps {
    $alternating: boolean;
    $isSelected?: boolean;
    $isSelectable?: boolean;
}
interface BodyRowProps {
    $alternating: boolean;
    $isSelected?: boolean;
    $isSelectable?: boolean;
}
interface BodyCellProps {
    $width?: string;
}
// =============================================================================
// STYLES
// =============================================================================

export const TableWrapper = styled.div`
    width: 100%;
    border: 0.125rem solid ${Color.Neutral[6]};
    border-radius: 0.5rem 0.5rem 0 0;
    overflow: auto;
`;

export const Table = styled.table<TableStyleProps>`
    width: 100%;
    border-collapse: collapse;
    tr,
    td {
        padding: 1.5rem 0;
    }
    ${(props) => {
        if (props.$addMarginToFirstColumn) {
            return css`
                th:first-child,
                td:first-child {
                    padding-left: 1.5rem;
                }
            `;
        }
    }}
    ${(props) => {
        if (props.$addMarginToLastColumn) {
            return css`
                th:last-child,
                td:last-child {
                    padding-right: 1.5rem;
                }
            `;
        }
    }}
`;

export const HeaderRow = styled.tr`
    background-color: #f5f5f5;
    height: 5rem;
    border-bottom: 0.125rem solid ${Color.Neutral[6]};
`;

export const HeaderCell = styled.th<HeaderCellProps>`
    padding: 1rem 0;
    text-align: left;
    cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
    max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : "auto")};
    vertical-align: middle;
    ${TextStyleHelper.getFontFamily("H5", "bold")}
    color: ${Color.Neutral[1]};
`;

export const HeaderCellWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Color.Neutral[1]};
        margin-left: 0.5rem;
    }
`;

export const BodyRow = styled.tr<BodyRowProps>`
    background-color: ${(props) => {
        if (props.$isSelected) {
            return css`
                ${Color.Accent.Light[5]};
            `;
        } else if (props.$alternating) {
            return css`
                ${Color.Neutral[7]};
            `;
        } else {
            return css`
                ${Color.Neutral[8]};
            `;
        }
    }};
    border-top: 0.125rem solid ${Color.Neutral[6]};
    &:hover {
        background-color: ${(props) => {
            if (!props.$isSelected && props.$isSelectable) {
                return css`
                    ${Color.Accent.Light[4]};
                `;
            }
        }};
    }
    &:first-child {
        border-top: none;
    }
`;

export const BodyCell = styled.td<BodyCellProps>`
    padding: 1.25rem 1rem;
    width: ${(props) => (props.$width ? props.$width : "auto")};
    vertical-align: middle;
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
`;
