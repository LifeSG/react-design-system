import styled from "styled-components";
import { TextStyleHelper } from "../text";

export const ColumnWeekCell = styled.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`;
export const TimeSlotText = styled.div`
    ${TextStyleHelper.getTextStyle("XSmall", 600)}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 16px;
    letter-spacing: 0.12px;
    max-width: 2.5rem;
    span {
        display: block;
    }
`;

export const TimeSlotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;

export const Wrapper = styled.div`
    min-width: 18.5rem;
`;
