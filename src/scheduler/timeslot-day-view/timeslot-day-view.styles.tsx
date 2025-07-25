import styled, { css } from "styled-components";
import { Border, Colour, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import {
    CELL_HEIGHT,
    HEADER_HEIGHT,
    TIME_INDICATOR_WIDTH,
    MIN_COLUMN_WIDTH,
} from "../const";
import { ChevronLeftIcon, ChevronRightIcon } from "@lifesg/react-icons";

// -----------------------------------------------------------------------------
// ICONS
// -----------------------------------------------------------------------------
const iconStyle = css`
    color: ${Colour.icon};
    height: 1rem;
    width: 1rem;
`;

export const ArrowLeft = styled(ChevronLeftIcon)`
    ${iconStyle}
`;

export const ArrowRight = styled(ChevronRightIcon)`
    ${iconStyle}
`;

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

export const HeaderContainer = styled.div<{ columnCount: number }>`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px repeat(
            ${({ columnCount }) => columnCount},
            1fr
        );
    max-height: ${HEADER_HEIGHT}px;
    border-top-right-radius: ${Radius["md"]};
    border-top-left-radius: ${Radius["md"]};
    position: sticky;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-bottom: none;
    overflow-x: hidden;
    overflow-y: scroll;

    /* Hide the vertical scrollbar visually but keep its space */
    &::-webkit-scrollbar {
        width: 15px; /* Match typical scrollbar width */
        background: ${Colour["bg-strong"]};
    }
    &::-webkit-scrollbar-thumb {
        background: ${Colour["bg-strong"]};
    }
    &::-webkit-scrollbar-track {
        background: ${Colour["bg-strong"]};
    }
`;

export const BlankCell = styled.div`
    min-width: ${TIME_INDICATOR_WIDTH}px;
    background: ${Colour["bg-strong"]};
    position: sticky;
    left: 0;
    z-index: 2;
`;
export const ServiceContainer = styled.div<{ columnCount: number }>`
    display: grid;
    grid-template-columns: repeat(${({ columnCount }) => columnCount}, 1fr);
    background: ${Colour["bg-strong"]};
`;

export const ServiceColumn = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: ${MIN_COLUMN_WIDTH}px;
    padding: 16px;
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:last-child {
        border-right: none;
    }
`;

export const StyleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Title = styled(Typography.BodyMD)`
    color: ${Colour["text-primary"]};
    font-weight: 600;
`;

export const Description = styled(Typography.BodySM)`
    margin-top: 4px;
    background-color: ${Colour["bg-available"]};
    border-radius: 23px;
    width: fit-content;
    padding: 2px ${Spacing["spacing-8"]};
    color: ${Colour["text-success"]};
    font-weight: 400;
    span {
        font-weight: 600;
    }
`;

export const BodyContainer = styled.div<{ columnCount: number }>`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px repeat(
            ${({ columnCount }) => columnCount},
            1fr
        );
    overflow-x: auto;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;

export const SlotGrid = styled.div<{ columnCount: number }>`
    display: grid;
    grid-template-columns: repeat(${({ columnCount }) => columnCount}, 1fr);
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

export const SlotCell = styled.div<{
    startTime?: string;
}>`
    min-height: ${CELL_HEIGHT}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    border-bottom: ${Border["width-010"]} ${Colour["border"]} ${({ startTime }) =>
        startTime?.endsWith(":00") ? "dashed" : "solid"};
    cursor: pointer;
`;

export const SlotContent = styled(Typography.BodyXS)<{
    status?: string;
    duration?: number;
}>`
    width: calc(100% - 28px);
    padding: 8px;
    position: absolute;
    font-weight: 500;
    border-radius: ${Radius["sm"]};
    z-index: 1;
    height: ${({ duration }) =>
        duration
            ? `${(duration / 30) * CELL_HEIGHT - 1}px`
            : `${CELL_HEIGHT - 1}px`};
    display: flex;
    justify-content: space-between;
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

    border-left: 4px solid
        ${({ status }) =>
            status === "available" ? Colour["icon-success"] : "none"};
`;

export const SlotTime = styled.span``;

export const SlotAvailability = styled.span``;

export const Timeline = styled.div<{ $top: number }>`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${Colour["icon-primary"]};
    top: ${({ $top }) => $top}px;
    z-index: 2;
`;
