import styled from "styled-components";
import { Border, Colour, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { CELL_HEIGHT, HEADER_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";

export const TimeSlotDayViewContainer = styled.div`
    display: flex;
    width: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-top-left-radius: ${Radius["md"]};
    border-top-right-radius: ${Radius["md"]};
`;

export const BlankCell = styled.div`
    height: ${HEADER_HEIGHT}px;
    position: sticky;
    top: 0;
    z-index: 1;
    background: ${Colour["bg-strong"]};
`;

export const TimeIndicatorColumn = styled.div`
    width: ${TIME_INDICATOR_WIDTH}px;
    display: flex;
    flex-direction: column;
    position: sticky;
    z-index: 2;
    left: 0;
`;

export const ServiceColumnsContainer = styled.div<{ serviceCount: number }>`
    display: flex;
    flex: 1;
`;

export const ServiceColumn = styled.div`
    flex: 1;
    min-width: 25%;
    display: flex;
    flex-direction: column;
`;

export const ServiceHeader = styled.div`
    padding: 16px;
    background: ${Colour["bg-strong"]};
    padding: 24px 16px;
    height: ${HEADER_HEIGHT}px;
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-left: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:first-child {
        border-left: none;
    }
    position: sticky;
    top: 0;
    z-index: 1;
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

export const SlotCell = styled.div<{
    startTime?: string;
}>`
    height: ${CELL_HEIGHT}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    border-left: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-bottom: ${Border["width-010"]} ${Colour["border"]}
        ${({ startTime }) => (startTime?.endsWith(":00") ? "solid" : "dashed")};
    cursor: pointer;
`;

export const SlotContent = styled(Typography.BodyXS)<{
    status?: string;
    duration: number;
}>`
    width: calc(100% - 28px);
    padding: 8px;
    position: absolute;
    font-weight: 400;
    border-radius: 4px;
    height: ${({ duration }) => `${(duration / 30) * CELL_HEIGHT}px`};

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
    border-bottom: 1px solid white;
`;
