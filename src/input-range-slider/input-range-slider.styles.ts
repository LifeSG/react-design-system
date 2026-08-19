import { css } from "@linaria/core";

import { Border, Colour, Radius, Shadow, Spacing } from "../theme";

export const tokens = {
    track: {
        backgroundColor:
            "--fds-internal-inputRangeSlider-track-backgroundColor",
        left: "--fds-internal-inputRangeSlider-track-left",
        right: "--fds-internal-inputRangeSlider-track-right",
    },
    thumb: {
        left: "--fds-internal-inputRangeSlider-thumb-left",
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
    position: relative;
    touch-action: none;
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
    position: absolute;
    z-index: 1;
    outline: none;

    ${tokens.thumb.left}: initial;
    left: var(${tokens.thumb.left}, 0px);

    &:focus .${knob}::after, &[data-focused="true"] .${knob}::after {
        outline-offset: -1px;
        outline: ${Border["width-040"]} ${Border["solid"]}
            ${Colour["border-selected"]};
    }
`;

export const sliderTrack = css`
    position: absolute;
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Radius["full"]};

    ${tokens.track.left}: initial;
    ${tokens.track.right}: initial;
    left: var(${tokens.track.left}, 0px);
    right: var(${tokens.track.right}, 0px);

    ${tokens.track.backgroundColor}: initial;
    background: var(
        ${tokens.track.backgroundColor},
        ${Colour["border-strong"]}
    );
`;
