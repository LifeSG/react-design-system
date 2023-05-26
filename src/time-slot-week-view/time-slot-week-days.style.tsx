import styled, { css } from "styled-components";
import { Color } from "../color";
import { DayLabel } from "../shared/internal-calendar/internal-calendar-day.style";
import { TextStyleHelper } from "../text";

export const DayLabelWeek = styled(DayLabel)`
    ${(props) => {
        const { $variant } = props;
        switch ($variant) {
            case "default":
                return css`
                    ${TextStyleHelper.getFontFamily("H5", "semibold")}
                    color: ${Color.Neutral[3]};
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
