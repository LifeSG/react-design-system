import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { VariantYear } from "./types";

interface YearCellProps {
    variant: VariantYear;
    disabledBefore: boolean;
    disabledAfter: boolean;
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

    ${(props) => {
        switch (props.variant) {
            case "currentYear":
                return css`
                    ${TextStyleHelper.getFontFamily("H5", "regular")}
                    background: ${Color.Accent.Light[6]};
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
