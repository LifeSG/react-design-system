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

export const SlotColumnOverlay = styled.div<{
    $columnIndex: number;
    $totalVisibleColumns: number;
    $actualWidthPercentage?: number;
    $leftPosition?: number;
}>`
    position: absolute;
    top: 0;
    left: ${({ $leftPosition, $columnIndex, $totalVisibleColumns }) => {
        if ($leftPosition !== undefined) {
            return `${$leftPosition}%`;
        }
        return `${($columnIndex / Math.max($totalVisibleColumns, 1)) * 100}%`;
    }};
    width: ${({ $actualWidthPercentage, $totalVisibleColumns }) => {
        if ($actualWidthPercentage !== undefined) {
            return `${$actualWidthPercentage}%`;
        }
        return `${100 / Math.max($totalVisibleColumns, 1)}%`;
    }};
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 0 1px;
    pointer-events: none;
    overflow: visible;
    z-index: 1;
    box-sizing: border-box;
`;

export const SlotContent = styled(Typography.BodyXS)<{
    $status: string;
    $duration: number;
    $offsetTop: number;
    $width: number;
}>`
    width: ${({ $width }) => $width}px;
    height: ${({ $duration }) =>
        $duration
            ? `${($duration / 30) * CELL_HEIGHT - 1}px`
            : `${CELL_HEIGHT - 1}px`};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2px 4px;
    font-size: 0.5625rem;
    position: absolute;
    top: ${({ $offsetTop }) => $offsetTop || 0}px;
    left: 1px;
    right: 1px;
    z-index: 10;
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

    border-left: ${({ $status }) =>
        $status === "available"
            ? `4px solid ${Colour["icon-success"]}`
            : "none"};
`;

export const SlotServiceName = styled.span`
    font-weight: 600;
    font-size: 0.7625rem;
    line-height: 1;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
`;

export const SlotAvailability = styled.span`
    font-weight: 600;
`;

export const HiddenColumnsButton = styled.div<{
    // $visibleColumnsCount: number;
}>`
    width: 100%;
    height: 100%;
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
    min-height: ${CELL_HEIGHT}px;

    &:hover {
        background: ${Colour["bg-strong"]};
    }
`;
