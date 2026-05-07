import styled from "styled-components";

import { InputRangeSlider } from "../input-range-slider";
import { V3_Colour, V3_Radius, V3_Spacing } from "../v3_theme";

interface BarStyleProps {
    $selected: boolean;
    $disabled: boolean | undefined;
}

export const Label = styled.div`
    display: flex;
    align-items: baseline;
    margin-bottom: ${V3_Spacing["spacing-16"]};
`;

export const Separator = styled.div`
    margin: 0 0.5rem;
`;

export const Histogram = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 4rem;
    padding: 0 0.4375rem;
`;

const getBarBackgroundColor = (props: BarStyleProps) => {
    if (props.$disabled && props.$selected) {
        return V3_Colour["bg-selected-stronger-disabled"];
    }
    if (props.$disabled) {
        return V3_Colour["bg-disabled"];
    }
    if (props.$selected) {
        return V3_Colour["bg-selected-stronger"];
    }
    return V3_Colour["bg-strongest"];
};

export const Bar = styled.div<BarStyleProps>`
    flex: 1;
    background-color: ${(props) => getBarBackgroundColor(props)};
    background-clip: content-box;
    border: 0.5px solid transparent; /* space between bars */
    border-radius: ${V3_Radius["sm"]} ${V3_Radius["sm"]} 0 0;
`;

export const Slider = styled(InputRangeSlider)`
    margin-top: -0.3125rem;
`;
