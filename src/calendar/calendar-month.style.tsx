import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { VariantMonth } from "./calendar-month";

interface MonthCellProps {
    $variant: VariantMonth;
}

export const MonthPickerContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 13.5rem);
    grid-template-rows: repeat(6, 2.5rem);
    gap: 0.5rem 1rem;
    align-items: center;
    justify-items: center;
    margin-left: auto;
    margin-right: auto;
`;

export const MonthCell = styled.div<MonthCellProps>`
    ${TextStyleHelper.getTextStyle("H5", "regular")}
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 5rem;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${(props) => {
        switch (props.$variant) {
            case "current-month":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "regular")}
                    background-color: ${Color.Accent.Light[6]};
                    color: ${Color.Neutral[3]};
                `;
            case "selected-month":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "semibold")}
                    background-color: ${Color.Accent.Light[5]};
                    color: ${Color.Primary};
                    border: 1px solid ${Color.Primary};
                `;
            case "default":
                return css`
                    color: ${Color.Neutral[1]};
                `;
        }
    }}
`;
