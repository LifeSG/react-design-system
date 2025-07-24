import styled from "styled-components";
import { Border, Colour, Radius } from "../../theme";
import { Typography } from "../../typography";
import {
    CELL_HEIGHT,
    HEADER_HEIGHT,
    SLOT_INTERVAL,
    TIME_INDICATOR_WIDTH,
} from "../const";
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
    border-top-right-radius: ${Radius["md"]};
    border-top-left-radius: ${Radius["md"]};
    position: sticky;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-bottom: none;
    overflow-x: hidden;
    overflow-y: scroll;

    /* Hide the vertical scrollbar visually but keep its space */
    &::-webkit-scrollbar {
        width: 15px;
        background: ${Colour["bg-strong"]};
    }
    &::-webkit-scrollbar-thumb {
        background: ${Colour["bg-strong"]};
    }
    &::-webkit-scrollbar-track {
        background: ${Colour["bg-strong"]};
    }
`;

export const ServiceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* 7 columns for 7 days */
    background: ${Colour["bg-strong"]};
    flex: 1;
`;

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: ${TIME_INDICATOR_WIDTH}px repeat(7, 1fr); /* Time column + 7 days */
    overflow-x: auto;
    overflow-y: auto;
    flex: 1;
    height: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;
export const SlotBlock = styled.div<{ left: number; height: number }>`
    background: #b2f2bb;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 12px;
    cursor: pointer;
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    left: ${({ left }) => left}px;
    top: 0;
    height: ${({ height }) => height}px;
    width: 20px;
`;

export const SlotPlaceholder = styled.div`
    width: 20px;
    height: 100%;
    margin-right: 4px;
    visibility: hidden;
`;

export const MoreButton = styled.button<{ left: number }>`
    background: #ddd;
    border: none;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 12px;
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: 0;
    height: 100%;
    left: ${({ left }) => left}px;
`;

export const SlotRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    height: 100%;
    position: relative;
`;

export const ServiceHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    color: ${Colour["text-primary"]};
    font-weight: 600;
    line-height: 24px;
    flex: 1;
`;

export const Title = styled(Typography.BodyMD)`
    font-weight: 600;
`;

export const Description = styled(Typography.BodyMD)`
    font-weight: 600;
`;

export const SlotColumn = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex: 1;
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};

    &:last-child {
        border-right: none;
    }
`;

export const SlotGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* 7 columns for 7 days */
    flex: 1;
    position: relative;
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
    height: ${CELL_HEIGHT - 1}px;

    display: flex;
    justify-content: space-between;

    background: ${({ status }) => {
        switch (status) {
            case "pending":
                return `repeating-linear-gradient(
                    135deg,
                   ${Colour["bg-warning"]},
                    ${Colour["bg-warning"]} 5px,
                    ${Colour["bg-warning-hover"]} 5px,
                    ${Colour["bg-warning-hover"]} 10px
                )`;
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
