import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { Color } from "src/color";
import { IconButton } from "src/icon-button";
import { Text } from "src/text";
import styled, { css } from "styled-components";
import { SlotStyle, TDirection } from "./types";

export const CELL_WIDTH = 44; // NOTE in px

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

interface ArrowStyleProps {
    $direction?: TDirection;
}

interface TimeSlotStyleProps {
    $width: number;
    $left: number;
    $color: string;
    $styleType: SlotStyle;
    $secondaryColor?: string;
    $clickable?: boolean;
}

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const ArrowButton = styled(IconButton)<ArrowStyleProps>`
    z-index: 2;
    position: absolute;
    bottom: 1rem;
    background-color: ${Color.Neutral[8]};
    box-shadow: 0px 2px 8px rgba(104, 104, 104, 0.5);
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
    color: ${Color.Primary};
`;

export const ArrowIconLeft = styled(ChevronLeftIcon)`
    font-size: 1rem;
    color: ${Color.Primary};
`;

export const TimeSlotBarContainer = styled.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: 5rem;
`;

export const TimeMarkerWrapper = styled.div`
    position: relative;
    white-space: nowrap;
    height: 1.25rem;
`;

export const TimeSlotWrapper = styled.div`
    display: flex;
    white-space: nowrap;
`;

export const TimeMarker = styled.div<{ isHour: boolean }>`
    display: inline-block;
    width: ${CELL_WIDTH}px;
    height: ${({ isHour }) => (isHour ? "1.25rem" : "0.625rem")};
    position: relative;
    border-left: 1px solid ${Color.Neutral[4]};
`;

export const TimeLabel = styled(Text.XSmall)`
    color: ${Color.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;

export const TimeSlot = styled.div<TimeSlotStyleProps>`
    position: absolute;
    height: 3.375rem;
    width: ${({ $width }) => `${$width}px`};
    left: ${({ $left }) => `${$left}px`};
    background-color: ${({ $color }) => $color};
    cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

    ${(props) =>
        props.$styleType === "stripes" &&
        css`
            background: repeating-linear-gradient(
                135deg,
                ${props.$secondaryColor || Color.Neutral[5]} 0px,
                ${props.$secondaryColor || Color.Neutral[5]} 10px,
                ${props.$color} 10px,
                ${props.$color} 20px
            );
        `}
`;

export const Border = styled.div`
    position: absolute;
    top: 1.25rem;
    height: 3.375rem;
    z-index: 1;
    border-right: 1px solid ${Color.Neutral[4]};
`;

export const CellText = styled(Text.XSmall)<{ slotWidth: number }>`
    color: ${Color.Neutral[3]};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    max-width: ${({ slotWidth }) => `calc(${slotWidth}px - 8px)`};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
