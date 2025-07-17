import styled from "styled-components";
import { Border, Colour, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";

export const TimeSlotContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-top-right-radius: ${Radius["md"]};
    border-top-left-radius: ${Radius["md"]};
`;

export const ServiceHeaderRow = styled.div`
    display: flex;
    background: ${Colour["bg-strong"]};
    max-height: 130px;
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;

export const BlankCell = styled.div`
    width: 42px;
`;

export const ServiceHeader = styled(Typography.BodyMD)`
    flex: 1;
    min-width: 180px;
    padding: 24px;
    color: ${Colour["text-primary"]};
    font-weight: 600;
    line-height: 24px;
    border-left: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    &:nth-child(2) {
        border-left: none;
    }
`;

export const Title = styled.div``;

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

export const GridBody = styled.div`
    display: flex;
    width: 100%;
`;

export const TimeColumn = styled(Typography.BodySM)`
    width: 42px;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    color: ${Colour["text-subtler"]};

    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;

export const TimeLabel = styled.div`
    height: 96px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 8px;
`;

export const SlotGrid = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const SlotRow = styled.div`
    display: flex;
    min-height: 48px;
`;

export const SlotCell = styled.div<{
    startTime?: string;
}>`
    flex: 1;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    border-left: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    border-bottom: ${Border["width-010"]} ${Colour["border"]}
        ${({ startTime }) => (startTime?.endsWith(":00") ? "dashed" : "solid")};
    cursor: pointer;
`;

export const SlotContent = styled(Typography.BodyXS)<{
    status?: string;
    duration?: number;
}>`
    width: 90%;
    padding: 8px;
    position: absolute;
    font-weight: 500;
    border-radius: 4px;
    z-index: 1;
    height: ${({ duration }) =>
        duration ? `${(duration / 30) * 48}px` : "48px"};

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

export const SlotTime = styled.div``;

export const SlotAvailability = styled.div``;
