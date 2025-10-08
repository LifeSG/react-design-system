import styled from "styled-components";
import { Border, Colour, Radius, Spacing } from "../theme";

// =============================================================================
// STYLES CONSTANTS
// =============================================================================
const borderColor = Colour["border"];
const fontColor = Colour["text"];

// =============================================================================
// STYLES
// =============================================================================
export const TableWrapper = styled.div`
    overflow: auto;
    border: ${Border["width-010"]} ${Border["solid"]} ${borderColor};
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

export const TableComponent = styled.table`
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
`;

export const TableBody = styled.tbody`
    tr:last-child {
        td {
            border-bottom: none;
        }
    }
`;

export const HeaderCell = styled.th<{ $clickable?: boolean }>`
    padding: ${Spacing["spacing-20"]} ${Spacing["spacing-16"]};
    text-align: left;
    cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
    vertical-align: middle;
    color: ${fontColor};
    background-color: ${Colour["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${borderColor};

    &:where(&:first-child) {
        padding-left: ${Spacing["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${Spacing["spacing-24"]};
    }
`;

export const BodyRow = styled.tr`
    background-color: ${Colour["bg"]};
    border-top: ${Border["width-010"]} ${Border["solid"]} ${borderColor};
`;

export const BodyCell = styled.td`
    padding: ${Spacing["spacing-20"]} ${Spacing["spacing-16"]};
    vertical-align: middle;
    color: ${fontColor};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${borderColor};

    &:where(&:first-child) {
        padding-left: ${Spacing["spacing-24"]};
    }
    &:where(&:last-child) {
        padding-right: ${Spacing["spacing-24"]};
    }
`;
