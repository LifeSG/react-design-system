import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { VariantYear } from "./types";

interface YearCellProps {
    $variant: VariantYear;
}

export const YearPickerContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(5.15rem, 1fr));
    grid-template-rows: repeat(4, 4rem);
    gap: 0.5rem 1rem;
`;

export const YearCell = styled.div<YearCellProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    cursor: pointer;
    color: ${Color.Neutral[1]};

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${(props) => {
        switch (props.$variant) {
            case "currentYear":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "regular")}
                    background: ${Color.Accent.Light[6]};
                    color: ${Color.Neutral[3]};
                `;
            case "selectedYear":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "semibold")}
                    background: ${Color.Accent.Light[5]};
                    color: ${Color.Primary};
                    border: 1px solid ${Color.Primary};
                `;
            case "otherDecade":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "regular")}
                    color: ${Color.Neutral[4]}
                `;
            case "default":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "regular")}
                `;
        }
    }};
`;
