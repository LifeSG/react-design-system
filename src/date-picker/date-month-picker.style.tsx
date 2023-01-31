import { MediaQuery } from "src/media";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { VariantMonth } from "./types";

interface MonthCellProps {
    variant: VariantMonth;
    disabledBefore: boolean;
    disabledAfter: boolean;
}

export const MonthPickerContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 40px);
    gap: 8px 16px;
    align-items: center;
    justify-items: center;

    ${MediaQuery.MaxWidth.mobileL} {
        grid-template-columns: repeat(2, 104px);
        grid-template-rows: repeat(6, 34.67px);
    }
`;

export const MonthCell = styled.div<MonthCellProps>`
    ${TextStyleHelper.getFontFamily("H5", "regular")}
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 80px;

    ${(props) => {
        switch (props.variant) {
            case "currentMonth":
                return css`
                    ${TextStyleHelper.getFontFamily("H5", "regular")}
                    background-color: ${Color.Accent.Light[6]};
                    color: ${Color.Neutral[3]};
                `;
            case "selectedMonth":
                return css`
                    ${TextStyleHelper.getFontFamily("H5", "semibold")}
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

    ${(props) => {
        if (props.disabledAfter) {
            return css`
                color: ${Color.Neutral[4]};
                pointer-events: none;

                &:hover {
                    box-shadow: unset;
                    border: unset;
                }
            `;
        }

        if (props.disabledBefore) {
            return css`
                color: ${Color.Neutral[4]};
                pointer-events: none;

                &:hover {
                    box-shadow: unset;
                    border: unset;
                }
            `;
        }
    }}
`;
