import styled from "styled-components";

import { BasicButton } from "../shared/input-wrapper";
import { lineClampCss } from "../shared/styles";
import {
    Border,
    Colour,
    Font,
    Motion,
    Radius,
    Shadow,
    Spacing,
} from "../theme";
import { Typography } from "../typography";

export const dataTableClassNames = {
    tableStickyHeader: "dataTableTableStickyHeader",
    tableBodyShowLastRowBottomBorder:
        "dataTableTableBodyShowLastRowBottomBorder",
    actionBarWrapperFixed: "dataTableActionBarWrapperFixed",
    actionBarFloat: "dataTableActionBarFloat",
    headerCellClickable: "dataTableHeaderCellClickable",
    headerCellCheckbox: "dataTableHeaderCellCheckbox",
    bodyRowAlternating: "dataTableBodyRowAlternating",
    bodyRowSelected: "dataTableBodyRowSelected",
    bodyRowSelectable: "dataTableBodyRowSelectable",
    bodyCellCheckbox: "dataTableBodyCellCheckbox",
} as const;

export const dataTableInternalTokens = {
    actionBarWrapperLeft: "--fds-internal-dataTable-actionBarWrapper-left",
    actionBarWrapperWidth: "--fds-internal-dataTable-actionBarWrapper-width",
} as const;

// =============================================================================
// STYLES CONSTANTS
// =============================================================================

// =============================================================================
// STYLES
// =============================================================================
export const TableWrapper = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    border-radius: ${Radius["md"]};

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

export const Table = styled.table`
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

    &.${dataTableClassNames.tableStickyHeader} {
        thead {
            position: sticky;
            top: 0;
            z-index: 20;
        }
    }
`;

export const TableBody = styled.tbody`
    tr:last-child {
        td {
            border-bottom: none;
        }
    }

    &.${dataTableClassNames.tableBodyShowLastRowBottomBorder} {
        tr:last-child {
            td {
                border-bottom: ${Border["width-010"]} ${Border["solid"]}
                    ${Colour["border"]};
            }
        }
    }
`;

export const ActionBarWrapper = styled.div`
    bottom: 0;
    position: sticky;
    left: 0;

    ${dataTableInternalTokens.actionBarWrapperLeft}: initial;
    ${dataTableInternalTokens.actionBarWrapperWidth}: initial;

    &.${dataTableClassNames.actionBarWrapperFixed} {
        position: fixed;
        left: var(${dataTableInternalTokens.actionBarWrapperLeft}, 0px);
        width: var(${dataTableInternalTokens.actionBarWrapperWidth}, 100%);
    }
`;

export const TextButton = styled(BasicButton)`
    ${Font["body-md-semibold"]}
    cursor: pointer;
    color: ${Colour["text-primary"]};
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    &:hover {
        color: ${Colour["text-hover"]};
    }
`;

export const ActionBar = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 3.5rem;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-24"]};
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    background-color: ${Colour["bg-selected"]};
    transition: all 300ms ease;
    border-radius: ${Radius["none"]} ${Radius["none"]} ${Radius["sm"]}
        ${Radius["sm"]};

    &.${dataTableClassNames.actionBarFloat} {
        transform: translateX(0.5rem) translateY(-2rem);
        border-radius: ${Radius["sm"]};
        box-shadow: ${Shadow["xs-subtle"]};
        width: calc(100% - ${Spacing["spacing-16"]});
        border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
    }
`;

export const HeaderRow = styled.tr`
    background-color: ${Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const HeaderCell = styled.th`
    padding: 1.25rem 1rem;
    text-align: left;
    cursor: default;
    vertical-align: middle;
    color: ${Colour["text"]};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    &.${dataTableClassNames.headerCellClickable} {
        cursor: pointer;
    }

    &.${dataTableClassNames.headerCellCheckbox} {
        width: 4rem;
        padding: 1.25rem 0.5rem 1.25rem 1.5rem;
    }

    &:focus-within {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: -3px;
    }
`;

export const HeaderCellWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Colour["text"]};
        margin-left: 0.5rem;
    }
`;

export const BodyRow = styled.tr`
    background-color: ${Colour["bg"]};
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    &.${dataTableClassNames.bodyRowAlternating} {
        background-color: ${Colour["bg-strong"]};
    }

    &.${dataTableClassNames.bodyRowSelected} {
        background-color: ${Colour["bg-selected"]};
    }

    &.${dataTableClassNames.bodyRowSelectable}:hover {
        background-color: ${Colour["bg-hover-strong"]};
    }
`;

export const BodyCell = styled.td`
    padding: 1.25rem 1rem;
    vertical-align: middle;
    color: ${Colour["text"]};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};

    &.${dataTableClassNames.bodyCellCheckbox} {
        padding: 1.25rem 0.5rem 1.25rem 1.5rem;
    }
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
