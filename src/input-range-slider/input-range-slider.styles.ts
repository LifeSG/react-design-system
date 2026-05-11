import { css } from "@linaria/core";

import { Border, Colour, Radius, Shadow, Spacing } from "../theme";

export const tokens = {
    track: {
        backgroundColor: "--fds-internal-inputRangeSlider-track-backgroundColor",
    },
};

export const wrapper = css`
    isolation: isolate;
`;

export const labelContainer = css`
    display: flex;
    gap: ${Spacing["spacing-8"]};
    justify-content: space-between;
    margin-top: ${Spacing["spacing-8"]};
`;

export const indicatorLabelContainer = css`
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const labelText = css`
    overflow-wrap: anywhere;
`;

export const slider = css`
    position: relative;
    height: 0.875rem;
`;

export const knob = css`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2.5rem;
    height: 2.5rem;
    transform: translate(-50%, -50%);

    &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 0.875rem;
        height: 0.875rem;
        content: "";
        background-color: ${Colour["bg"]};
        border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border-strong"]};
        border-radius: ${Radius["full"]};
        box-shadow: ${Shadow["sm-subtle"]};
        transform: translate(-50%, -50%);
    }
`;

export const knobDisabled = css`
    cursor: not-allowed;

    &::after {
        border-color: ${Colour["border-selected-disabled"]};
    }
`;

export const knobInteractive = css`
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
`;

export const sliderThumb = css`
    position: relative;
    width: 0.875rem;
    height: 0.875rem;
    outline: none;

    &:focus .${knob}::after, &[data-focused="true"] .${knob}::after {
        outline: ${Border["width-040"]} ${Border["solid"]} ${Colour["border-selected"]};
        outline-offset: -1px;
    }
`;

export const sliderTrack = css`
    ${tokens.track.backgroundColor}: initial;

    top: 50%;
    height: 0.25rem;
    background: var(${tokens.track.backgroundColor});
    border-radius: ${Radius["full"]};
    transform: translateY(-50%);
`;
