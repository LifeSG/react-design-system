import styled, { css } from "styled-components";
import { Border, Colour, Font, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import {
    CELL_HEIGHT,
    HEADER_HEIGHT,
    MIN_COLUMN_WIDTH,
    TIME_INDICATOR_WIDTH,
} from "../const";
import { IconButton } from "../../icon-button";
import { lineClampCss } from "../../shared/styles";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface HeaderContainerStyleProps {
    $isMobile: boolean;
}

interface ServiceContainerStyleProps {
    $columnCount: number;
}

interface SlotGridStyleProps {
    $columnCount: number;
}

interface SlotCellStyleProps {
    $dashed?: boolean;
}

interface SlotContentStyleProps {
    $status?: string;
    $duration?: number;
    $offsetTop?: number;
}

interface TimelineStyleProps {
    $top: number;
}

// =============================================================================
// STYLING
// =============================================================================
export const ArrowButton = styled(IconButton)`
    color: ${Colour["icon"]};
`;
export const ArrowContainer = styled.div`
    width: 2rem;
`;

export const ScheduleContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 25rem;
    height: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-radius: ${Radius["md"]};
    background: ${Colour["bg"]};
`;

export const HeaderContainer = styled.div<HeaderContainerStyleProps>`
    z-index: 3;
    max-height: ${HEADER_HEIGHT}px;
    border-top-right-radius: ${Radius["md"]};
    border-top-left-radius: ${Radius["md"]};
    position: sticky;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    overflow-x: hidden;
    overflow-y: hidden;

    ${(props) =>
        props.$isMobile
            ? css`
                  display: block;
                  overflow: hidden;
              `
            : css`
                  display: grid;
                  grid-template-columns: ${TIME_INDICATOR_WIDTH}px 1fr;
              `}
`;

export const BlankCell = styled.div`
    min-width: ${TIME_INDICATOR_WIDTH}px;
    background: ${Colour["bg-strong"]};
    position: sticky;
    left: 0;
`;
export const ServiceContainer = styled.div<ServiceContainerStyleProps>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.$columnCount}, 1fr);
`;

export const ServiceColumn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: ${MIN_COLUMN_WIDTH}px;
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-8"]};
    background: ${Colour["bg-strong"]};
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;

export const ServiceHeaderContainer = styled.div`
    width: 15rem;
    padding-left: ${Spacing["spacing-16"]};
`;

export const Title = styled(Typography.BodyMD)`
    color: ${Colour["text-primary"]};
    font-weight: ${Font.Spec["weight-semibold"]};
    margin-top: 0;
    ${lineClampCss(2)}
    text-overflow: ellipsis;
    word-wrap: break-word;
`;

export const Description = styled(Typography.BodySM)`
    margin-top: ${Spacing["spacing-8"]};
    background-color: ${Colour["bg-success-hover"]};
    border-radius: ${Radius["full"]};
    width: fit-content;
    padding: ${Spacing["spacing-4"]} ${Spacing["spacing-8"]};
    color: ${Colour["text-success"]};
    font-weight: ${Font.Spec["weight-regular"]};
    span {
        font-weight: ${Font.Spec["weight-semibold"]};
    }
`;

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px 1fr;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-top: none;
    border-bottom-right-radius: ${Radius["md"]};
    border-bottom-left-radius: ${Radius["md"]};
`;

export const SlotGrid = styled.div<SlotGridStyleProps>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.$columnCount}, 1fr);
    min-width: max-content;
    position: relative;
`;

export const SlotColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${MIN_COLUMN_WIDTH}px;
    min-height: fit-content;
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;

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

export const SlotContent = styled(Typography.BodyXS)<SlotContentStyleProps>`
    margin-top: 0;
    overflow: hidden;
    width: calc(100% - 27px);
    padding: 2px ${Spacing["spacing-8"]};
    position: absolute;
    top: ${(props) => props.$offsetTop || 0}px;
    ${Font["body-xs-semibold"]};
    border-radius: ${Radius["sm"]};
    z-index: 1;
    height: ${(props) =>
        props.$duration
            ? `${(props.$duration / 30) * CELL_HEIGHT - 1}px`
            : `${CELL_HEIGHT - 1}px`};
    display: flex;
    justify-content: space-between;
    background: ${(props) => {
        switch (props.$status) {
            case "pending":
                return css`
                    repeating-linear-gradient(
                        135deg,
                        ${Colour["bg-warning"]},
                        ${Colour["bg-warning"]} 5px,
                        ${Colour["bg-warning-hover"]} 5px,
                        ${Colour["bg-warning-hover"]} 10px
                    )
                `;
            case "blocked":
                return Colour["bg-inverse-subtle"];
            case "available":
                return Colour["bg-success-hover"];
            case "booked":
                return Colour["bg-primary-subtler"];
            default:
                return Colour["bg"];
        }
    }};

    color: ${(props) =>
        props.$status === "blocked"
            ? Colour["text-inverse"]
            : Colour["text-subtle"]};

    border-left: ${Border["width-040"]} solid
        ${(props) =>
            props.$status === "available" ? Colour["icon-success"] : "none"};
`;

export const SlotTime = styled.span`
    ${Font["body-xs-regular"]};
`;

export const SlotAvailability = styled.span`
    ${Font["body-xs-semibold"]};
`;

export const Timeline = styled.div<TimelineStyleProps>`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${Colour["icon-primary"]};
    top: ${(props) => props.$top}px;
    z-index: 2;
`;

export const EmptySlot = styled.div`
    width: 100%;
    height: ${CELL_HEIGHT - 1}px;
`;
