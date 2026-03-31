import styled, { css } from "styled-components";

import { Button } from "../../button";
import { lineClampCss } from "../../shared/styles";
import { Typography } from "../../typography";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";
import {
    CELL_HEIGHT,
    HEADER_HEIGHT,
    MIN_COLUMN_WIDTH,
    TIME_INDICATOR_WIDTH,
} from "../const";

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
export const ArrowButton = styled(Button)`
    color: ${V3_Colour["icon"]};
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
    border: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour["border"]};
    border-radius: ${V3_Radius["md"]};
    background: ${V3_Colour["bg"]};
`;

export const HeaderContainer = styled.div<HeaderContainerStyleProps>`
    z-index: 3;
    max-height: ${HEADER_HEIGHT}px;
    border-top-right-radius: ${V3_Radius["md"]};
    border-top-left-radius: ${V3_Radius["md"]};
    position: sticky;
    border: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour["border"]};
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
    background: ${V3_Colour["bg-strong"]};
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
    padding: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-8"]};
    background: ${V3_Colour["bg-strong"]};
    border-right: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${V3_Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;

export const ServiceHeaderContainer = styled.div`
    width: 15rem;
    padding-left: ${V3_Spacing["spacing-16"]};
`;

export const Title = styled(Typography.BodyMD)`
    color: ${V3_Colour["text-primary"]};
    font-weight: ${V3_Font.Spec["weight-semibold"]};
    margin-top: 0;
    ${lineClampCss(2)}
    text-overflow: ellipsis;
    word-wrap: break-word;
`;

export const Description = styled(Typography.BodySM)`
    margin-top: ${V3_Spacing["spacing-8"]};
    background-color: ${V3_Colour["bg-success-hover"]};
    border-radius: ${V3_Radius["full"]};
    width: fit-content;
    padding: ${V3_Spacing["spacing-4"]} ${V3_Spacing["spacing-8"]};
    color: ${V3_Colour["text-success"]};
    font-weight: ${V3_Font.Spec["weight-regular"]};
    span {
        font-weight: ${V3_Font.Spec["weight-semibold"]};
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
    border: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour["border"]};
    border-top: none;
    border-bottom-right-radius: ${V3_Radius["md"]};
    border-bottom-left-radius: ${V3_Radius["md"]};
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
    border-right: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${V3_Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;

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

export const SlotContent = styled(Typography.BodyXS)<SlotContentStyleProps>`
    margin-top: 0;
    overflow: hidden;
    width: calc(100% - 27px);
    padding: 2px ${V3_Spacing["spacing-8"]};
    position: absolute;
    top: ${(props) => props.$offsetTop || 0}px;
    ${V3_Font["body-xs-semibold"]};
    border-radius: ${V3_Radius["sm"]};
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
                        ${V3_Colour["bg-warning"]},
                        ${V3_Colour["bg-warning"]} 5px,
                        ${V3_Colour["bg-warning-hover"]} 5px,
                        ${V3_Colour["bg-warning-hover"]} 10px
                    )
                `;
            case "blocked":
                return V3_Colour["bg-inverse-subtle"];
            case "available":
                return V3_Colour["bg-success-hover"];
            case "booked":
                return V3_Colour["bg-primary-subtler"];
            default:
                return V3_Colour["bg"];
        }
    }};

    color: ${(props) =>
        props.$status === "blocked"
            ? V3_Colour["text-inverse"]
            : V3_Colour["text-subtle"]};

    border-left: ${V3_Border["width-040"]} solid
        ${(props) =>
            props.$status === "available" ? V3_Colour["icon-success"] : "none"};
`;

export const SlotTime = styled.span`
    ${V3_Font["body-xs-regular"]};
`;

export const SlotAvailability = styled.span`
    ${V3_Font["body-xs-semibold"]};
`;

export const Timeline = styled.div<TimelineStyleProps>`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${V3_Colour["icon-primary"]};
    top: ${(props) => props.$top}px;
    z-index: 2;
`;

export const EmptySlot = styled.div`
    width: 100%;
    height: ${CELL_HEIGHT - 1}px;
`;
