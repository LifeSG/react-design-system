import styled, { css } from "styled-components";

import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Radius,
    V3_Shadow,
} from "../../v3_theme";
import { CELL_HEIGHT } from "../const";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface SlotCellStyleProps {
    $dashed?: boolean;
}

interface SlotColumnOverlayStyleProps {
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
    border-bottom: ${V3_Border["width-010"]} solid ${V3_Colour["border"]};
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
    overflow: visible;
    z-index: 1;
`;

export const HiddenColumns = styled.button<HiddenColumnsStyleProps>`
    background-color: unset;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${V3_Colour["text-primary"]};
    ${V3_Font["body-xs-semibold"]};
    min-height: ${(props) =>
        props.$heightPercentage
            ? `${props.$heightPercentage}%`
            : `${CELL_HEIGHT}px`};
    height: ${(props) =>
        props.$heightPercentage ? `${props.$heightPercentage}%` : "auto"};
    &:hover {
        border-radius: ${V3_Radius["sm"]};
        box-shadow: ${V3_Shadow["sm-subtle"]};
    }
`;
