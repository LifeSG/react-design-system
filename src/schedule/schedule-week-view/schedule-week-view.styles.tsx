import styled from "styled-components";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Radius,
    V3_Spacing,
} from "../../v3_theme";
import { Typography } from "../../typography";
import { HEADER_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
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
    border: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour["border"]};
    border-radius: ${V3_Radius["md"]};
    background: ${V3_Colour["bg"]};
`;

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px repeat(7, 1fr);
    max-height: ${HEADER_HEIGHT}px;
`;

export const BlankCell = styled.div`
    min-width: ${TIME_INDICATOR_WIDTH}px;
    position: sticky;
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
    padding: ${V3_Spacing["spacing-24"]};
    color: ${V3_Colour["text-primary"]};
`;

export const Description = styled(Typography.BodyMD)`
    font-weight: ${V3_Font.Spec["weight-semibold"]};
`;

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px repeat(7, 1fr);
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour["border"]};
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
    background: ${V3_Colour["icon-primary"]};
    top: ${(props) => props.$top}px;
    z-index: 2;

    &::before {
        content: "";
        position: absolute;
        left: -6px;
        top: -6px;
        width: ${V3_Spacing["spacing-12"]};
        height: ${V3_Spacing["spacing-12"]};
        border-radius: ${V3_Radius["full"]};
        background: ${V3_Colour["icon-primary"]};
        z-index: 1;
    }
`;

export const SlotColumn = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    border-right: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${V3_Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;
