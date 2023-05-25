import styled from "styled-components";
import { MediaQuery } from "../media/media";
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

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    ${MediaQuery.MaxWidth.mobileL} {
        padding: 0 1.25rem;
    }
`;
