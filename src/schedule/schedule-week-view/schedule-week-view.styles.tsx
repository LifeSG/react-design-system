import styled, { css } from "styled-components";
import { Border, Colour, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { CELL_HEIGHT, HEADER_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";

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
    justify-content: center;
    padding: 24px;
    color: ${Colour["text-primary"]};
`;
export const Title = styled(Typography.BodyMD)<{
    $isToday?: boolean;
}>`
    font-weight: 600;
    ${({ $isToday }) =>
        $isToday &&
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
    font-weight: 600;
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

export const Timeline = styled.div<{ $top: number }>`
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${Colour["icon-primary"]};
    top: ${({ $top }) => $top}px;
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

export const SlotCell = styled.div<{
    $startTime?: string;
}>`
    min-height: ${CELL_HEIGHT}px;
    position: relative;
    border-bottom: ${Border["width-010"]} solid ${Colour["border"]};
    ${({ $startTime }) =>
        $startTime?.endsWith(":00") &&
        css`
            border-bottom-style: dashed;
        `}
    cursor: pointer;
`;

export const SlotColumnOverlay = styled.div<{
    $columnIndex: number;
    $totalVisibleColumns: number;
    $actualWidthPercentage?: number;
    $leftPosition?: number;
}>`
    position: absolute;
    top: 0;
    left: ${({ $leftPosition }) => {
        return `calc((100% - 14px) * ${$leftPosition} / 100)`;
    }};
    width: ${({ $actualWidthPercentage }) => {
        return `calc((100% - 14px) * ${$actualWidthPercentage} / 100)`;
    }};
    height: 100%;
    display: flex;
    flex-direction: column;
    pointer-events: none;
    overflow: visible;
    z-index: 1;
    box-sizing: border-box;
`;

export const SlotContent = styled(Typography.BodyXS)<{
    $status: string;
    $duration: number;
    $offsetTop: number;
}>`
    /* Fill the overlay column width responsively with a small horizontal inset */
    width: calc(100% - 1px);
    height: ${({ $duration }) =>
        $duration
            ? `${($duration / 30) * CELL_HEIGHT - 1}px`
            : `${CELL_HEIGHT - 1}px`};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2px 4px;
    position: absolute;
    top: ${({ $offsetTop }) => $offsetTop || 0}px;
    margin-top: 0;
    font-weight: 500;
    border-radius: ${Radius["sm"]};
    box-sizing: border-box;

    background: ${({ $status }) => {
        switch ($status) {
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

    color: ${({ $status }) =>
        $status === "blocked" ? Colour["text-inverse"] : "inherit"};

    border-left: ${Border["width-040"]} solid
        ${({ $status }) =>
            $status === "available" ? Colour["icon-success"] : "none"};
`;

export const SlotServiceName = styled.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
`;

export const SlotAvailability = styled.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
`;

export const HiddenColumnsButton = styled.div<{
    $heightPercentage?: number;
    $isMultiple?: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${Colour["text-primary"]};
    min-height: ${({ $heightPercentage }) =>
        $heightPercentage ? `${$heightPercentage}%` : `${CELL_HEIGHT}px`};
    height: ${({ $heightPercentage }) =>
        $heightPercentage ? `${$heightPercentage}%` : "auto"};
    pointer-events: auto;
    &:hover {
        border-radius: ${Radius["sm"]};
        box-shadow: 0 2px 8px 0 ${Colour["border"]};
    }
`;
