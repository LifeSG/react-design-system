import styled, { css } from "styled-components";
import { Border, Colour, Font, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { HEADER_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface TitleStyleProps {
    $isToday?: boolean;
}

interface TimelineStyleProps {
    $top: number;
}

// =============================================================================
// STYLING
// =============================================================================
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

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px repeat(7, 1fr);
    max-height: ${HEADER_HEIGHT}px;
`;

export const BlankCell = styled.div`
    min-width: ${TIME_INDICATOR_WIDTH}px;
    position: sticky;
    left: 0;
    z-index: 2;
`;

export const ServiceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-start: 2;
    grid-column-end: 9;
`;

export const ServiceHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 24px;
    color: ${Colour["text-primary"]};
`;
export const Title = styled(Typography.BodyMD)<TitleStyleProps>`
    font-weight: ${Font.Spec["weight-semibold"]};
    ${(props) =>
        props.$isToday &&
        css`
            background: ${Colour["bg-hover"]};
            color: ${Colour["text-primary"]};
            border-radius: 50%;
            border: ${Border["width-010"]} ${Border.solid}
                ${Colour["bg-primary"]};
            width: ${Spacing["spacing-40"]};
            height: ${Spacing["spacing-40"]};
            display: flex;
            align-items: center;
            justify-content: center;
        `}
`;

export const Description = styled(Typography.BodyMD)`
    font-weight: ${Font.Spec["weight-semibold"]};
`;

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px repeat(7, 1fr);
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;
export const SlotGrid = styled.div`
    grid-column-start: 2;
    grid-column-end: 9;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    min-width: max-content;
`;

export const Timeline = styled.div<TimelineStyleProps>`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${Colour["icon-primary"]};
    top: ${(props) => props.$top}px;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        left: -6px;
        top: -6px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${Colour["icon-primary"]};
        box-sizing: border-box;
        z-index: 1;
    }
`;

export const SlotColumn = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;
