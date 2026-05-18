import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import styled, { css } from "styled-components";

import { ClickableIcon } from "../shared/clickable-icon";
import { getCellHeight, getCellWidth } from "../shared/time-slot";
import type { Direction } from "../shared/time-slot/types";
import { Typography } from "../typography";
import { V3_Border, V3_Colour, V3_Shadow } from "../v3_theme";
import type { TimeSlotBarVariant } from "./types";

const MAX_LINE_HEIGHT = 1.25; // NOTE in rem

// =============================================================================
// STYLING HELPERS
// =============================================================================

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

interface ArrowStyleProps {
    $direction?: Direction;
    $variant: TimeSlotBarVariant;
}

interface CellTextStyleProps {
    $slotWidth: number;
    $color?: string;
}

interface TimeMarkerStyleProps {
    $isLongMarker: boolean;
    $variant: TimeSlotBarVariant;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const ArrowButton = styled(ClickableIcon)<ArrowStyleProps>`
    z-index: 2;
    position: absolute;
    bottom: ${({ $variant }) => ($variant === "default" ? "0.25rem" : "0rem")};
    background-color: ${V3_Colour.bg};
    box-shadow: ${V3_Shadow["md-strong"]};
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${(props) =>
        props.$direction === "right"
            ? css`
                  right: 0;
              `
            : css`
                  left: 0;
              `}

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:focus {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`;

export const ArrowIconRight = styled(ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${V3_Colour["icon-primary"]};
`;

export const ArrowIconLeft = styled(ChevronLeftIcon)`
    font-size: 1rem;
    color: ${V3_Colour["icon-primary"]};
`;

export const TimeSlotBarContainer = styled.div<{
    $variant: TimeSlotBarVariant;
}>`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({ $variant }) =>
        `${MAX_LINE_HEIGHT * 16 + getCellHeight($variant)}px`};
`;

export const TimeMarkerWrapper = styled.div`
    position: relative;
    white-space: nowrap;
    height: ${MAX_LINE_HEIGHT}rem;
`;

export const TimeSlotWrapper = styled.div`
    display: flex;
    white-space: nowrap;
`;

export const TimeMarker = styled.div<TimeMarkerStyleProps>`
    display: inline-block;
    width: ${({ $variant }) => `${getCellWidth($variant)}px`};
    position: relative;
    border-left: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${V3_Colour["border-stronger"]};
    ${(props) => {
        let markerHeight = 0;

        switch (props.$variant) {
            case "default":
                markerHeight = props.$isLongMarker ? MAX_LINE_HEIGHT : 0.625;
                break;
            case "minified":
                markerHeight = props.$isLongMarker ? MAX_LINE_HEIGHT : 0;
                break;
            default:
                markerHeight = 0;
                break;
        }

        return css`
            height: ${markerHeight}rem;
        `;
    }}
`;

export const TimeLabel = styled(Typography.BodyXS)`
    color: ${V3_Colour["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;

export const TimeSlotBorder = styled.div<{ $variant: TimeSlotBarVariant }>`
    position: absolute;
    top: ${MAX_LINE_HEIGHT}rem;
    height: ${({ $variant }) => `${getCellHeight($variant)}px`};
    z-index: 1;
    border-right: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${V3_Colour["border-stronger"]};
`;

export const CellText = styled(Typography.BodyXS)<CellTextStyleProps>`
    color: ${(props) => props.$color || V3_Colour.text(props)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
