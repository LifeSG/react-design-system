import styled from "styled-components";
import { Border, Colour } from "../theme";
import { Typography } from "../typography";
import { CELL_HEIGHT, TIME_INDICATOR_WIDTH } from "./const";

export const TimeColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${TIME_INDICATOR_WIDTH}px;
    min-height: fit-content;
    position: sticky;
    left: 0;
    background: ${Colour["bg"]};
    z-index: 3;
    border-right: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;

export const TimeLabel = styled(Typography.BodySM)`
    min-height: ${CELL_HEIGHT * 2}px; /* 2 slots */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${Colour["text-subtler"]};
    justify-content: center;
    padding-right: 8px;
    font-weight: 700;
`;
