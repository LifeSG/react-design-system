import styled, { css } from "styled-components";
import { Border, Colour, Radius, Shadow } from "../../theme";
import { CELL_HEIGHT } from "../const";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface SlotCellStyleProps {
    $dashed?: boolean;
}

interface SlotColumnOverlayStyleProps {
    $columnIndex: number;
    $totalVisibleColumns: number;
    $actualWidthPercentage?: number;
    $leftPosition?: number;
}

interface HiddenColumnsStyleProps {
    $heightPercentage?: number;
}

// =============================================================================
// STYLING
// =============================================================================
export const SlotCell = styled.div<SlotCellStyleProps>`
    min-height: ${CELL_HEIGHT}px;
    position: relative;
    border-bottom: ${Border["width-010"]} solid ${Colour["border"]};
    ${(props) =>
        props.$dashed &&
        css`
            border-bottom-style: dashed;
        `}
    cursor: pointer;
`;

export const SlotColumnOverlay = styled.div<SlotColumnOverlayStyleProps>`
    position: absolute;
    top: 0;
    left: ${(props) => {
        return `calc((100% - 14px) * ${props.$leftPosition} / 100)`;
    }};
    width: ${(props) => {
        return `calc((100% - 14px) * ${props.$actualWidthPercentage} / 100)`;
    }};
    height: 100%;
    display: flex;
    flex-direction: column;
    pointer-events: none;
    overflow: visible;
    z-index: 1;
`;

export const HiddenColumns = styled.div<HiddenColumnsStyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${Colour["text-primary"]};
    min-height: ${(props) =>
        props.$heightPercentage
            ? `${props.$heightPercentage}%`
            : `${CELL_HEIGHT}px`};
    height: ${(props) =>
        props.$heightPercentage ? `${props.$heightPercentage}%` : "auto"};
    pointer-events: auto;
    &:hover {
        border-radius: ${Radius["sm"]};
        box-shadow: ${Shadow["sm-subtle"]};
    }
`;
