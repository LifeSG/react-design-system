import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { Text } from "../text/text";
import { MonthVariant } from "./calendar-month";

interface StyleProps {
    $variant: MonthVariant;
}

export const MonthPickerContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    gap: 0.5rem 1rem;
    align-content: center;
    justify-content: center;
`;

export const MonthCell = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5rem;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${(props) => {
        switch (props.$variant) {
            case "current-month":
                return css`
                    background-color: ${Color.Accent.Light[6]};
                `;
            case "selected-month":
                return css`
                    background-color: ${Color.Accent.Light[5]};
                    border: 1px solid ${Color.Primary};
                `;
            case "default":
                break;
        }
    }}
`;

export const CellLabel = styled(Text.H5)<StyleProps>`
    ${(props) => {
        switch (props.$variant) {
            case "current-month":
                return css`
                    color: ${Color.Neutral[3]};
                `;
            case "selected-month":
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "semibold")}
                    color: ${Color.Primary};
                `;
            case "default":
                break;
        }
    }}
`;
