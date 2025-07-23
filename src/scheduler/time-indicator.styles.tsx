import styled from "styled-components";
import { Border, Colour } from "../theme";
import { Typography } from "../typography";
import { CELL_HEIGHT, TIME_INDICATOR_WIDTH } from "./const";

export const TimeColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: ${TIME_INDICATOR_WIDTH}px;
    font-weight: 700;
    position: sticky;
    left: 0;
    z-index: 2;
    color: ${Colour["text-subtler"]};
    background: ${Colour["bg"]};
    border-left: ${Border["width-010"]} ${Border.solid} ${Colour["border"]};
`;

export const TimeLabel = styled(Typography.BodySM).attrs({ as: 'div' })`
    min-height: ${CELL_HEIGHT * 2}px; /* 2 slots */
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 8px;
`;
