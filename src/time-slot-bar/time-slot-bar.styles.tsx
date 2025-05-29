import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import styled, { css } from "styled-components";
import { ClickableIcon } from "../shared/clickable-icon";
import { Border, Colour, ThemeStyleProps } from "@/theme";
import { Typography } from "../typography";
import { Direction, SlotStyle, TimeSlotBarVariant } from "./types";

const MAX_LINE_HEIGHT = 1.25; // NOTE in rem

// =============================================================================
// STYLING HELPERS
// =============================================================================

// Function to get the width of a cell in px
export const getCellWidth = (variant: TimeSlotBarVariant) => {
    if (variant === "minified") {
        return 12;
    } else {
        return 40;
    }
};

// Function to get the height of a cell in px
export const getCellHeight = (variant: TimeSlotBarVariant) => {
    if (variant === "minified") {
        return 12;
    } else {
        return 40;
    }
};

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

interface ArrowStyleProps {
    $direction?: Direction;
    $variant: TimeSlotBarVariant;
}

export interface TimeSlotStyleProps {
    $type?: "default" | "vertical";
    $variant: TimeSlotBarVariant;
    $width?: number;
    $left?: number;
    $styleType: SlotStyle;
    $bgColor: string | ((props: ThemeStyleProps) => string);
    $bgColor2?: string | ((props: ThemeStyleProps) => string);
    $clickable?: boolean;
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
    background-color: ${Colour.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${Colour.Primitive["neutral-50"]} r g b / 50%);
    border-radius: 50%;
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
    color: ${Colour["icon-primary"]};
`;

export const ArrowIconLeft = styled(ChevronLeftIcon)`
    font-size: 1rem;
    color: ${Colour["icon-primary"]};
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
    border-left: ${Border["width-010"]} ${Border.solid}
        ${Colour["border-stronger"]};
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
    color: ${Colour["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;

export const TimeSlot = styled.div<TimeSlotStyleProps>`
    ${(props) => {
        if (props.$type === "vertical") {
            return css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `;
        } else {
            return css`
                position: absolute;
                height: ${getCellHeight(props.$variant)}px;
                width: ${props.$width}px;
                left: ${props.$left}px;
            `;
        }
    }}
    background-color: ${({ $bgColor }) => $bgColor};
    cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

    ${(props) =>
        props.$styleType === "stripes" &&
        css`
            background: repeating-linear-gradient(
                135deg,
                ${props.$bgColor2 || Colour["bg-strongest"]} 0px,
                ${props.$bgColor2 || Colour["bg-strongest"]} 10px,
                ${props.$bgColor || Colour["bg-stronger"]} 10px,
                ${props.$bgColor || Colour["bg-stronger"]} 20px
            );
        `}
`;

export const TimeSlotBorder = styled.div<{ $variant: TimeSlotBarVariant }>`
    position: absolute;
    top: ${MAX_LINE_HEIGHT}rem;
    height: ${({ $variant }) => `${getCellHeight($variant)}px`};
    z-index: 1;
    border-right: ${Border["width-010"]} ${Border.solid}
        ${Colour["border-stronger"]};
`;

export const CellText = styled(Typography.BodyXS)<CellTextStyleProps>`
    color: ${(props) => props.$color || Colour.text(props)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
