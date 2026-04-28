import { css } from "@linaria/core";

import { Border, Colour, Radius, Shadow, Spacing } from "../theme";

export const tokens = {
    track: {
        backgroundColor:
            "--fds-internal-inputRangeSlider-track-backgroundColor",
    },
};

export const wrapper = css`
    isolation: isolate;
`;

export const labelContainer = css`
    margin-top: ${Spacing["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Spacing["spacing-8"]};
`;

export const indicatorLabelContainer = css`
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const labelText = css`
    overflow-wrap: anywhere;
`;

export const slider = css`
    height: 0.875rem;
`;

export const knob = css`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus .${knob}::after, &[data-focused="true"] .${knob}::after {
        outline-offset: -1px;
        outline: ${Border["width-040"]} ${Border["solid"]}
            ${Colour["border-selected"]};
    }
`;

export const sliderTrack = css`
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
