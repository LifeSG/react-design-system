import styled from "styled-components";
import { V3_Border, V3_Colour, V3_Radius, V3_Spacing } from "../v3_theme";

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

TableWrapper.displayName = "Table.Container";

export const TableComponent = styled.table`
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
`;

TableComponent.displayName = "Table.Table";

export const TableBody = styled.tbody`
    :where(tr:last-child) {
        td {
            border-bottom: none;
        }
    }
`;

export const HeaderCell = styled.th`
    padding: ${V3_Spacing["spacing-20"]} ${V3_Spacing["spacing-16"]};
    text-align: left;
    cursor: default;
    vertical-align: middle;
    color: ${fontColor};
    background-color: ${V3_Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${borderColor};

    &:where(&:first-child) {
        padding-left: ${V3_Spacing["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${V3_Spacing["spacing-24"]};
    }
`;

export const BodyRow = styled.tr`
    background-color: ${V3_Colour["bg"]};
    border-top: ${V3_Border["width-010"]} ${V3_Border["solid"]} ${borderColor};
`;

export const BodyCell = styled.td`
    padding: ${V3_Spacing["spacing-20"]} ${V3_Spacing["spacing-16"]};
    vertical-align: middle;
    color: ${fontColor};
    border-bottom: ${V3_Border["width-010"]} ${V3_Border["solid"]}
        ${borderColor};

    &:where(&:first-child) {
        padding-left: ${V3_Spacing["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${V3_Spacing["spacing-24"]};
    }
`;
