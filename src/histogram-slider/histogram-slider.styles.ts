import styled from "styled-components";

import { InputRangeSlider } from "../input-range-slider";
import { Colour, Radius, Spacing } from "../theme";

export const Label = styled.div`
    display: flex;
    margin-bottom: ${Spacing["spacing-16"]};
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

export const Bar = styled.div`
    flex: 1;
    border-radius: ${Radius["sm"]} ${Radius["sm"]} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;
    background-color: ${Colour["bg-strongest"]};

    &.barDisabled {
        background-color: ${Colour["bg-disabled"]};
    }

    &.barSelected {
        background-color: ${Colour["bg-selected-stronger"]};
    }

    &.barSelectedDisabled {
        background-color: ${Colour["bg-selected-stronger-disabled"]};
    }
`;

export const Slider = styled(InputRangeSlider)`
    margin-top: -0.3125rem;
`;
