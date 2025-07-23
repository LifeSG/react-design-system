import styled from "styled-components";
import { Border, Colour, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { CELL_HEIGHT, HEADER_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";

export const TimeSlotContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const HeaderContainer = styled.div`
    display: flex;
    max-height: ${HEADER_HEIGHT}px;
    border-top-right-radius: ${Radius["md"]};
    border-top-left-radius: ${Radius["md"]};
    position: sticky;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;

    /* Hide the vertical scrollbar visually but keep its space */
    &::-webkit-scrollbar {
        width: 17px; /* Match typical scrollbar width */
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
    width: ${TIME_INDICATOR_WIDTH}px;
    background: ${Colour["bg-strong"]};
    position: sticky;
    left: 0;
    z-index: 2;
`;
export const ServiceContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const ServiceHeader = styled.div`
    flex: 1;
    min-width: 25%;
    padding: 24px;
    color: ${Colour["text-primary"]};
    background: ${Colour["bg-strong"]};
    border-left: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    font-weight: 600;
    line-height: 24px;
`;

export const Title = styled(Typography.BodyMD)``;

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

export const BodyContainer = styled.div`
    display: flex;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
`;

export const SlotGrid = styled.div`
    display: flex;
    flex: 1;
    min-width: max-content;
`;

export const SlotColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 25%;
`;

export const SlotCell = styled.div<{
    startTime?: string;
}>`
    min-height: ${CELL_HEIGHT}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-bottom: ${Border["width-010"]} ${Colour["border"]}
        ${({ startTime }) => (startTime?.endsWith(":00") ? "dashed" : "solid")};
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

export const SlotTime = styled.span``;

export const SlotAvailability = styled.span``;

export const Timeline = styled.div`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${Colour["icon-primary"]};
    z-index: 2;
`;
