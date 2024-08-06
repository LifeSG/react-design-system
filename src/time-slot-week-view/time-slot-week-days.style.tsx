import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color";
import { DayLabel } from "../shared/internal-calendar/standard";
import { V2_TextStyleHelper } from "../v2_text";

export const DayLabelWeek = styled(DayLabel)`
    ${(props) => {
        const { $variant } = props;
        switch ($variant) {
            case "default":
                return css`
                    ${V2_TextStyleHelper.getFontFamily("H5", "semibold")}
                    color: ${v2_Color.Neutral[3]};
                `;
        }
    }}
`;

export const HeaderCellWeek = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const ColumnWeekCell = styled.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`;
export const TimeSlotText = styled.div`
    ${V2_TextStyleHelper.getTextStyle("XSmall", "semibold")}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${v2_Color.Neutral[1]};
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
