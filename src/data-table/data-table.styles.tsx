import styled, { css } from "styled-components";
import { Color } from "../color";
import { ErrorDisplay } from "../error-display";
import { DesignToken } from "../design-token";
import { Text } from "../text";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
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

// =============================================================================
// STYLES CONSTANTS
// =============================================================================
const borderColor = Color.Neutral[5];
const fontColor = Color.Neutral[1];

// =============================================================================
// STYLES
// =============================================================================
export const TableWrapper = styled.div`
    width: 100%;
    border: 1px solid ${borderColor};
    border-radius: 0.5rem;
    overflow: auto;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    th:last-child,
    td:last-child {
        padding-right: 1.5rem;
    }
    th:first-child,
    td:first-child {
        padding-left: 1.5rem;
    }
    tr:nth-child(2) {
        border-top: none;
    }
`;

export const HeaderRow = styled.tr`
    background-color: ${DesignToken.Table.Header};
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
                ${DesignToken.Table.Cell.Selected};
            `;
        } else if (props.$alternating) {
            return css`
                ${DesignToken.Table.Cell.Primary};
            `;
        } else {
            return css`
                ${DesignToken.Table.Cell.Secondary};
            `;
        }
    }};
    border-top: 1px solid ${borderColor};
    &:hover {
        background-color: ${(props) => {
            if (!props.$isSelected && props.$isSelectable) {
                return css`
                    ${DesignToken.Table.Cell.Hover};
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
    min-height: 2.625rem;
    max-height: 5.75rem;
`;

export const BodyCellContent = styled(Text.Body)`
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
