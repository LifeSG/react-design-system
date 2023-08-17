import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text";
import { Checkbox } from "../checkbox";
import { ArrowDownIcon, ArrowUpIcon } from "@lifesg/react-icons";
// =============================================================================
// STYLES
// =============================================================================

export const TableWrapper = styled.div`
    width: 100%;
    border: 2px solid ${Color.Neutral[6]};
    border-radius: 0.5rem 0.5rem 0 0;
    overflow: auto;
`;

export const Table = styled.table<{
    $addMarginToFirstColumn?: boolean;
    $addMarginToLastColumn?: boolean;
}>`
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
    border-bottom: 2px solid ${Color.Neutral[6]};
`;

export const HeaderCell = styled.th<{ clickable: boolean; maxWidth?: string }>`
    padding: 1rem;
    text-align: left;
    cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
    max-width: ${({ maxWidth }) => maxWidth || "auto"};
    vertical-align: middle;
    ${TextStyleHelper.getFontFamily("H5", "bold")}
    color: ${Color.Neutral[1]}
`;

export const HeaderCellWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const getBackgroundColor = (isSelected = false, alternating = false) => {
    if (isSelected) {
        return Color.Accent.Light[5];
    } else if (alternating) {
        return Color.Neutral[7];
    } else {
        return Color.Neutral[8];
    }
};

export const BodyRow = styled.tr<{
    alternating: boolean;
    isSelected?: boolean;
    isSelectable?: boolean;
}>`
    ${({ alternating, isSelected }) => css`
        background-color: ${getBackgroundColor(isSelected, alternating)};
    `}
    border-top: 2px solid ${Color.Neutral[6]};
    &:hover {
        ${({ isSelected, isSelectable }) =>
            !isSelected &&
            isSelectable &&
            css`
                background-color: ${Color.Accent.Light[4]};
            `}
    }
    &:first-child {
        border-top: none;
    }
`;

export const BodyCell = styled.td<{ width?: string }>`
    padding: 1.25rem 1rem;
    width: ${({ width: width }) => width || "auto"};
    vertical-align: middle;
`;

export const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CheckBox = styled(Checkbox)``;

const sortIconStyles = css`
    color: ${Color.Neutral[1]};
    font-weight: bold;
    margin-left: 0.5rem;
`;

export const SortArrowUpIcon = styled(ArrowUpIcon)`
    ${sortIconStyles}
`;

export const SortArrowDownIcon = styled(ArrowDownIcon)`
    ${sortIconStyles}
`;

export const LoaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EmptyDataElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    opacity: 0;
    img {
        width: 400px;
        height: 280px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    animation: fade-in 1s ease-in forwards;
    @keyframes fade-in {
        100% {
            opacity: 1;
        }
    }
`;
