import styled from "styled-components";
import { Border, Colour, Spacing } from "../../theme";
import { Typography } from "../../typography";
import { CELL_HEIGHT, TIME_INDICATOR_WIDTH } from "../const";

export const TimeColumnWrapper = styled.div`
    position: sticky;
    left: 0;
    z-index: 3;
`;

export const TimeColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${TIME_INDICATOR_WIDTH}px;
    min-height: fit-content;
    background: ${Colour["bg"]};
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
    position: relative;
`;

export const TimeLabel = styled(Typography.BodySM)`
    min-height: ${CELL_HEIGHT * 2}px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${Colour["text-subtler"]};
    justify-content: center;
    padding-right: ${Spacing["spacing-8"]};
    font-weight: 700;
`;

export const TimelineCircle = styled.div<{
    $top: number;
    $isWeekView: boolean;
}>`
    position: absolute;
    right: -6px;
    top: ${({ $top }) => $top - 6}px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${Colour["icon-primary"]};
    z-index: 4;
    box-sizing: border-box;
    display: ${({ $isWeekView }) => ($isWeekView ? "none" : "block")};
`;
