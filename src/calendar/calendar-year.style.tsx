import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { YearVariant } from "./calendar-year";

interface StyleProps {
    $variant: YearVariant;
}

export const YearPickerContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(5.15rem, 1fr));
    grid-template-rows: repeat(4, 4rem);
    gap: 0.5rem 1rem;
    align-content: center;
`;

export const YearCell = styled.div<StyleProps>`
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
            case "current-year":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "regular")}
                    background: ${Color.Accent.Light[6]};
                    color: ${Color.Neutral[3]};
                `;
            case "selected-year":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "semibold")}
                    background: ${Color.Accent.Light[5]};
                    color: ${Color.Primary};
                    border: 1px solid ${Color.Primary};
                `;
            case "other-decade":
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
