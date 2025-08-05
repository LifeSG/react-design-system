import styled, { css } from "styled-components";
import { Border, Colour, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { CELL_HEIGHT, HEADER_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";

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
export const Title = styled(Typography.BodyMD)`
    font-weight: 600;
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
    border: ${Border["width-010"]} solid ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    padding: 2px 4px;
    font-size: 0.625rem;
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
    font-size: 0.625rem;
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

// New styled components for the updated week view layout
export const SlotCellContainer = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 1px;
    overflow: visible;
`;

export const ColumnContainer = styled.div`
    flex: 1;
    position: relative;
    min-width: 0;
    overflow: visible;
    height: 100%;
`;

export const SlotColumnOverlay = styled.div<{
    $columnIndex: number;
    $totalVisibleColumns: number;
}>`
    position: absolute;
    top: 0;
    left: ${({ $columnIndex, $totalVisibleColumns }) =>
        ($columnIndex / Math.max($totalVisibleColumns, 1)) * 100}%;
    width: ${({ $totalVisibleColumns }) =>
        100 / Math.max($totalVisibleColumns, 1)}%;
    height: 100%;
    pointer-events: none;
`;

export const SlotContentWrapper = styled.div`
    pointer-events: auto;
`;

export const WeekSlotContent = styled(Typography.BodyXS)<{
    status?: string;
    duration?: number;
    $offsetTop?: number;
    $height?: number;
}>`
    width: 100%;
    left: 0;
    height: ${({ $height }) => $height || 20}px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2px 4px;
    font-size: 0.5625rem;
    position: absolute;
    top: ${({ $offsetTop }) => $offsetTop || 0}px;
    z-index: 10;
    margin-top: 0;
    font-weight: 500;
    border-radius: ${Radius["sm"]};

    display: flex;

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
                return Colour["bg-success-hover"];
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

export const SlotServiceName = styled.span`
    font-weight: 600;
    font-size: 0.5625rem;
    line-height: 1;
`;

export const SlotTime = styled.span`
    font-size: 0.4375rem;
    opacity: 0.8;
    line-height: 1;
`;

export const HiddenColumnsButton = styled.div<{
    $visibleColumnsCount: number;
}>`
    position: absolute;
    top: 0;
    right: 0;
    width: ${({ $visibleColumnsCount }) =>
        100 / Math.max($visibleColumnsCount + 1, 1)}%;
    height: ${CELL_HEIGHT}px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Colour["bg"]};
    border: ${Border["width-010"]} solid ${Colour["border"]};
    border-radius: ${Radius["sm"]};
    cursor: pointer;
    font-size: 0.5625rem;
    color: ${Colour["text-primary"]};
    z-index: 20;

    &:hover {
        background: ${Colour["bg-strong"]};
    }
`;
