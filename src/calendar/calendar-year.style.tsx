import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { VariantYear } from "./types";

interface YearCellProps {
    variant: VariantYear;
}

export const YearPickerContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(82.3px, 1fr));
    grid-template-rows: repeat(4, 64px);
    gap: 8px 16px;
`;

export const YearCell = styled.div<YearCellProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    color: ${Color.Neutral[1]};

    &:hover {
        box-shadow: ${(props) =>
            props.theme.name === "BookingSG"
                ? "0px 0px 4px 1px rgba(161, 87, 255, 0.5)"
                : "0px 0px 4px 1px rgba(87, 169, 255, 0.5)"};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${(props) => {
        switch (props.variant) {
            case "currentYear":
                return css`
                    ${TextStyleHelper.getFontFamily("H5", "regular")}
                    background: ${Color.Accent.Light[6]};
                    color: ${Color.Neutral[3]};
                `;
            case "selectedYear":
                return css`
                    ${TextStyleHelper.getFontFamily("H5", "semibold")}
                    background: ${Color.Accent.Light[5]};
                    color: ${Color.Primary};
                    border: 1px solid ${Color.Primary};
                `;
            case "nextDecaded":
                return css`
                    ${TextStyleHelper.getFontFamily("H5", "regular")}
                    color: ${Color.Neutral[4]}
                `;
            case "default":
                return css`
                    ${TextStyleHelper.getFontFamily("H5", "regular")}
                `;
        }
    }};
`;
