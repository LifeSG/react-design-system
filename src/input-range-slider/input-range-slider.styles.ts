import ReactSlider from "react-slider";
import styled from "styled-components";

import { Border, Colour, Radius, Shadow, Spacing } from "../theme";
import { Typography } from "../typography";

export const tokens = {
    track: {
        backgroundColor:
            "--fds-internal-inputRangeSlider-track-backgroundColor",
    },
};

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    isolation: isolate;
`;

export const LabelContainer = styled.div`
    margin-top: ${Spacing["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Spacing["spacing-8"]};
`;

export const IndicatorLabelContainer = styled.div`
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const LabelText = styled(Typography.BodyBL)`
    overflow-wrap: anywhere;
`;

export const Slider = styled(ReactSlider)`
    height: 0.875rem;
`;

export const Knob = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &.inputRangeSliderKnobDisabled {
        cursor: not-allowed;
    }

    &.inputRangeSliderKnobInteractive {
        cursor: grab;

        &:active {
            cursor: grabbing;
        }
    }

    &::after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${Colour["bg"]};
        box-shadow: ${Shadow["sm-subtle"]};
        border: ${Border["width-010"]} ${Border["solid"]}
            ${Colour["border-strong"]};
        border-radius: ${Radius["full"]};
    }

    &.inputRangeSliderKnobDisabled::after {
        border-color: ${Colour["border-selected-disabled"]};
    }
`;

export const SliderThumb = styled.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${Knob}::after, &[data-focused="true"] ${Knob}::after {
        outline-offset: -1px;
        outline: ${Border["width-040"]} ${Border["solid"]}
            ${Colour["border-selected"]};
    }
`;

export const SliderTrack = styled.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Radius["full"]};

    ${tokens.track.backgroundColor}: initial;
    background: var(
        ${tokens.track.backgroundColor},
        ${Colour["border-strong"]}
    );
`;
