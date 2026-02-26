import styled, { css } from "styled-components";
import { InputRangeSlider } from "../input-range-slider";
import { V3_Colour, V3_Radius, V3_Spacing } from "../v3_theme";

interface BarStyleProps {
    $selected: boolean;
    $disabled: boolean | undefined;
}

export const Label = styled.div`
    display: flex;
    margin-bottom: ${V3_Spacing["spacing-16"]};
    align-items: baseline;
`;

export const Separator = styled.div`
    margin: 0 0.5rem;
`;

export const Histogram = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`;

export const Bar = styled.div<BarStyleProps>`
    flex: 1;
    border-radius: ${V3_Radius["sm"]} ${V3_Radius["sm"]} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${(props) => {
        let color = V3_Colour["bg-strongest"];
        if (props.$disabled && props.$selected) {
            color = V3_Colour["bg-selected-stronger-disabled"];
        } else if (props.$disabled) {
            color = V3_Colour["bg-disabled"];
        } else if (props.$selected) {
            color = V3_Colour["bg-selected-stronger"];
        }
        return css`
            background-color: ${color};
        `;
    }}
`;

export const Slider = styled(InputRangeSlider)`
    margin-top: -0.3125rem;
`;
