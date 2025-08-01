import styled, { css } from "styled-components";
import { Border, Colour, Radius } from "../../theme";
import { Typography } from "../../typography";
import { CELL_HEIGHT, HEADER_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";
// Styled components for slot block, placeholder, button, and row container

export const TimeSlotContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    height: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-radius: ${Radius["md"]};
    background: ${Colour["bg"]};
`;

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px repeat(7, 1fr); /* Time column + 7 days */
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
    grid-template-columns: repeat(7, 1fr); /* 7 columns for 7 days */
    grid-column-start: 2;
    grid-column-end: 9;
`;

export const ServiceHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    color: ${Colour["text-primary"]};
`;
export const Title = styled(Typography.BodyMD)`
    font-weight: 600;
`;

export const Description = styled(Typography.BodyMD)`
    font-weight: 600;
`;

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px repeat(7, 1fr); /* Time column + 7 days */
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
    grid-template-columns: repeat(7, 1fr); /* 7 columns for 7 days */
    min-width: max-content;
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

export const MoreButton = styled.button<{
    $left?: number;
    $slotWidth?: number;
    $slotGap?: number;
}>`
    background: ${Colour["bg"]};
    border: 1px solid ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    padding: 2px 4px;
    font-size: 10px;
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: 0;
    height: ${CELL_HEIGHT - 1}px;
    width: ${({ $slotWidth = 30 }) => $slotWidth}px;
    left: ${({ $left = 0 }) => $left}px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colour["text-primary"]};

    &:hover {
        background: ${Colour["bg-strong"]};
    }
`;

export const SlotRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    height: 100%;
    position: relative;
`;

export const SlotContent = styled(Typography.BodyXS)<{
    status?: string;
    duration?: number;
    $column?: number;
    $slotWidth?: number;
    $slotGap?: number;
    $durationSlots?: number;
}>`
    width: ${({ $slotWidth = 30 }) => $slotWidth}px;
    padding: 2px;
    position: absolute;
    margin-top: 0;
    font-weight: 500;
    border-radius: ${Radius["sm"]};
    z-index: 1;
    left: ${({ $column = 0, $slotWidth = 30, $slotGap = 2 }) =>
        $column * ($slotWidth + $slotGap)}px;
    height: ${({ $durationSlots = 1 }) => $durationSlots * CELL_HEIGHT - 1}px;
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ status }) => {
        switch (status) {
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
                return Colour["bg-available"];
            case "booked":
                return Colour["bg-primary-subtler"];
            default:
                return Colour["bg"];
        }
    }};

    color: ${({ status }) =>
        status === "blocked" ? Colour["text-inverse"] : "inherit"};

    border-left: ${({ status }) =>
        status === "available"
            ? `4px solid ${Colour["icon-success"]}`
            : "none"};
`;
