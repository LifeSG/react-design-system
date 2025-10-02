import styled from "styled-components";
import { Border, Colour, Radius } from "../theme";

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
    display: flex;
    flex-direction: column;
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

export const TableContainer = styled.div`
    flex: 1;
`;

export const TableComponent = styled.table`
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
`;

export const TableBody = styled.tbody<{ $showLastRowBottomBorder?: boolean }>`
    tr:last-child {
        td {
            border-bottom: ${(props) =>
                props.$showLastRowBottomBorder
                    ? `${Border["width-010"]} ${Border["solid"]} ${borderColor}`
                    : "none"};
        }
    }
`;

export const HeaderCell = styled.th<{ $clickable?: boolean }>`
    padding: 1.25rem 1rem;
    text-align: left;
    cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
    vertical-align: middle;
    color: ${fontColor};
    border-bottom: ${Border["width-010"]} ${Border["solid"]} ${borderColor};
`;

export const BodyRow = styled.tr`
    background-color: ${Colour["bg"]};

    border-top: ${Border["width-010"]} ${Border["solid"]} ${borderColor};

    th {
        background-color: ${Colour["bg-stronger"]};
        height: 6rem;
        border-bottom: ${Border["width-010"]} ${Border["solid"]} ${borderColor};
    }
`;

export const BodyCell = styled.td`
    padding: 1.25rem 1rem;
    vertical-align: middle;
    color: ${fontColor};
`;
