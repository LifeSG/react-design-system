import styled, { css } from "styled-components";
import { Color } from "../color";
import { InputRangeSlider } from "../input-range-slider";

interface BarStyleProps {
    $selected: boolean;
    $disabled: boolean;
}

export const Label = styled.div`
    display: flex;
    margin-bottom: 1rem;
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
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${Color.Neutral[8]};

    ${(props) => {
        let color = Color.Neutral[6];
        if (props.$disabled && props.$selected) {
            color = Color.Neutral[4];
        } else if (props.$disabled) {
            color = Color.Neutral[5];
        } else if (props.$selected) {
            color = Color.Accent.Light[1];
        }
        return css`
            background-color: ${color};
        `;
    }}
`;

export const Slider = styled(InputRangeSlider)`
    margin-top: -0.3125rem;
`;
